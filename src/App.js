import Navbar from './componentes/Navbar';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InfoProdutores from './pages/InfoProdutores';
import InfoMonitoramentos from './pages/InfoMonitoramentos';
import InfoPropriedades from './pages/InfoPropriedades';
import InfoVinculos from './pages/InfoVinculos';
import AdicionalPropriedade from './pages/InfoPropriedades/adicionalPropriedade';
import AdicionalProdutores from './pages/InfoProdutores/adicionaisProdutores';
import AdicionalMonitoramento from './pages/InfoMonitoramentos/adicionaisMonitoramento';
import './styles.css'

function App() {
  const [info, setData] = useState([]);

  //Conexão do json do processo seletvo com o uso de Fetch
  const getData = () => {
    fetch('processo-seletivo-front.json'
      ).then(function (response){
        return response.json();
      }).then(function (myJson) {
        setData(myJson)
      });
  }
  useEffect(() => {getData()}, [])

  return (
    <div className="App">
      {/* Chama o componente navbar, reponsavel por apresentar a home de navegação */}
      <Navbar />
      {/* Uso da biblioteca de rotas, para realizar a navegação entre as paginas da aplicação  */}
      <Router>
          <Routes> 
            <Route path='/' element={<InfoPropriedades td={info.propriedades} />} />
            <Route path='/Produtores' element= {<InfoProdutores td={info.produtores} />} />
            <Route path='/Monitoramentos' element= {<InfoMonitoramentos td={info.monitoramentos} />} />
            <Route path='/Vinculos' element= {<InfoVinculos td={info} /> } />
            <Route path='/:id' element={<AdicionalPropriedade  td={info.propriedades} />} />
            <Route path='/Produtores/:id' element={<AdicionalProdutores  td={info.produtores} />} />
            <Route path='/Monitoramentos/:id' element={<AdicionalMonitoramento  td={info} />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
