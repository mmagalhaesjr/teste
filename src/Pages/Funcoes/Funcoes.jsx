import { useState } from "react"
import { StyledFuncoes } from "./styled"

export default function Funcoes() {

    const [nome, setNome] = useState('...')
    
    const msg = () => {
        const batata = prompt('nome?')
        setNome(batata)
    }

    return (
        <StyledFuncoes>

            <div id="container">
                {/* <input type="text" /> */}
                <h1>{!nome?'preencha seu nome corretamente':`Bem vindo ${nome}`}</h1>
                <button onClick={msg}>START</button>
            </div>

        </StyledFuncoes>
    )
}