import React from 'react'
import Slider from 'rc-slider'
import { Container, Current, Progress, Controls, Volume, Time, ProgressSlider } from './styles'

import VolumeIcon from '../../assets/images/volume.svg'
import ShuffleIcon from '../../assets/images/shuffle.svg'
import BackwardIcon from '../../assets/images/backward.svg'
import PlayIcon from '../../assets/images/play.svg'
import PauseIcon from '../../assets/images/pause.svg'
import ForwardIcon from '../../assets/images/forward.svg'
import RepeatIcon from '../../assets/images/repeat.svg'


const Player = () => (
  <Container>
    <Current>
      <img src="https://static.stereogum.com/uploads/2018/09/tobacco-600-1-1536432033-compressed.jpg" alt="Cover" />

      <div>
        <span>Times like these</span>
        <small>Foo Figthers</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="" />
        </button>
        <button>
          <img src={BackwardIcon} alt="" />
        </button>
        <button>
          <img src={PlayIcon} alt="" />
        </button>
        <button>
          <img src={ForwardIcon} alt="" />
        </button>
        <button>
          <img src={RepeatIcon} alt="" />
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{background: '#1ED760'}}
            handleStyle={{ border: 0}}
          />
        </ProgressSlider>
        <span>4:28</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="volume"/>
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={100} />
    </Volume>
  </Container>
)

export default Player
