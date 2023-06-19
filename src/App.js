import { useEffect, useRef } from "react";


import v from "./1.mp4"
import _a from "./1.mp3"

function App() {

 

  return (
    <div className="App">

      <video autoPlay={true} playsInline src={v}></video>

    </div>
  );
}

export default App;
