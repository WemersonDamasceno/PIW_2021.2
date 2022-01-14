import { FaUserCircle } from "react-icons/fa";
import "./Comentario.css"

export function Comentario(props){
    return(
        <>  
        <div className="container">
            <FaUserCircle className="userFoto"/>
            <div className="comentario">
                <div className="userComent">{props.nomeUsuario}</div> 
                <div className="textoComent">{props.texto}</div>
            </div>
        </div>
                             
        </>
    );
}


