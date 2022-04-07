## Introduction
This is a package supporting react framework which is used to record voice & deal with logical issues in recording process


## 🚀 Demo
  https://react-nextjs-record.vercel.app/

## ✨ Guideline

```tsx
import React from 'react';
import { 
  ShowRecord, //component used to show audio result
  ProcessRecord //component contains state to deal with logic when recording
} from 'react-record-audio';

export default function App(props) {
  const classes = useStyles();
  const progressClasses = progressStyle();
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
      <div>
        <div>
          {isRecording && (
            <>
              <div>Recording...</div>
              <div>
                <button onClick={stopRecording}>End record process</button>
              </div>
            </>
          )}
          {completeRecording && (
            <>
              <div>Complete</div>
              <div>
                <div>0:00</div>
                <button onClick={reStartRecording}>Record again</button>
              </div>
            </>
          )}
        </div>
        {readyRecording && (
          <button
            onClick={startRecording}
          >
            Record now
          </button>
        )}
      </div>
      <div>
        <ShowRecord />{/*Only appear when recording process finish to show result*/}
      </div>
    </>
  );
}
```

### State info
<table>
  <tr>
    <th>State</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  <tr>
    <td>blobURL</td>
    <td>string || null</td>
    <td>return audio url data if record finish, initial value of null</td>
  </tr>
  <tr>
    <td>readyRecording</td>
    <td>boolean</td>
    <td>used to check status before recording process start</td>
  </tr>
  <tr>
    <td>isRecording</td>
    <td>boolean</td>
    <td>used to check status when in recording process</td>
  </tr>
  <tr>
    <td>completeRecording</td>
    <td>boolean</td>
    <td>used to check status when recording process finishes</td>
  </tr>
  <tr>
    <td>startRecording</td>
    <td>func</td>
    <td>Function apply to start recording process</td>
  </tr>
  <tr>
    <td>reStartRecording</td>
    <td>func</td>
    <td>Function apply to restart recording process</td>
  </tr>
  <tr>
    <td>stopRecording</td>
    <td>func</td>
    <td>Function apply to stop recording process</td>
  </tr>
  <tr>
    <td>onStop</td>
    <td>func</td>
    <td>Only use for internal logic of library</td>
  </tr>
</table>

## @License
DAT_TRAN

