import { useState } from 'react'

import React from 'react'
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import '../Style/Login.css'

function Login() {

    const [type, setType]=useState('password');
    const [icon, setIcon]=useState(eyeOff);

    const handleToggle = () => {
        if(type==='password') {
            setIcon(eye);
            setType('text');
        }
        else {
            setIcon(eyeOff);
            setType('password');
        }
    }

    return (
        <div>
            <form action="index.html" className="box" method="post">
                <h1>Login</h1><br/><hr/>
            
                <input type="text" name="" placeholder="Username" required autocomplete="off" />
                <input type={type} placeholder="Password" required autocomplete="off" />
                <span onClick={handleToggle}><Icon icon={icon} size={20}/></span>
                <input type="submit" name="" value="Login" />
            </form>
        </div>
    )
}

export default Login
