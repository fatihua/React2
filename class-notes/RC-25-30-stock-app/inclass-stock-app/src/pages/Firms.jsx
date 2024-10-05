import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchStart, firmSuccess } from '../features/stockSlice'
// import axios from 'axios'
// import { lightGreen } from '@mui/material/colors'
import useStockCall from '../hooks/useStockCall'

const Firms = () => {
  // const dispatch = useDispatch()
  // const token = useSelector(state=>state.auth.token)

  // const getFirms = async()=>{
  //   dispatch(fetchStart())
  //   try {
  //     const {data} = await axios(`${import.meta.env.VITE_BASE_URL}firms`, {
  //       headers: {
  //         Authorization:`Token ${token}`
  //     }
  //   })
  //     console.log(data);
  //     dispatch(firmSuccess(data))
      
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }

  const {getFirms} = useStockCall()

  useEffect(()=>{
    getFirms()
  },[])

  return (
    <div>Firms</div>
  )
}

export default Firms