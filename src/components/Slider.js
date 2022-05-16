import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Slider.css'

const Carousel = require('react-responsive-carousel').Carousel;

const Slider = (props) => {
  return (
    <Carousel className='slider' 
      showArrows={true} 
      onChange={()=>{}} 
      onClickItem={()=>{}} 
      onClickThumb={()=>{}}
      centerMode={true}
      infiniteLoop={true}
      dynamicHeight={false}
      >
        <div>
            <img src="assets/logo_asnet.jpg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="assets/logo_asnet.jpg" />
            <p className="legend">Legend 2</p>
        </div>
    </Carousel>
  )
}

export default Slider