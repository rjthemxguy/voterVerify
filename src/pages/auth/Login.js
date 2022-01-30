import React, {useState} from 'react';

const Login = () => {

const [user, setUser] = useState({
    email: "",
    password: ""


});

const {email, password} = user;

const onChange = e => setUser({...user, [e.target.name]:e.target.value});

const onSubmit = e => {
    e.preventDefault();

}

  return <div className="topMargin smallWidth">
      <h1>Login</h1>

      <form onSubmit ={onSubmit}>
       
      <input type="email"
            class="form-control mt-4"
            placeholder="Email"
            name="email"
            value={email}
            onChange = {onChange}/>

            <input type="password"
            class="form-control mt-4"
            placeholder="Password"
            name="password"
            value={password}
            onChange = {onChange}/>
       

      </form>
        <input type="submit" value ="Login" className="btn btn-primary btn-block mt-4"/>
  </div>;
};

export default Login;
