import React from 'react';
import AudioReactRecorder from 'audio-react-recorder';
import { useBetween } from 'use-between';
//demo components
import AudioWaveform from './AudioWaveForm/AudioWaveForm';

const Record = () => {
  let [blobURL, setBlobURL] = React.useState(null);
  let [readyRecording, setReadyRecording] = React.useState(false)
  let [isRecording, setIsRecording] = React.useState(false);
  let [completeRecording, setCompleteRecording] = React.useState(false)
  React.useEffect(() => {
    if (blobURL && !isRecording) {
      setReadyRecording(false)
      setCompleteRecording(true)
    } else if (!blobURL && !isRecording) {
      setCompleteRecording(false)
      setReadyRecording(true)
    } else if (!blobURL && isRecording) {
      setReadyRecording(false)
    }
  }, [blobURL, isRecording])
  const startRecording = () => {
    setIsRecording(true);
  };
  const reStartRecording = () => {
    setBlobURL(null);
    setIsRecording(false);
  };
  const stopRecording = () => {
    setIsRecording(false);
  };
  const onStop = (blobObject) => {
    setBlobURL(blobObject.url);
  };
  return {
    blobURL,
    readyRecording,
    isRecording,
    completeRecording,
    startRecording,
    reStartRecording,
    stopRecording,
    onStop,
  };
};
export const ProcessRecord = () => useBetween(Record);

export const ShowRecord = () => {
  let {
    blobURL,
    readyRecording,
    isRecording,
    completeRecording,
    startRecording,
    reStartRecording,
    stopRecording,
    onStop,
  } = ProcessRecord();

  return (
    <>
      <div style={{ display: 'none' }}>
        <AudioReactRecorder
          state={isRecording ? 'start' : 'stop'}
          onStop={onStop}
        />
      </div>
      <div>
        {/*{isRecording ? (*/}
        {/*  <></>*/}
        {/*) : blobURL && stop ? (*/}
        {/*  <AudioWaveform source={blobURL} allowDownload />*/}
        {/*) : (*/}
        {/*  <></>*/}
        {/*)}*/}
        {completeRecording && (
          <AudioWaveform source={blobURL} allowDownload />
        )}
      </div>
    </>
  );
};
