import React,{useState} from 'react'
import styles from './app.module.css'

const SignupForm = ({submitForm}) => {
    const [values,setvalues] = useState({
        fullname:'',
        email:'',
        password:'',
        Age:'',
        weight:'',
        height:''    }
    );
    const handleFormSubmit = ()=>{

    }
    const handleChange = ()=>{

    }
    return(
        <div className={styles.container} style={{
            backgroundImage: 'url(/static/background3.jpg)', backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
        }}>
            <div className={styles.appwrapper}>
                <div>
                    <h2 className="title">Create Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className={styles.name}>
                        <laber className="label">Full Name</laber>
                        <input 
                            className={styles.input} 
                            type="text" 
                            name="fullname" 
                            value={values.fullname}
                            onChange={handleChange} 
                        /> 
                    </div>
                    <div className={styles.email}>
                        <laber className="label">Email</laber>
                        <input 
                            className={styles.input} 
                            type="email" 
                            name="email" 
                            value={values.email}
                            onChange={handleChange} 
                        />   
                    </div>
                    <div className={styles.name}>
                        <laber className="label">Password</laber>
                        <input 
                            className={styles.input} 
                            type="password" 
                            name="password"  
                            value={values.password} 
                            onChange={handleChange}
                        />  
                    </div>
                    <div className={styles.name}>
                        <laber className="label">Age</laber>
                        <input 
                            className={styles.input} 
                            type="text" 
                            name="fullname" 
                            value={values.Age}
                            onChange={handleChange} 
                        />  
                    </div>
                    <div className={styles.name}>
                        <laber className="label">Weight</laber>
                        <input 
                            className={styles.input} 
                            type="text" 
                            name="fullname" 
                            value={values.weight}
                            onChange={handleChange} 
                        />  
                    </div>
                    <div className={styles.name}>
                        <laber className="label">Height</laber>
                        <input 
                            className={styles.input} 
                            type="text" 
                            name="fullname" 
                            value={values.height}
                            onChange={handleChange} 
                        />
                        
                    </div>
                    <div>
                        <button className={styles.submit} onClick={handleFormSubmit}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupForm