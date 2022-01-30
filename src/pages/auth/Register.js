import React, {useState} from 'react';

const Register = () => {

const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""

});

const {name, email, password, password2} = user;

const onChange = e => setUser({...user, [e.target.name]:e.target.value});

const onSubmit = e => {
    e.preventDefault();

}

  return <div className="topMargin smallWidth">
      <h1>Account Register</h1>

      <form onSubmit ={onSubmit}>
      <input type="text"
            class="form-control mt-4"
            placeholder="Name"
            name="name"
            value={name}
            onChange = {onChange}/>

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

            <input type="pasword"
            class="form-control mt-4"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange = {onChange}/>

         <button type="submit" value ="Register" className="btn btn-primary btn-large btn-block mt-4">Register</button>
      </form>
       
  </div>;
};

export default Register;
