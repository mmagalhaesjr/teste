import { StyledElemento2} from "./styled";



export default function Elemento2(p) {

   

    return (
        <StyledElemento2>
           <div id="cx">

            <div id="cximg">
                {p.img}
            </div>
            <div id="cxtexto">
                {p.nome}
            </div>

           </div>
        </StyledElemento2>
    )
}