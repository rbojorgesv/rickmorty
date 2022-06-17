import axios from 'axios'
import { useEffect, useState } from 'react'

const useResidentInfoApi = resident => {

    const [inforesident, setInfoResident] = useState()

   useEffect(() => {
    axios.get(resident)
    .then(res => setInfoResident(res.data))
    .catch(err => console.log(err))

 
},[])



  return inforesident
}

export default useResidentInfoApi