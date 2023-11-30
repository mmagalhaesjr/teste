import { StyledOutraFuncao } from "./styled";



export default function OutraFuncao(p) {
    return (
        <StyledOutraFuncao>
<div id="container">
                <div id="titulo">
                    <h1>{p.titulo}</h1>
                </div>

                <div id="texto">
                    {p.texto}
                </div>
            </div>
        </StyledOutraFuncao>
    )
}