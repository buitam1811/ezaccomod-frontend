import Axios from 'axios';
import { useState , useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const LogInUse = (callback, validate) => {
  const [values, setValues] = useState(
      {
          username: '',
          password: ''
      }
  );
  
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
      password: values.password,
    };
    
    Axios.post('api/login_authentication-api/', data).then(
      res => {
      console.log(res);
      localStorage.setItem('user', JSON.stringify(res.data));
      localStorage.setItem('logged', true);
      localStorage.setItem('token',res.data.access);
      localStorage.setItem('user_role',res.data.role);
    }
    ).catch(
      err => {
      console.log(err);
    })
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

export default LogInUse
