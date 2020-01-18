import React, { useState, useEffect } from 'react'
import ReactMapGL from 'react-map-gl'

import DevMarker from './../DevMarker/index'

import api from '../../services/api'

import './styles.css'

function DevMap() {
  

    const [devs, setDevs] = useState([])
    const [viewport, setViewport] = useState({});
 
    useEffect(() => {
      async function query() {
        const { data } = await api.get(`/devs`);
        setDevs(data);
      }
  
      query();
    }, []);

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
 
          let newViewport = {
            width: '100%',
            height: 377,
            maxZoom: 15,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            zoom: 13,
            interactive: true
          }
          setViewport(newViewport) 
        },
        (err) => {
          console.log(err)
        },
        {
          timeout: 30000,
        }
      )
    }, [])

    return(
      <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      mapboxApiAccessToken='pk.eyJ1IjoiZmVsaXBlY3NzIiwiYSI6ImNrNWpvN3phMDA1ZHMza3F5Y2F3YnRzZnAifQ.oGdEsD7Uh1mK6XkcNp1g5g'
      onViewportChange={setViewport}
      >
      {devs.map(dev => (
        <DevMarker
          key={dev._id}
          dev={dev}
        />
      ))}
      </ReactMapGL>
    )
}

export default DevMap
