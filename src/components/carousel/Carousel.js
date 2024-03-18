import React , {useState, useEffect,useCallback} from 'react'
import { client } from '../../client'
import CarouselSlide from './CarouselSlide'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation';

SwiperCore.use({Navigation})

const Carousel = () => {
  const [isCarouselLoading, setIsCarouselLoading] = useState(false)
  const [carouselSlide, setCarouselSlide] = useState([])

  const cleanUpCarouselSlide = useCallback((rawData) => {
    const clientSlides = rawData.map((slide) => {
      const {sys,fields} = slide
      const {id} = sys
      const slideTitle = fields.title
      const slideDescription = fields.description
      const slideBg = fields.image.fields.file.url
      const updatedSlide = {id,slideTitle,slideDescription,slideBg}
      return updatedSlide
    })
    setCarouselSlide(clientSlides);
  },[])

  const getCarouselSlides = useCallback(async () => {
    setIsCarouselLoading(true);
    try {
      const response = await client.getEntries({content_type:'kitchenCarosule'})
      const responseData = response.items;
      //console.log(responseData);
      if(responseData){
      cleanUpCarouselSlide(responseData);
      } else {
        setCarouselSlide([]);
      }
      setIsCarouselLoading(false);
    }catch(error){
      console.log(error);
      setIsCarouselLoading(false);
    }
  },[cleanUpCarouselSlide])

  useEffect(()=>{
    getCarouselSlides()
  },[getCarouselSlides])


  console.log(carouselSlide);
  if(!Array.isArray(carouselSlide) || !carouselSlide.length){
    return null;
  }

  return (
    <div className='carousel'>
      <Swiper>
      {carouselSlide.map((item)=>{
      const {id,slideBg,slideTitle,slideDescription} = item
      return(
        <SwiperSlide key={id}>
          <CarouselSlide  slideTitle={slideTitle} slideDescription={slideDescription} slideBg={slideBg}/>
        </SwiperSlide>
      )
     })}
      </Swiper>
     
    </div>
  )
}

export default Carousel
