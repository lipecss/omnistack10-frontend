import React, { useState, useEffect} from 'react';

import api from './services/api'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DownButton from './components/DownButton'
import DevForm from './components/DevForm'
import DevItem from './components/DevItem'
import DevMap from './components/DevMap'
import Pagination from './components/Pagination';


function App() {

  const [devs, setDevs] = useState([])
  const [loading, setLoading] = useState(false);
  const [mobile, setIsMobile] = useState()
  const [currentPage, setCurrentPage] = useState(1);
  const [devsPerPage] = useState(10);

  useEffect(() => {
    async function loadDevs() {
      setLoading(true);
      const response = await api.get('/devs')
      setDevs(response.data)
      setLoading(false);
    }
    loadDevs()
  }, [])

  useEffect(() => {
    function getPlataform () {
      var MobilePlataforms = (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone/i)
      if (MobilePlataforms.test(navigator.userAgent)){
        setIsMobile(true)
      }else{
        setIsMobile(false)
      }
    };
    getPlataform()
  }, [])

  async function handleAddDev(data) {
    // eslint-disable-next-line
    const response = await api.post('/devs',data)

    setDevs([...devs, response.data])
  }

  //Get current Devs
  const indexOfLastDev = currentPage * devsPerPage;
  const indexOfFirstPost = indexOfLastDev - devsPerPage;
  const currentDevs = devs.slice(indexOfFirstPost, indexOfLastDev);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <div className="map">
          <DevMap/>
        </div>
          <Pagination
            devsPerPage={devsPerPage}
            totalDevs={devs.length}
            paginate={paginate}
            currentPage={currentPage}
          />
                  <div className="counter">
          <p>Quantidade: <span>{devs.length}</span></p>
        </div>
        <DevItem devs={currentDevs} loading={loading}/>
      </main>
      <DownButton isMobile={mobile}/>
    </div>
  );
}

export default App;
