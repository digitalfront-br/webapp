import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import MenuLinks from "./data/menuLinks.json"
import Home from "../src/pages/Home"
import Gastronomia from "../src/pages/Gastronomia"
import Ambientes from "../src/pages/Ambientes"
import Eventos from "../src/pages/Eventos"
import Registros from "../src/pages/Registros"
import Localizacao from "../src/pages/Localizacao"
import Contato from "../src/pages/Contato"


function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            {MenuLinks && 
              MenuLinks.map((item, i) => 
                <li key={i}>
                  <Link to={item.path}>{item.titulo}</Link>
                </li>)
            }
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/gastronomia">
            <Gastronomia />
          </Route>
          <Route path="/ambientes">
            <Ambientes />
          </Route>
          <Route path="/eventos">
            <Eventos />
          </Route>
          <Route path="/registros">
            <Registros />
          </Route>
          <Route path="/localizacao">
            <Localizacao />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
