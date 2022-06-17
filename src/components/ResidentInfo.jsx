import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useResidentInfoApi from '../hooks/useResidentInfoApi'


const ResidentInfo = ({resident}) => {

  const inforesident = useResidentInfoApi(resident)

  return (
   <article className='resident'>    
       <img src={inforesident?.image} alt="" />
       <h3>{inforesident?.name}</h3>
       <p>Status: {inforesident?.status}</p>
       <p>Origin: {inforesident?.origin.name}</p>
       <p>Episodes where appear: {inforesident?.episode.length}</p>
       
   </article>
  )
}

export default ResidentInfo