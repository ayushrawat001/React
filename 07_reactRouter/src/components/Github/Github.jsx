import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData();
    // const [data, setData] = useState([])
    
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ayushrawat001')
    // .then(res => res.json()    
    // )
    // .then(data => {
    //     setData(data)
    //     console.log(data);
        
        
    // })
    // },[])
    
  return (
    <>
    
    <div className='flex w-fit mx-auto justify-center text-center  bg-gray-700 text-white text-2xl p-4 m-5'>
    <img src={data.avatar_url} alt="" width={200} />
    <span className='ml-5'>
    Username: <a href="https://github.com/ayushrawat001" target='_blank'>{data.login} </a>
    <br />
    Github Follower : <span>{data.followers}</span>
        
    
    </span>
    
    </div>
    
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/ayushrawat001')
  
  return response.json();
}