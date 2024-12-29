"use client"
import SearchForm from '@/components/form/SearchForm'
import OptionCom from '@/components/Option'
import Image from 'next/image'
import React from 'react'

const Search = () => {
  return (
    <div className='min-h-screen'>
        <div className="w-[90%] md:w-[300px] mx-auto relative h-[200px]">
          <Image src="/bro.png" alt="SkillSwap Logo" fill={true} />
        </div>
        <SearchForm />
        <div className='my-5'>
            <OptionCom/>
        </div>
    </div>
  )
}

export default Search