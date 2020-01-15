import React, { useState, useEffect } from 'react'


function DevForm({ onSubmit }) {

    const [ github_username, setGithub_username] = useState('')
    const [ techs, setTechs] = useState('')
    const [ latitude, setLatitude] = useState('')
    const [ longitude, setLongitude] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            
            setLatitude(latitude)
            setLongitude(longitude)
          },
          (err) => {
            console.log(err)
          },
          {
            timeout: 30000,
          }
        )
      }, [])

    async function handleSubmit(e) {
        e.preventDefault()

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        })


        setGithub_username('')
        setTechs('')
    }

    return(<form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="guthub_username">Usuario GitHub</label>
          <input 
            name="github_username" 
            id="github_username" 
            required
            value={github_username}
            onChange={e => setGithub_username(e.target.value)}
          />            
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input 
            name="techs" 
            id="techs" 
            required
            value={techs}
            onChange={e => setTechs(e.target.value)}
          />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input 
              type="number" 
              name="latitude" 
              id="latitude" 
              required 
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="logitude">Longitude</label>
            <input 
              type="number"
              name="logitude" 
              id="logitude" 
              required 
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
            />
          </div>
        </div>

        <button type="submit">Cadastrar</button>
      </form>)
}

export default DevForm