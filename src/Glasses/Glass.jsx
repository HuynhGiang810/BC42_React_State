import React from 'react'
import { useState } from 'react'

import Style from './style.css'


function Glass() {
const [glassUrl, setGlassUrl] = useState("./img/v1.png")

  return (
    <div className="row background">
        <div>
            <img src="./img/model.jpg" alt="model" />
        </div>
        <div className="position">
            <img src={glassUrl} alt="1" width="250px" />
        </div>
        <div className="text-center">
            <img src="./img/v1.png" alt="10" width="100px" onClick={() => setGlassUrl("./img/v1.png")}/>
            <img src="./img/v2.png" alt="11" width="100px" onClick={() => setGlassUrl("./img/v2.png")}/>
            <img src="./img/v3.png" alt="12" width="100px" onClick={() => setGlassUrl("./img/v3.png")}/>
            <img src="./img/v4.png" alt="13" width="100px" onClick={() => setGlassUrl("./img/v4.png")}/>
            <img src="./img/v5.png" alt="14" width="100px" onClick={() => setGlassUrl("./img/v5.png")}/>
            <img src="./img/v6.png" alt="15" width="100px" onClick={() => setGlassUrl("./img/v6.png")}/>
            <img src="./img/v7.png" alt="16" width="100px" onClick={() => setGlassUrl("./img/v7.png")}/>
            <img src="./img/v8.png" alt="2" width="100px" onClick={() => setGlassUrl("./img/v8.png")}/>
            <img src="./img/v9.png" alt="3" width="100px" onClick={() => setGlassUrl("./img/v9.png")}/>
        </div>
    </div>
  )
}

export default Glass