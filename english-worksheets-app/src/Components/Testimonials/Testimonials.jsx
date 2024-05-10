import React, { useRef } from 'react'
import './Testimonials.scss'
import next_icon from '../../assets/right-arrow.png';
import back_icon from '../../assets/left-arrow.png';
import user_1 from '../../assets/avatar.png';
import data from '../../Testimonials.json';

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = () => {
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          {data.opinions.map((opinion,index) => ( 
          <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>{opinion.name}</h3>
                    <span>{opinion.topic}</span>
                  </div>
                </div>
                <p>{opinion.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
