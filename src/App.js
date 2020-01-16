import React, { useState, useEffect} from 'react';

import api from './services/api'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DownButton from './components/DownButton'
import DevForm from './components/DevForm'
import DevItem from './components/DevItem'


function App() {

  const [devs, setDevs] = useState([])
  const [mobile, setIsMobile] = useState()

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data)
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

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <div className="counter">
          <p>Quantidade: <span>{devs.length}</span></p>
        </div>

        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
      <DownButton isMobile={mobile}/>
    </div>
  );
}

export default App;
