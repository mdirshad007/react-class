import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const [UserDetail, setUserDetails] = useState(null)
    const { id } = useParams()
   
    useEffect(() => {
        const fetchData = async () => {
            let data = await fetch(`https://6654c2d73c1d3b6029374b42.mockapi.io/todo/users/${id}`)
            data = await data.json()
            setUserDetails(data)
        }
        fetchData()
    }, [id])

    if (!UserDetail) {
        return <div className='max-w-[960px] mx-auto'>Loading...</div>
    }

    return (
        <>
            <div className="flex justify-between max-w-[960px] mx-auto w-full mb-8 border-b pb-5">
                <h1 className='text-3xl font-semibold capitalize'>Welcome {UserDetail.name}</h1>
            </div>
            <div className='max-w-[960px] mx-auto'>
                <p>Email: {UserDetail.email}</p>
                <p>Phone: {UserDetail.phone}</p>
                <p>City: {UserDetail.city}</p>
            </div>
        </>
    )
}
