import React, { useRef, useState } from "react";
import classes from "./Login.module.css";

const Login = () => {
    const usernameInputRef =  useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null)

    const [isValid, setIsValid] = useState<boolean>(true)

    const submitHandler = (event : React.FormEvent) => {
        event.preventDefault();
        console.log("Username : ", usernameInputRef.current!.value)
        console.log("Password : ", passwordInputRef.current!.value)
    }

    const isValidUsername = () => {
        if(usernameInputRef.current!.value.includes('@')){
            setIsValid(true)
        }else{
            setIsValid(false)
        }
    }
    return (
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={submitHandler}>
                            {/* username */}
                            <div className="form-group">
                                <label htmlFor="username">Username :</label>
                                <input type="text" 
                                    name="username" 
                                    className={`form-control ${isValid ? classes.valid : classes.invalid}`}
                                    ref = {usernameInputRef}
                                    onBlur={isValidUsername}/>
                                    {!isValid && <p className="alert alert-danger">
                                        Username should be proper email format 
                                        </p>}
                            </div>
                            {/* password */}
                            <div className="form-group">
                                <label htmlFor="password">Password :</label>
                                <input type="password" 
                                    name="password" 
                                    className="form-control" 
                                    ref={passwordInputRef}/>
                            </div>
                            {/* buttons */}
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-6">
                                    <button className="btn btn-primary btn-block"
                                        disabled={!isValid}
                                        type="submit">Login</button>
                                    </div>
                                    <div className="col-6">
                                    <button className="btn btn-warning btn-block">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;