import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";

export default function Searchbar({searchValue}) {
    const [Search,setSearch]=useState("")
    useEffect(()=>{
        searchValue(Search)
    },[Search])
  return (
    <div className='relative max-w-[300px] '>
        <input type="text" name="" value={Search} onChange={(e)=>setSearch(e.target.value)} id="" placeholder='Search here..' className='px-5 py-3 placeholder:text-gray-600 w-full border border-gray-300 focus:border-blue-800 focus:outline-none rounded-full h-10' />
        <FiSearch className='absolute top-[12px] right-[15px] text-gray-400' />
    </div>
  )
}
