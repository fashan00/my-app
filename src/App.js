// import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
 
import ImagePreview from './ImagePreview'; // source code : ./src/demo/AppWithImagePreview/ImagePreview
 
function App (props) {
  const [dataUri, setDataUri] = useState('');
 
  function handleTakePhotoAnimationDone (dataUri) {
    console.log('takePhoto',dataUri);
    setDataUri(dataUri);
  }

  function reset(){
    setDataUri('');
  }
 
  const isFullscreen = false;
  return (
    <div className="App-header">
      <div  onClick={reset}>
        <img src={logo} className="App-logo" alt="logo"/>
      </div>
      <div>
      {
        (dataUri)
          ? <ImagePreview dataUri={dataUri}
            isFullscreen={isFullscreen}
          />
          : <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
          />
      }
    </div>
    </div>
    
  );
}
 
export default App;
