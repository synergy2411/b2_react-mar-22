import React, { useRef } from "react";

const Login = () => {
    const usernameInputRef =  useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event : React.FormEvent) => {
        event.preventDefault();
        console.log("Username : ", usernameInputRef.current!.value)
        console.log("Password : ", passwordInputRef.current!.value)
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
                                    className="form-control"
                                    ref = {usernameInputRef}/>
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