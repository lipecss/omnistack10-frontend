import React, { useState } from 'react'

import api from '../../services/api'

import './style.css'


function DevItem({ dev }) {

  const [devs, setDevs] = useState([])

  async function handleRmDev(id) {
    const response = await api.delete(`/devs/${id}`)
    window.location.reload();
    console.log(id)

    setDevs([...devs, response.data])
  }

  return (
    <li className="dev-item">
      <button 
        className="btn-delete" 
        onClick={() => handleRmDev(dev._id)}
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
      <a href={`https://github.com/${dev.github_username}`}>Ir ao Perfil no GitHub</a>
      <button className="btn-edit">Editar</button>
      <button className="btn-edit">Editar</button>
    </li>
    )
}

export default DevItem