import styled from "styled-components"

export const StyledCadaUm = styled.section`

.cx{
    width: 200px;
    height: 150px;
    border: solid 2px black;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    /* border: solid 2px black; */

    overflow: hidden;
}
.img img{
    width: 100%;
    height: 100%;
}

.cx:hover{
    .img {
        width: 150px;
        height: 150px;
    }
}

`