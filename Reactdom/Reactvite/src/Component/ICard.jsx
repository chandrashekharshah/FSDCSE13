import React from 'react'

function ICard({data}) {
  return (
    <div style={{ border: '4px solid blue', width: '175px', height: '325px', borderRedius: '50%', }}>
     <img src={data.pic} height={150} width={150} style={{ borderRadius: "50%" }} />  
    <h2>Name:{data.name}</h2>
    <h2>Roll:{data.roll}</h2>
    <h2>Branch:{data.branch}</h2>
    <h2>College: {data.college}</h2>
        
        </div>
  )
}

export default ICard