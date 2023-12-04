import {StyledCadaUm} from './styled'

export default function  CadaUm(p) {

    function navegar(){

    }

    return (
        <StyledCadaUm>

            <div className="cx"  onClick={navegar}  >
                <div className="img">
                    <img src={p.img} alt="p.nome" />
                </div>
                <h2>{p.nome}</h2>
            </div>

        </StyledCadaUm>
    )
}