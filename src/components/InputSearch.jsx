import React, { useState } from 'react'


export const InputSearch = ({setSearchLocation}) => { 
  
    const searchLocation = e =>{
        e.preventDefault()
        setSearchLocation(e.target.firstChild.value)
    }    
  return (
    <form  onSubmit={searchLocation}>
         <input className='btnsear' placeholder="Enter a location number (1 to 126)" type="text"/>
         <button className='btnsearch'>Search</button>
     </form>
  )
}
 export default InputSearch