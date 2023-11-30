import styled from 'styled-components'

export const StyledElemento2 = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;


#cx{
width: 400px;
height: 300px;
border: solid 2px black;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
#cximg{
width: 90%;
height: 50%;
background-color: blue;

display: flex;
justify-content: center;
align-items: center;
}
#cximg img{
    width: 100%;
    height: 100%;
}

#cxtexto{
width: 90%;
height: 50%;
background-color: green;

display: flex;
justify-content: center;
align-items: center;
}

#cxtexto h1{
    color: #ffffff;
    font-size: 2rem;
}

`