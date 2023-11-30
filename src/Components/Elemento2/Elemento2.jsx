import { StyledElemento2} from "./styled";



export default function Elemento2(prop) {  
     // Elemento2 é uma q função que retorna o oq está dentro do return. então Elemento1 é o return.
    // o Elemento2 está recebendo parametros por (p) e está colocando em seus respectivos lugares.

    return (
        <StyledElemento2>
           <div id="cx">

            <div id="cximg">
               <img src={prop.img} alt="" /> 
            </div>
            <div id="cxtexto">
               <h1>{prop.nome}</h1> 
            </div>

           </div>
        </StyledElemento2>
    )
}