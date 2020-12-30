export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6 || values.password != 123456) {
      errors.password = 'Wrong Password!';
    }
    return errors;
  }