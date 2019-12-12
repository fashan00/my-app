import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Camera, {FACING_MODES} from 'react-html5-camera-photo';
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
            idealFacingMode = {FACING_MODES.ENVIRONMENT}
          />
      }
    </div>
    </div>
    
  );
}
 
export default App;
