/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react'
import {FaSignInAlt, FaUser} from 'react-icons/fa'


const login = () => {

  const [formData, setFormData] = useState({
    
    email: '',
    password: ''

  });

  const{email, password} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  
  return (
    <>
    <section className='heading'>
      <h4><FaSignInAlt /> Acceder a la App</h4>
      <p>Por favor escribe tus credenciales</p>
    </section>

    <section className='form' >
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input 
          type="email"
          className='form-control'
          id='email'
          name='email'
          value={email}
          placeholder='por favor escriba su email'
          onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input 
          type="password"
          className='form-control'
          id='pasword'
          name='password'
          value={password}
          placeholder='por favor escriba tu password'
          onChange={onChange}
          />
        </div>
        
        <div className="form-group">
          <button type='submit' className='btn btn-block'>
            Acceder
          </button>
        </div>
      </form>
    </section>
    </>
  )
}


export default login
