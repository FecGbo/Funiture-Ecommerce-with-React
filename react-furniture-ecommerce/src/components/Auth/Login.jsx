import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Input from '../Input/Input';
import '../css/login.css';
import { Link } from 'react-router-dom';

function Login({setLoggedIn}) {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    // const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState("");

    const navigate=useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await fetch('/users.json');
        const users = await res.json();
        const found = users.find(u => u.username === user && u.password === pass);

        if (found) {
            setLoggedIn(true);
            setError("");

            if(found.role==='admin' || found.isAdmin){
                navigate('/admin/dashboard');
            } else {
                navigate('/');
            }
        } else {
            setError("Username or Password does not match");
        }
    }

 
    return (
        <>
        <Header pageName={"Login"} />

        <div className="login-content">
        <div className="login-left">

            <img src="/slider-img/image-3.png" alt="" />
        </div>


        <div className="login-right">
                 <span style={{fontSize:'40px'}}> <b> Login </b></span>
          
          <form onSubmit={handleLogin}>
             
            <input value={user} onChange={e => setUser(e.target.value)} placeholder="Username" />
            <input value={pass} onChange={e => setPass(e.target.value)} placeholder="Password" type="password" />
            <div className="check-remember">
                <div className="check">
                                    <input type="checkbox" />
                <label htmlFor="">Keep me logged in</label>
                </div>

                <label htmlFor="">Forget password?</label>
   
             
            </div>
            <button type="submit">Login</button>

            <p> <span style={{opacity:"0.5"}}> Don't have an account? </span><span><b> <Link to='/.register' style={{color:'black'}}>Sign up</Link> </b></span>  </p>
            {error && <div style={{ color: 'red'}}>{error}</div>}
        </form>
          
        </div>

        </div>
    

  
            
            </>
    )
}

export default Login