import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import * as ocr from './api';

import ImagePreview from './ImagePreview'; // source code : ./src/demo/AppWithImagePreview/ImagePreview
// 5bed70a58c88957
function App(props) {
  const [dataUri, setDataUri] = useState('');
  const [text, SetText] = useState('Task photo of Words.');

  async function handleTakePhotoAnimationDone(dataUri) {
    console.log('takePhoto', dataUri);
    setDataUri(dataUri);

    const res = await ocr.getTextByBase64(dataUri);
    console.log('res', res);
    SetText(res.data.ParsedResults[0].ParsedText);
  }

  function reset() {
    setDataUri('');
    SetText('Task photo of Words.');
  }

  const isFullscreen = false;
  return (
    <div className="App-header">
      <div onClick={reset}>
        <img src={logo} className="App-logo" alt="logo" />
        <div>{text}</div>
      </div>
      <div>
        {
          (dataUri)
            ? <ImagePreview dataUri={dataUri}
              isFullscreen={isFullscreen}
            />
            : <Camera onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
              isFullscreen={isFullscreen}
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              isImageMirror={false}
            />
        }
      </div>
    </div>

  );
}

export default App;
