import React,{useState} from 'react'
import styles from './app.modules.css'

const SignupForm = ({submitForm}) => {
    const [values,setvalues] = useState({
        fullname:'',
        email:'',
        password:''}
    );
    const handleFormSubmit = ()=>{

    }
    const handleChange = ()=>{

    }
    return(
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <laber className="label">Full Name</laber>
                        <input 
                            className="input" 
                            type="text" 
                            name="fullname" 
                            value={values.fullname}
                            onChange={handleChange} 
                        />
                        
                    </div>
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
                        <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupForm