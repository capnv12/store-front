import React, { useState, useEffect } from 'react';
// import styled from 'styled-components'
// import { Carousel } from 'react-responsive-carousel';
import {Gallery, GalleryImage} from 'react-gesture-gallery'
import styled from 'styled-components'

import {images} from './Slider/sliderImages'

const Slider = () => {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() =>{
            if(index ===images.length-1){
                setIndex(0)
            }else{
                setIndex(index+1)
            }
        }, 7000)
        return () => clearInterval(interval)
    },[index])

    return(
        <Gallery
            index={index}
            onRequestChange={i => {
                setIndex(i)
            }}
        >
            {images.map((image, i)=> (
                <Wrapper>
                    <GalleryImage objectFit="cover" key={i} src={image}/>
                </Wrapper>

            ))}
                                
        </Gallery>
    )
}

export default Slider

const Wrapper = styled.div`

`