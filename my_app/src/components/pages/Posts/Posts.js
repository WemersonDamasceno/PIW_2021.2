import "./Posts.css"
import { FaRegThumbsUp,FaUserCircle } from 'react-icons/fa';
import { Comentario } from "./Comentario/Comentario";

export function Post(props){
    let posts = {
        comentarios:[
            {
                idComentario:"1",
                texto: "Concordo com tu mah!.",
                id_usuario: "1", 
                nomeUsuario: "Lucas", //Remover isso depois
            },
            {
                idComentario:"2",
                texto: "Aqui ta é frio!.",
                id_usuario: "1", 
                nomeUsuario: "Diogo", //Remover isso depois
            },{
                idComentario:"3",
                texto: "Diacho",
                id_usuario: "1", 
                nomeUsuario: "Maiara", //Remover isso depois
            },{
                idComentario:"4",
                texto: "EU <3",
                id_usuario: "1", 
                nomeUsuario: "José", //Remover isso depois
            }


        ]
    }
    let listComentario = posts.comentarios.map((comentario) =>
        <Comentario nomeUsuario={comentario.nomeUsuario} idComentario={comentario.idComentario} texto={comentario.texto}></Comentario>
    )
    return(
        <>
            {/*Div do post*/}
            <div className="post">
                <div className="user">
                    <FaUserCircle id="perfilPost"/>
                    <p>{props.user}</p>
                </div>
                <div className="texto">
                    {props.texto}
                </div>
                <div className="likes">
                    <FaRegThumbsUp id="iconLike"/>
                    {props.likes}
                    <button> <FaRegThumbsUp id="iconLikeBtn"/> </button>
                </div> 
                
                {/*Div dos comentarios*/}
                <ColoredLine color="gray" />
                <div className="containerComentarios">
                    <p style={{
                        margin:10,
                        fontSize: 20    
                    }}
                    >Comentarios recentes...</p>
                    {listComentario}
                </div>
                
                {/*Campo de texto para fazer o comentario*/}
                <div className="addComentario">
                    <input className="comentarTexto" placeholder="Escreva um comentário público..."/>
                    <input className="comentarBotao" type="submit" value="Comentar"/>
                </div>
                        

            </div>  
           
        </>
        
    )
}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.5,
            width: 700
        
        }}
    />
);