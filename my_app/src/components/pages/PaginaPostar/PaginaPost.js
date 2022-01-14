import { NavBar } from "../../commom/Navegador/NavBar";
import { FormPostar } from "./FormPostar";
import "./PaginaPost.css"

  
export function PaginaPost(){
    return (
        <div className="paginaPost">
            <NavBar></NavBar>
            <FormPostar></FormPostar>
        </div>
    )
}