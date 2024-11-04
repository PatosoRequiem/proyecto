import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/fesw.png'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>
                <img className='logo' src={Logo} alt='logo' onClick={() => navigate("/")}/>
                {" "}
                XXXII Feria de Software 2024
            </h1>
        </div>
    );
}

export default Header