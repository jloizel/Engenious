import React from 'react';

const Step2 = ({ data, handleChange, register, errors, getInputClassName }) => (
  <div>
    <div>
      <input
        type="text"
        placeholder="Position Type"
        {...register('positionType')}
        value={data.positionType}
        onChange={handleChange}
      />
      {errors.positionType && <p>{errors.positionType.message}</p>}
    </div>
    <div>
      <textarea
        placeholder="Details"
        {...register('details')}
        value={data.details}
        onChange={handleChange}
      />
      {errors.details && <p>{errors.details.message}</p>}
    </div>
  </div>
);

export default Step2;
