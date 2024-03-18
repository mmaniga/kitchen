import React from 'react'

const CarouselSlide = (props) => {

    const {id,slideBg,slideTitle,slideDescription} = props
    return (
        <div className='slideWrap' style={{backgroundImage:`url(${slideBg})`}}>
        <h2>{slideTitle}</h2>
        <p>{slideDescription}</p>
    </div>
    )
}

export default CarouselSlide
