// EmailForm.tsx

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Input } from '@mui/material';

interface FormData {
  username: string;
  file: File | null;
}

interface EmailFormProps {
  onSubmitSuccess: () => void; // Callback function for form submission success
}

const EmailForm: React.FC<EmailFormProps> = ({ onSubmitSuccess }) => {
  const { register, handleSubmit } = useForm<FormData>();
  const [file, setFile] = useState<File | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = new FormData();
    formData.append('username', data.username);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        onSubmitSuccess(); // Call the onSubmitSuccess callback
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username:</label>
        <Input type="text" id="username" {...register('username')} />
      </div>
      <div>
        <label htmlFor="file">Attach file:</label>
        <Input type="file" id="file" onChange={handleFileChange} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default EmailForm;
