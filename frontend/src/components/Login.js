import React, { useState } from 'react'
import styles from './app.module.css'

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
        <div className={styles.container} style={{
            backgroundImage: 'url(/static/background3.jpg)', backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
        }}>
            <div style={{ height: '50%',background:'#EAF6F6' }} className={styles.appwrapper}>
                <form style={{ height: '60%' }} >
                    <div className={styles.email}>
                        <laber className="label">Email</laber>
                        <input
                            className={styles.input}
                            type="email"
                            name="email"
                            onChange={handleChange}
                        />

                    </div>
                    <div className={styles.password}>
                        <laber className="label">Password</laber>
                        <input
                            className={styles.input}
                            type="password"
                            name="password"
                            onChange={handleChange}
                        />

                    </div>
                    <div>
                        <button className={styles.submit} onClick={handleFormSubmit}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login