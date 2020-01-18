import React, { useState } from 'react'
import {Marker} from 'react-map-gl'

import './styles.css'

function DevMarker({dev}) {
    const [isHover, setIsHover] = useState(false);
  
  
    function handleEnter(id) {
      setIsHover(true);
    }
  
    function handleLeave(id) {
      setIsHover(false);
    }
    return (
      <>
        <Marker
            zIndexOffset='3'
            className="marker"
            key={dev._id}
            latitude={dev.location.coordinates[1]}
            longitude={dev.location.coordinates[0]}
        >
          <img
            onMouseEnter={() => handleEnter(dev._id)}
            onMouseLeave={() => handleLeave(dev._id)}
            className="avatar"
            src={dev.avatar_url}
            alt=""
          />
          {isHover ? (
            <div className="dev-infos">
              <p className="dev-name">{dev.name}</p>
              <p className="dev-bio">
                {dev.bio ? dev.bio : "Usuario sem biografia no momento"}
              </p>
              <p className="dev-techs">{dev.techs.join(" | ")}</p>
            </div>
          ) : (
            <p></p>
          )}
        </Marker>
      </>
    );
  }

export default DevMarker
