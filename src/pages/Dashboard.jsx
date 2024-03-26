import { useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"


const Dashboard = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state)=> state.auth)

  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  },[user, navigate])

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
