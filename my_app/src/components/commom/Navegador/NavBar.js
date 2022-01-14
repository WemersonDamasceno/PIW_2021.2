/* eslint-disable jsx-a11y/anchor-is-valid */
import "./NavBar.css";
import Img from "../../img/logo.png"
import { FaHome, FaImage,FaUserCircle } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

export function NavBar(){
    const Nome = (props) => (
        <p className="Nome">{props.nomeNome}</p>
    )
    
    return(            
        <nav className="navegador">
            <NavLink exact to="/">
                 <img src={Img} alt="Logo"/>
            </NavLink>
           

            <div className="divIconsNav">
                <NavLink className="link-nav" exact to="/"> Home{/*<FaHome className="iconNav"/>*/} </NavLink> 
                <NavLink className="link-nav" to="/criarPosts">Postar {/*<FaImage className="iconNav"/>*/} </NavLink> 
                <NavLink  to="#" className="link-nav"> Wemerson</NavLink>
                
                {/* 
                <div className="link-nav">
                    <NavLink  to="#" className="link-nav"> Wemerson
                       
                        <FaUserCircle className="iconNav"/> 
                        <Nome nomeNome="Wemerson"/>
                        </div> 
                        */}
                    
                
            </div>
        </nav>
    )
}