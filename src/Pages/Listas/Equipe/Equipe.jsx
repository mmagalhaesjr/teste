import { StyledEquipe } from "./styled"
import { Link } from 'react-router-dom';


import foto1 from '../../../assets/fotos/maria.png'
import foto2 from '../../../assets/fotos/igor.png'
import foto3 from '../../../assets/fotos/eu.png'
import foto4 from '../../../assets/fotos/lais.png'
import foto5 from '../../../assets/fotos/joao.png'
import foto6 from '../../../assets/fotos/marjore.png'
import CadaUm from "../../../Components/CadaUm/CadaUm"




export default function Equipe() {

    const lista = [

        { nome: 'MARIA', img: foto1, pagina: '/maria' },
        { nome: 'IGOR', img: foto2, pagina: '/igor' },
        { nome: 'MARCOS', img: foto3, pagina: '/marcos' },
        { nome: 'jOÃO', img: foto5, pagina: '/joao' },
        { nome: 'LAIX', img: foto4, pagina: '/lais' },
        { nome: 'MARJORE', img: foto6, pagina: '/marjorie' }
    ]



    return (
        <StyledEquipe>

            {console.log(lista)}

            <div id="cabecalho">
                <h1> Time  &quot;criativo&quot;</h1>
            </div>

            <div id="container">

                {lista.map((pessoa) => (
                    <Link to={pessoa.pagina} key={pessoa.nome}>
                        <CadaUm img={pessoa.img} nome={pessoa.nome} />
                    </Link>
                ))}

            </div>


        </StyledEquipe>
    )
}