/* eslint-disable react/jsx-key */
import Elemento1 from "../../Components/Elemento1/Elemento1";
import { StyledPagina1 } from "./styled";

export default function Pagina1() {
    //  aq o Elemento1 é o return da função Elemento1. que está passando parametros por cada 
    // <Elemento1
        // titulo='titulo1'
        // texto='texto1'
    // />
    return (

        <StyledPagina1>

            <div id="container">

                <Elemento1
                    titulo='titulo1'
                    texto='texto1'
                />
                <Elemento1
                    titulo='titulo2'
                    texto='texto2'
                />
                <Elemento1
                    titulo='titulo3'
                    texto='texto3'
                />

            </div>

        </StyledPagina1>
    )
}