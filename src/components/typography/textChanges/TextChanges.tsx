"use client"
import React,{useState,useEffect} from 'react'

const TextChanges = ({texts}:{texts:string[]}) => {
    const [titleIndex, setTitleIndex] = useState(0);
    const [title, setTitle] = useState(texts[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTitleIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1500); // Change the interval time as per your requirement

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setTitle(texts[titleIndex]);
    }, [titleIndex]);
    
  return title
}

export default TextChanges