import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStart, firmSuccess } from '../features/stockSlice'

const useStockCall = () => {

    const dispatch = useDispatch()
    const token = useSelector(state=>state.auth.token)

    const getFirms = async()=>{
        dispatch(fetchStart())
        try {
          const {data} = await axios(`${import.meta.env.VITE_BASE_URL}firms`, {
            headers: {
              Authorization:`Token ${token}`
          }
        })
          console.log(data);
          dispatch(firmSuccess(data))
          
        } catch (error) {
          console.log(error);
          
        }
      }

      const getBrands = async()=>{
        dispatch(fetchStart())
        try {
          const {data} = await axios(`${import.meta.env.VITE_BASE_URL}firms`, {
            headers: {
              Authorization:`Token ${token}`
          }
        })
          console.log(data);
          dispatch(brandSuccess(data))
          
        } catch (error) {
          console.log(error);
          
        }
      }
  return {getFirms, getBrands}
}

export default useStockCall