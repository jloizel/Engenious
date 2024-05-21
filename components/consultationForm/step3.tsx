import React from 'react';

const Step3 = ({ data, handleChange, register, errors, getInputClassName }) => (
  <div>
    <div>
      <textarea
        placeholder="Role Details"
        {...register('roleDetails')}
        value={data.roleDetails}
        onChange={handleChange}
      />
      {errors.roleDetails && <p>{errors.roleDetails.message}</p>}
    </div>
    <div>
      <input
        type="text"
        placeholder="Contact Info"
        {...register('contactInfo')}
        value={data.contactInfo}
        onChange={handleChange}
      />
      {errors.contactInfo && <p>{errors.contactInfo.message}</p>}
    </div>
  </div>
);

export default Step3;
