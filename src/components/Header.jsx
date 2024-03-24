/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Headers = () => {
  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>MoviPeli</Link>
        </div>
        <ul>
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
        </ul>
    </header>
  )
}

export default Headers
