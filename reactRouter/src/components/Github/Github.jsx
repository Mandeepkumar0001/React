import React, { useEffect, useState } from 'react'

function Github() {
    const [data , setData]= useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Mandeepkumar0001')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    },[])
  return (
    <>
    <div className="p-4 m-4 text-center text-white bg-gray-600 txt-3xl"
    >Github followers: {data.followers}
        <img src={data.avatar_url} alt='Git picture' width='100' height=''/>
    </div>
    </>
  )
}

export default Github