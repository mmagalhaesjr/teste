/* eslint-disable react/jsx-key */

import Elemento2 from "../../Components/Elemento2/Elemento2";

import { StyledPagina3 } from "./styled";


export default function Pagina3() {

    //aq é um lisata qie é um array de objetos
    const lista = [
        { nome: 'flu1', img: "https://img.nsctotal.com.br/wp-content/uploads/2023/04/Fluminense-1-e1681936646929-800x531.png" },
        { nome: 'flu2', img: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/3445.png' },
        { nome: 'flu3', img: 'https://constelar.com.br/wpconstelata/wp-content/uploads/2022/07/bandeira-fluminense.jpg' }
    ];

    return (

        // aq estou  importando o estilo do Elemento2 com as informaçoes do array lista da Pagina3

        <StyledPagina3>
            {/* aq estou fazendo um map no array lista, então pra cada elemento do array lista eu crio um Elemento2,
            e envio as informaçoes do objeto ( objeto que é um elemento do array) por props (l = cada elemento do array.)
            */}
            <div id="container">
                {lista.map((element) => <Elemento2  img={element.img} nome={element.nome} />)}
            </div>

        </StyledPagina3>
    )
}