"use client"
import React from 'react'
import styled from '@emotion/styled'
import TextChanges from '@/components/typography/textChanges/TextChanges'

const Banner1 = () => {
  const ImageBackground = styled.div`
      filter: grayscale(30%);
     background-image:linear-gradient(to right bottom,rgba(15,15,15,0.9),rgba(38,38,38,0.4)), url("/banner.jpg");
     background-size:cover;
     background-position:center;
     background-color: rgba(255, 255, 255, 0.1);
    `
  return (
    <ImageBackground className='py-40 h-60  flex justify-center items-center bg-gray-200'>
      <h1 className={`h-60 mt-32 text-center md:text-5xl text-3xl w-9/12 font-bold uppercase text-white`}>
        <TextChanges texts={["Study Abroad Guider","Step By Step Procedure","Follow it and get your dream Scholorship","One Stop Site Where you can get all Scholorship ads"]} />
      </h1>
    </ImageBackground>
  )
}

export default Banner1