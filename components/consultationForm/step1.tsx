import React from 'react';

const Step1 = ({ data, handleChange, register, errors, getInputClassName  }) => (
  <div>
    <div>
      <input
        type="text"
        placeholder="Name"
        {...register('name')}
        value={data.name}
        onChange={handleChange}
        className={getInputClassName('name')}
      />
      {errors.name && <p>{errors.name.message}</p>}
    </div>
    <div>
      <input
        type="text"
        placeholder="Email"
        {...register('email')}
        value={data.email}
        onChange={handleChange}
        className={getInputClassName('email')}
      />
      {errors.email && <p>{errors.email.message}</p>}
    </div>
    <div>
      <input
        type="text"
        placeholder="Phone"
        {...register('phone')}
        value={data.phone}
        onChange={handleChange}
        className={getInputClassName('phone')}
      />
      {errors.phone && <p>{errors.phone.message}</p>}
    </div>
  </div>
);

export default Step1;
