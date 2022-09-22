import React, { useState } from 'react'

const Login = ({ submitForm }) => {
    const [values, setvalues] = useState({
        email: '',
        password: ''
    }
    );
    const handleFormSubmit = () => {

    }
    const handleChange = () => {

    }
    return (
        <div className="container" style={{
            backgroundImage: 'url(/static/back.png)', backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
        }}>
            <div style={{ height: '50%',background:'#EAF6F6' }} className="app-wrapper">
                <form style={{ height: '50%' }} className="form-wrapper">
                    <div className="email">
                        <laber className="label">Email</laber>
                        <input
                            className="input"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />

                    </div>
                    <div className="password">
                        <laber className="label">Password</laber>
                        <input
                            className="input"
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />

                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login