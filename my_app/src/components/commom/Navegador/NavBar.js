/* eslint-disable jsx-a11y/anchor-is-valid */
import "./NavBar.css";
import Img from "../../img/logo.png"
import { FaHome, FaImage,FaUserCircle } from 'react-icons/fa';

export function NavBar(){
    const Nome = (props) => (
        <p id="Nome" className={props.NomeClass}>{props.nomeNome}</p>
    )
 
    return(            
        <nav class="navegador">
            <img src={Img} alt="Logo"/>

            <div id="divIconsNav">
                <a href="#"> <FaHome id="iconNav"/> </a> 
                <a href="#"> <FaImage id="iconNav"/> </a> 
            
                <div>
                    <a href="#" id="divNomeImg"> 
                        <FaUserCircle id="iconNav"/> 
                        <Nome nomeNome="Wemerson" NomeClass="NomeC"/>
                    </a>
                </div> 
            </div>
        </nav>
    )
}