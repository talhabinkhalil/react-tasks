import axios from 'axios'
import { BASE_URL } from '../constants'
export const getAllUsers = () => {
  return (
    axios.get(BASE_URL)
    .then(data=>data?.data)
    .catch(err=>console.log(err))
  )
}
