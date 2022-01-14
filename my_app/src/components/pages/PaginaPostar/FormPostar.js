import history from "../../../history"
import React from "react";

export function FormPostar(){
    function criarPublicacao(){
        history.push("/")
    }
    return (
        <form className="form">
            <p className="title">Criar uma publicação</p>
            <textarea type="text" className="container_texto" placeholder="No que você está pensando, Wemerson?"/>
            <input type="submit" className="botao" onClick={criarPublicacao} value="Publicar"/>
        </form>
    );
}