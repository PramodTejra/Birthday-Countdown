import React from 'react';
import Wish from './Wish';

const Countdown = ({ countdownData, name }) => {
  if (!countdownData.isItBday) {
    return (
      <div>
        <div id="background-wrap">
        <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
          <h1 className='heading'>
            Countdown to <span className='highlight'>{name}'s</span> Birthday
          </h1>
          <div className='countdown-wrapper'>
            <div className='countdown-box'>
              {countdownData.days}
              <span className='legend'>Days</span>
            </div>
            <div className='countdown-box'>
              {countdownData.hours}
              <span className='legend'>Hours</span>
            </div>
            <div className='countdown-box'>
              {countdownData.minutes}
              <span className='legend'>Minutes</span>
            </div>
            <div className='countdown-box'>
              {countdownData.seconds}
              <span className='legend'>Seconds</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Wish name={name} />;
  }
};

export default Countdown;
