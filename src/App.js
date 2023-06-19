// import v from "./1.mp4"
import _a from "./1.mp3"

function App() {

  return (
    <div className="App">
      {/* <video src={v} autoPlay loop playsInline></video> */}
      <audio src={_a} autoPlay loop playsInline></audio>
    </div>
  );
}

export default App;
