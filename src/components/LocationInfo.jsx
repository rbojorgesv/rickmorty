import React from 'react'
import useLocationApi from '../hooks/useLocationApi'

const LocationInfo = ({location}) => {


  return (
    <article className='locations'>
      <h2>{location?.name}</h2> 
      <ul>
          <li>Type: {location?.type}</li>
          <li>Dimension: {location?.dimension}</li>
          <li>Population: {location?.residents.length}</li>
       </ul> 
       
    </article>
  )
}

export default LocationInfo