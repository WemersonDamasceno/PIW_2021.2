import { NavBar } from "../../commom/Navegador/NavBar";
import { Feed } from "../LinhaDoTempo/LinhaDoTempo";

export function PaginaPrincipal(){
    return(
        <div>
            <NavBar></NavBar>
            <Feed></Feed>
        </div>
    );
}