import { StyledListadeIcones} from "./styled";



export default function ListadeIcones(p) {  
     

    return (
        <StyledListadeIcones>
            <div id="container">
                <div id="titulo">
                    <h1>{p.titulo}</h1>
                </div>

                <div id="texto">
                    {p.texto}
                </div>
            </div>
        </StyledListadeIcones>
    )
}