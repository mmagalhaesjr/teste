/* eslint-disable react/jsx-key */

import Elemento2 from "../../Components/Elemento2/Elemento2";
import { StyledPagina2 } from "./styled";

import foto1 from '../../assets/1.png'
import foto2 from '../../assets/2.png'
import foto3 from '../../assets/3.png'


export default function Pagina2() {

    const lista =[
        {nome:'segurança', img:foto1},
        {nome:'armario', img:foto2},
        {nome:'camera', img:foto3}
    ]

    return (

        <StyledPagina2>

            <div id="container">

                <Elemento2
                    nome={lista.nome}
                    img={lista.img}
                />
                <Elemento2
                    nome={lista.nome}
                    img={lista.img}
                />
                <Elemento2
                    nnome={lista.nome}
                    img={lista.img}
                />

            </div>

        </StyledPagina2>
    )
}