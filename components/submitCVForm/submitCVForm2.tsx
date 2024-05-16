'use client';

import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../../src/app/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
  file: {
    name: string;
    content: string;
  };
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [content, setContent] = React.useState<string | null>(null);
  const [filename, setFilename] = React.useState<string>('');

  function onSubmit(data: FormData) {
    const base64Content = content.split(',')[1];

    const formDataWithFile = {
      ...data,
      file: {
        name: filename,
        content: base64Content,
      },
    };

    sendEmail(formDataWithFile);
  }
  
  const onAddFileAction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const files = e.target.files;

    if (files && files[0]) {
      reader.onload = (r) => {
        if (r.target && r.target.result) {
          setContent(r.target.result.toString());
          setFilename(files[0].name);
        }
      };

      reader.readAsDataURL(files[0]);
    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-black'
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-black'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-black'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>

      <input
        type="file"
        name="file"
        onChange={onAddFileAction}
        accept="application/pdf,application/vnd.ms-excel"
      />

      <div>
        <button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;

