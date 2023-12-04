import { StyledJoao } from "./styled"
import { useState } from "react"

export default function Joao() {
    const tarefasIniciais = [""]
    const [listaTarefas, setListaTarefas] = useState(tarefasIniciais)
    const [terminadas, setTerminadas] = useState([])


    function adicionarTarefa() {
        const novaTarefa = prompt("Digite sua tarefa de hoje")
        const novoArray = [...listaTarefas, novaTarefa]
        setListaTarefas(novoArray)
    }

    function terminarTarefa(tarefaTerminada) {
        const novoArray = [...terminadas, tarefaTerminada]
        setTerminadas(novoArray)
        alert(`Só faltam ${listaTarefas.length - novoArray.length} tarefas!`)
    }
    return (
        <StyledJoao>

            

            <div className="conteudo">

            <div id="cabecalho">
                <h1> JOÃO</h1>
            </div>


                <div className="adicionar-tarefa">

                    <button onClick={adicionarTarefa}
                        className="botao-adicionar">ADICIONE UMA NOVA TAREFA</button>

                </div>

                <ul className="lista-tarefas">
                    {listaTarefas.map((tarefa) => (
                        <li
                            onClick={() => terminarTarefa(tarefa)}
                            className={`tarefa ${terminadas.includes(tarefa) ? "finalizada" : ""}`}
                            key={tarefa}
                        >
                            <ion-icon name={terminadas.includes(tarefa) ? "checkmark-circle" : "ellipse-outline"}></ion-icon>
                            {tarefa}
                        </li>
                    ))}

                </ul>
            </div>

        </StyledJoao>
    )
}