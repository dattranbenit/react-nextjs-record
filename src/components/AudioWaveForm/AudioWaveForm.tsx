import React, { Component } from 'react';
import {
  WaveformContainer,
  Wave,
  PlayButton,
  InfoButton,
  DownloadButton
} from './Waveform.styled';
import moment from 'moment';
//icons
import PauseIcon from '../../Icons/PauseIcon';
import PlayIcon from '../../Icons/PlayIcon';

class AudioWaveform extends Component<any, any> {
  private wrapper: React.RefObject<unknown>;
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }
  $el;
  wavesurfer;
  $waveform;

  state = {
    playing: false,
    totalTime: 0,
    currentTime: 0,
    remainingTime: 0
  };

  createWave = async (plugins) => {
    const WaveSurfer = (await import('wavesurfer.js')).default;
    this.wavesurfer = WaveSurfer.create({
      container: this.$waveform,
      waveColor: '#c7c7c7',
      progressColor: '#23527c',
      height: 80,
      responsive: true,
      barWidth: 2,
      cursorWidth: 1,
      hideScrollbar: true,
      cursorColor: 'transparent',
      plugins: [plugins]
    });

    this.wavesurfer.load(this.props.source);
    this.wavesurfer.on('pause', () => {
      this.setState({ playing: false });
    });

    this.wavesurfer.on('ready', () => {
    });

    this.wavesurfer.on('audioprocess', () => {
      if (this.wavesurfer.isPlaying()) {
        var totalTime = this.wavesurfer.getDuration() * 1000,
          currentTime = this.wavesurfer.getCurrentTime() * 1000,
          remainingTime = (totalTime - currentTime) * 1000;

        this.setState({ totalTime, currentTime, remainingTime });
      }
    });
  };

  async componentDidMount() {
    this.$el = this.wrapper.current;
    this.$waveform = this.$el.querySelector('.wave');
    let CursorPlugin = (
      await import('wavesurfer.js/dist/plugin/wavesurfer.cursor.min.js')
    ).default;
    let cursorPlugin = CursorPlugin.create({
      showTime: true,
      opacity: 1,
      customShowTimeStyle: {
        'background-color': '#000',
        color: '#fff',
        'font-size': '10px'
      }
    });
    this.createWave(cursorPlugin);
  }

  componentWillUnmount() {
    if (this.wavesurfer) {
      this.wavesurfer.destroy();
    }
  }

  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.wavesurfer.playPause();
  };

  onChangePlaybackRate = async (e) => {
    let value = e.target.value;
    this.wavesurfer.setPlaybackRate(value);
  };

  render() {
    const { classes } = this.props;
    // @ts-ignore
    return (
      <div
        ref={this.wrapper as React.RefObject<HTMLDivElement>}
      >
        <WaveformContainer>
          <PlayButton onClick={this.handlePlay}>
            {!this.state.playing ? (
              <PlayIcon/>
            ) : (
              <PauseIcon/>
            )}
          </PlayButton>
          <Wave id="waveform" className="wave border-center" />
          <InfoButton>
            <div
              className="ml-2 mr-2 breadcrumb-item"
              style={{ minWidth: '85px' }}
            >
              <span>{`${moment
                .utc(this.state.currentTime)
                .format('mm:ss')} / ${moment
                .utc(this.state.totalTime)
                .format('mm:ss')}`}</span>
            </div>
            <div>
              <select
                style={{backgroundColor: "white", marginLeft: "10px"}}
                type="select"
                name="select"
                id="playbackRateSelect"
                defaultValue="1"
                onChange={this.onChangePlaybackRate}
              >
                <option value="0.5">0.5x</option>
                <option value="1">1x</option>
                <option value="1.5">1.5x</option>
                <option value="2">2x</option>
                <option value="4">4x</option>
              </select>
            </div>
          </InfoButton>
        </WaveformContainer>
      </div>
    );
  }
}

export default AudioWaveform;
