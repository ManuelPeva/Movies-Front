/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'



const Headers = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const {user} = useSelector((state)=> state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        dispatch('/')
    }

  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>MoviPeli</Link>
        </div>
        <ul>
            {user ? (
                <li>
                    <button className='btn' onClick={onLogout}> 
                        <FaSignOutAlt/> Logout
                        </button>
                </li>
            ):(
                <>
                <li>
                <Link to='/login'>
                    <FaSignInAlt/>Login
                </Link>
                
            </li>
                
            <li>
            <Link to='/register'>
                    <FaUser/>Registrar
                </Link>
            </li>
                </>
            )}
            
        </ul>
    </header>
  )
}

export default Headers
