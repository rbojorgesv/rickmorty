import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InputSearch  from './components/InputSearch'
import LocationInfo from './components/LocationInfo'
import ResidentInfo from './components/ResidentInfo'
import useLocationApi from './hooks/useLocationApi'

const RickApp = () => {

  const [searchLocation, setSearchLocation] = useState() 

  const location = useLocationApi(searchLocation)

  return (

    <div className="RickApp">   
        <div className='container'>
        <h1>Rick and Morty</h1>
          <InputSearch setSearchLocation={setSearchLocation} className='btnsear'  /> 
          <LocationInfo location={location}/>    
          </div> 
          {
            location?.residents.map(resident => ( 
            <div className='card'>            
               <ResidentInfo 
                resident={resident}
                key={resident}
               />        
               </div>   
           ))
           } 
     </div>  
     
  )
}

export default RickApp