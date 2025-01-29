import React , {useEffect, useState}from 'react'
import { useLoaderData } from 'react-router-dom'


export default function Github() {

    const [data,setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/prantiksanki")
        .then(response => response.json())
        .then((data)=>{
            console.log(data) ; 
            setData(data);
        })
    } , [])

  return (
    <div class = 'text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers : {data.followers}
      <img  src = {data.avatar_url} alt = "Git Picture"></img>
    </div>
  )
}


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
