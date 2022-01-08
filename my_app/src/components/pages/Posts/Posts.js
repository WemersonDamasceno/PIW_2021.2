import "./Posts.css"
import { FaRegThumbsUp,FaUserCircle } from 'react-icons/fa';

export function Post(props){
    return(
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
        </div>
    )
}