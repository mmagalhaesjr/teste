import styled from "styled-components"

import foto from '../../../assets/fotos/logo.png';

const fotoCaminho = `url(${foto})`;

export const StyledEquipe = styled.section`



    background-image: ${fotoCaminho};
    background-repeat:no-repeat ;
    background-size: 40%;
    background-position: center;



#cabecalho{
width: 100%;
margin-top: 5%;


display: flex;
align-items: center;
justify-content: center;
}

h1{
    font-size: 3rem;
}

#container{
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    flex-wrap:wrap;
}


`