"use client"
import React from 'react'
import styled from '@emotion/styled'
import TextChanges from '@/components/typography/textChanges/TextChanges'
import PrimaryButton from '@/components/buttons/primaryButton/PrimaryButton'
import styles from "./style.module.css"
import MultiSelectFilter from '@/components/form/multiSelectFilter/MultiSelectFilter'

const Banner1 = () => {
  const ImageBackground = styled.div`
      filter: grayscale(30%);
     background-image:linear-gradient(to right bottom,rgba(23, 10, 70, 0.9),rgba(38, 38, 38, 0.9)), url("/banner.jpg");
     background-size:cover;
     background-position:center;
     background-color: rgba(255, 255, 255, 0.1);
    `
  return (
    <ImageBackground className=' py-40 md:h-[60vh] h-[100vh] flex items-center bg-gray-200 relative overflow-hidden'>
      <div className='flex flex-col md:flex-row justify-between md:w-9/12 w-11/12 mx-auto space-y-6 md:space-y-0 md:space-x-4 space-x-0'>
        <div className='space-y-4 max-w-xl relative z-20 '>
          <h1 className={`max-w-lg md:text-3xl text-3xl font-bold uppercase text-white`}>
            <TextChanges texts={[
              "Study Abroad Guider",
              "Step By Step Procedure",
            ]} />
          </h1>
          <p className='text-white text-xl'>
            One Stop Site Where you can get all Scholorship ads. Subscribe this site and get latest update for your dream Schalorship
          </p>
          <PrimaryButton text={"LEARN MORE"} />
        </div>
        <div className='relative z-20 lg:w-1/2 md:w-full'>
        <MultiSelectFilter />
        </div>
      </div>
      <div className={styles.waves}></div>
    </ImageBackground>
  )
}

export default Banner1