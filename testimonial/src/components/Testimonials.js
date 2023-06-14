import React from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from 'react';


const Testimonials = (props) =>{
    let reviews = props.reviews;
const [index, setIndex] = useState(0);

    function leftShiftHandler(){
        if(index-1 < 0){
            setIndex(reviews.length - 1)
        }
        else{
            setIndex(index-1)
        }
    }

    function rightShiftHandler(){
        if(index+1 >= reviews.length){
            setIndex(0)
        }
        else{
            setIndex(index+1)
        }
    }
    
    function surpriseHandler(){
        const randomIndex = Math.floor(Math.random() * reviews.length)
        setIndex(randomIndex)
    }
  
    return (
    <div className='h-[450px] w-[90vw] md:w-[700px] bg-white flex flex-col justify-center items-center'>
        <Card review ={reviews[index]}/>
        <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto text-center'>
            <button className='cursor-pointer hover:text-violet-500 text-center' onClick={leftShiftHandler}>
                <FiChevronLeft />
            </button>
            <button className='cursor-pointer hover:text-violet-500 ' onClick={rightShiftHandler}>
                <FiChevronRight />
            </button>
        </div>
        <div className='mt-6'>
            <button onClick={surpriseHandler} className='bg-violet-400 capitalize cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>surprise me</button>
        </div>
    </div>
  )
}

export default Testimonials