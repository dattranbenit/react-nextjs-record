import React from 'react';
import { ShowRecord, ProcessRecord } from '../components/RecordProcess';
//material-ui demo
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
//icons
import MicNoneIcon from '@material-ui/icons/MicNone';

const useStyles = makeStyles({
  container: {
    backgroundColor: 'white',
    width: '470px',
    height: '100px',
    border: '1px solid black',
    borderRadius: '5px',
    ['@media (max-width:500px)']: {
      width: '440px'
    },
    ['@media (max-width:430px)']: {
      width: '370px'
    },
    ['@media (max-width:400px)']: {
      width: '350px'
    }
  },
  justifyCenter: {
    display: 'flex',
    justifyContent: 'center'
  },
  linearProgress: {
    width: '420px',
    ['@media (max-width:500px)']: {
      width: '87%'
    }
  },
  startRecord: {
    width: '470px',
    height: '220px',
    border: '1px solid black',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    ['@media (max-width:500px)']: {
      width: '440px'
    },
    ['@media (max-width:430px)']: {
      width: '370px'
    },
    ['@media (max-width:400px)']: {
      width: '350px'
    }
  },
  micIconContainer: {
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    backgroundColor: 'rgb(218, 220, 228)',
    marginTop: '30px',
    cursor: 'pointer'
  },
  micIcon: {
    marginTop: '13px',
    marginLeft: '12px'
  },
  countdown: {
    marginTop: '60px',
    display: 'flex',
    justifyContent: 'center'
  },
  progressNoneContainer: {
    marginTop: '20px',
    marginLeft: '5px'
  },
  progressNone: {
    width: '420px',
    ['@media (max-width:500px)']: {
      width: '320px'
    }
  },
  img: {
    height: '280px',
    width: '460px'
  }
});

const progressStyle = makeStyles({
  colorPrimary: {
    backgroundColor: '#bfbfbf'
  },
  barColorPrimary: {
    backgroundColor: '#ffbe2e'
  }
});

export default function RecordSample(props) {
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

  // @ts-ignore
  return (
    <>
      <div>
        <div>
          {isRecording && (
            <div className={classes.justifyCenter}>
              <Grid container direction="row" className={classes.container}>
                <Grid item xs={12}>
                  <div className={classes.justifyCenter}>Recording...</div>
                  <div className={classes.justifyCenter}>
                    <button onClick={stopRecording}>Complete</button>
                  </div>
                </Grid>
              </Grid>
            </div>
          )}
          {completeRecording && (
            <div className={classes.justifyCenter}>
              <Grid container direction="row" className={classes.container}>
                <Grid item xs={12}>
                  <div className={classes.justifyCenter}>Complete</div>
                  <div className={classes.justifyCenter}>
                    <div>0:00</div>
                    <button onClick={reStartRecording}>Again</button>
                  </div>
                </Grid>
              </Grid>
            </div>
          )}
        </div>
        {readyRecording && (
          <div className={classes.justifyCenter}>
            <div className={classes.startRecord}>
              <div>
                <div className={classes.justifyCenter}>
                  <div
                    className={classes.micIconContainer}
                    onClick={startRecording}
                  >
                    <MicNoneIcon className={classes.micIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <ShowRecord />
      </div>
    </>
  );
}
