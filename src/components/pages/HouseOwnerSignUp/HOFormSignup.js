import React from 'react';
import validate from './HOvalidateInfo';
import useForm from './HOuseForm';
import './HOForm.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='HOform-content'>
      <form onSubmit={handleSubmit} className='HOform' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='HOform-inputs'>
          <label className='HOform-label'>Username</label>
          <input
            className='HOform-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='HOform-inputs'>
          <label className='HOform-label'>Full name</label>
          <input
            className='HOform-input'
            type='text'
            name='fullname'
            placeholder='Enter your full name'
            value={values.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <p>{errors.fullname}</p>}
        </div>
        <div className='HOform-inputs'>
          <label className='HOform-label'>Your ID No.</label>
          <input
            className='HOform-input'
            type='text'
            name='idno'
            placeholder='Enter your ID No.'
            value={values.idno}
            onChange={handleChange}
          />
          {errors.idno && <p>{errors.idno}</p>}
        </div>
        <div className='HOform-inputs'>
          <label className='HOform-label'>Phone Number</label>
          <input
            className='HOform-input'
            type='tel'
            name='phonenumber'
            placeholder='Enter your phone number'
            value={values.phonenumber}
            onChange={handleChange}
          />
          {errors.phonenumber && <p>{errors.phonenumber}</p>}
        </div>
        <div className='HOform-inputs'>
          <label className='HOform-label'>Email</label>
          <input
            className='HOform-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='HOform-inputs'>
          <label className='HOform-label'>Password</label>
          <input
            className='HOform-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='HOform-inputs'>
          <label className='HOform-label'>Confirm Password</label>
          <input
            className='HOform-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='HOform-input-btn' type='submit'>
          Sign up
        </button>
        <span className='HOform-input-login'>
          Already have an account? Login <a href='/log-in'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;

