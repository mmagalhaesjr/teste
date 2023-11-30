import { StyledElemento1 } from "./styled";

export default function Elemento1(p) {  
    // Elemento1 é uma q função que retorna o oq está dentro do return. então Elemento1 é o return.
    // o Elemento1 está recebendo parametros por (p) e está colocando em seus respectivos lugares.

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