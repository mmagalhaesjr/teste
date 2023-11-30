import { BrowserRouter, Routes, Route } from "react-router-dom";

import Elemento1 from "./Components/Elemento1/Elemento1";
import Pagina1 from "./Pages/Pagina1/Pagina1";
import Elemento2 from "./Components/Elemento2/Elemento2";
import Pagina2 from "./Pages/Pagina2/Pagina2";
import Pagina3 from "./Pages/Pagina3/Pagina3";


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

        </Routes>
      </BrowserRouter>
    </>
  )
}


