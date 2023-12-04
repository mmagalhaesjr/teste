import { BrowserRouter, Routes, Route } from "react-router-dom";

import Elemento1 from "./Components/Elemento1/Elemento1";
import Pagina1 from "./Pages/Pagina1/Pagina1";
import Elemento2 from "./Components/Elemento2/Elemento2";
import Pagina2 from "./Pages/Pagina2/Pagina2";
import Pagina3 from "./Pages/Pagina3/Pagina3";
import Funcoes from "./Pages/Funcoes/Funcoes";

import Equipe from "./Pages/Listas/Equipe/Equipe";
import Marcos from "./Pages/Listas/Marcos/Marcos";
import Maria from './Pages/Listas/MariaC/Maria';
import Lais from './Pages/Listas/Lais/Lais';
import Igor from './Pages/Listas/Igor/igor';
import Joao from './Pages/Listas/Joao/Joao';
import Marjore from './Pages/Listas/Marjore/Marjore';




// import Pagina1 from "./Pages/Pagina1/Pagina1"
export default function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/elemento1" exact element={<Elemento1 />} />
          <Route path="/pagina1" exact element={<Pagina1 />} />

          <Route path="/elemento2" exact element={<Elemento2 />} />
          <Route path="/pagina2" exact element={<Pagina2 />} />

          <Route path="/pagina3" exact element={<Pagina3 />} />

          <Route path="/funcoes" exact element={<Funcoes />} />

          <Route path="/" exact element={<Equipe />} />
          <Route path="/marcos" exact element={<Marcos />} />
          <Route path="/maria" exact element={<Maria />} />
          <Route path="/lais" exact element={<Lais />} />
          <Route path="/igor" exact element={<Igor />} />
          <Route path="/joao" exact element={<Joao />} />
          <Route path="/marjorie" exact element={<Marjore />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}


