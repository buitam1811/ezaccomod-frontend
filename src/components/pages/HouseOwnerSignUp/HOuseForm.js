import Axios from 'axios';
import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    fullname: '',
    idno: '',
    phonenumber: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    const data = {
      username: values.username,
      email: values.email,
      password: values.password,
      role: "O"
    };
    
    Axios.post('api/generic-api/user-list/', data).then(
      res => {
        console.log(res);
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;

