import styled from 'styled-components';

const waveHeight = '80px';

export const WaveformContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${waveHeight};
  width: 100%;
  background: transparent;
  border: 1px solid #000000 !important;
  border-radius: 0.25rem !important;
`;

export const AudioAction = styled.div`
  width: 100%;
  height: ${waveHeight};
`;

export const Wave = styled.div`
  width: 100%;
  height: ${waveHeight};
  position: relative;
  color: red;
`;

export const PlayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: ${waveHeight};
  cursor: pointer;
`;

export const InfoButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: ${waveHeight};
`;

export const DownloadButton = styled.div`
  cursor: pointer;
  color: #5a6570ad !important;
  &:hover {
    color: #212529 !important;
  }
`;
