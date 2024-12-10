import closeMenu from '../Image/icons8-close-26.png';
import { useState } from 'react';
import menu from '../Image/icons8-menu-100.png'; 

const Header = () => {

    const [menuClick, setMenuClick] = useState(false)
    return (
        <header className="header_container">
            <h1>SS <span>DEVELOPMENT</span></h1>     
            <nav>
                <ol>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Project</li>
                </ol>
                
                <img className="header__menuClick" src = {menu} alt = "menu" style={{width:"30px", cursor:"pointer"}}
                onClick={()=>{
                    setMenuClick((pre)=>(!pre?true:pre));
                }}/>   



                <ul style={{
                    right:`${menuClick? "-20px" : "-260px"}`,
                }}>
                    <div className='header__menuClose'>
                        <img src={closeMenu} alt='close menu'
                        
                        
                        onClick={()=>{
                            setMenuClick((pre)=>(pre?false : pre));
                        }}
                        
                        />

                    </div>
                    <div className='header__menu'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Project</li>
                    </div>
                    
                </ul>


            </nav>   
        </header>
    )
};

export default Header;