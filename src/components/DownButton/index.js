import React, { useState } from 'react'

import './styles.css'


function DownButton({isMobile}) {

    const [isopen, setIsOpen] = useState(true)

    function closeButton(){
        setIsOpen(isopen => !isopen)
    }

    if(!isMobile){
        
            if(isopen){
                return (
                    <div className="group-download">
                        <div className="btn-download">
                            <div className="close-window">
                                <button onClick={closeButton}>&times;</button>
                            </div>
                            <a>Download APP</a>
                        </div>
                    </div>
                    )
            }
    }
    return null
}

export default DownButton