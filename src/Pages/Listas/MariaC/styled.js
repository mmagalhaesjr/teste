import styled from "styled-components"

export const StyledMaria = styled.section`

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

.conteudo {
    max-width: 450px;
    margin: 80px auto;
    display: flex;
    flex-direction: column;

    border: solid 2px black;
}

.conteudo img {
    width: 100%;
}

.lista-tarefas {
    display: flex;
    flex-direction: column;
    border-radius: 9px;
    overflow: hidden;
   
}

.tarefa {
    color: #303f4e;
    padding: 22px;
    display: flex;
    align-items: center;
    font-size: 22px;
    cursor: pointer;
    background-color: #f3f3f3;
}

.tarefa:hover {
    color: #21c0a8;
}

.tarefa:not(:last-child) {
    border-bottom: 1px solid #e7e7e7;
}

.tarefa ion-icon {
    flex-shrink: 0;
    font-size: 40px;
    margin-right: 16px;
}

.tarefa:hover ion-icon {
    color: #21c0a8;
}

.tarefa.finalizada {
    color: #aaaaaa;
    text-decoration: line-through;
}

.tarefa.finalizada ion-icon {
    color: #78dbad
}

.adicionar-tarefa {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
}



input::placeholder {
    color: #aaa;
}

.botao-adicionar {
    background-color: #21c0a8;
    width: 200px;
    height: 70px;
    cursor: pointer;
    transition: all ease 0.15s;
    color: #ffffff;
}

.botao-adicionar:hover {
    background-color: #56daaf;
}

`