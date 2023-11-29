import { StyledElemento1 } from "./styled";

export default function Elemento1(p) {
    return (
        <StyledElemento1>
           <div id="container">
                <div id="titulo">
                    <h1>{p.titulo}</h1>
                </div>

                <div id="texto">
                   {p.texto}
                </div>
           </div>
        </StyledElemento1>
    )
}