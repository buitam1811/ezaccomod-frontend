import React from 'react'
import './LogIn.css'
import useForm from './LogInUse'
import validate from './LogInValidate'

const LogInFillIn = ({submitForm}) => {
    const refreshPage = () => {
        window.location.reload();
    }

    const { handleChange, handleSubmit, values, errors} = useForm(submitForm, validate);

    return (
        <div className="login-content">
            <form onSubmit={handleSubmit} className="login-form" noValidate>
                <div className="login-description">
                    LOG IN
                </div>
                <div className="login-inputs">
                    <label className="login-label">Username</label>
                    <input 
                     type="text"
                     name="username" 
                     placeholder="Enter your username" 
                     className="login-input"
                     value={values.username}
                     onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="login-inputs">
                    <label className="login-label">Password</label>
                    <input 
                     type="password"
                     name="password" 
                     placeholder="Enter your password" 
                     className="login-input"
                     value={values.password}
                     onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className="login-btn">Log In Now</button>
            </form>
        </div>
    )
}

export default LogInFillIn