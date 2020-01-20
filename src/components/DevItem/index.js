import React from 'react'

// import api from '../../services/api'

import './styles.css'


function DevItem({ devs, loading }) {

  // const [devs, setDevs] = useState([])

  // async function handleRmDev(id) {
  //   const response = await api.delete(`/devs/${id}`)
  //   window.location.reload();
  //   console.log(id)

  //   setDevs([...devs, response.data])
  // }

  if(loading){
    return <h2>Carregando Devs....</h2>
  }

  return <ul>
  {devs.map(dev => (
      <li 
        key={dev._id}
        className="dev-item"
      >
        <button 
          className="btn-delete" 
          // onClick={() => handleRmDev(dev._id)}
          >
            &times;
        </button>
        <header>
          <img src={dev.avatar_url} alt={dev.name}/>
          <div className="user-info">
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>
          </div>
        </header>
        <p>{dev.bio ? dev.bio : 'Usuario sem biografia no momento'}</p>
        <a href={`https://github.com/${dev.github_username}`} rel="noopener noreferrer" target="_blank">Ir ao Perfil no GitHub</a>
      </li>
  ))}
  </ul>
}

export default DevItem