import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import './styles.css'

import HeaderTwo from '../../components/HeaderTwo'
import Input from '../../components/Form/Input'
import Footer from '../../components/Footer'

function Login() {
  const formRef = useRef(null)

  async function handleSubmit(data, { reset }) {
  try{
    const schema = Yup.object().shape({
      ID: Yup.string().required('*Digite seu ID')
    })
    
    await schema.validate(data, {
      abortEarly:false,
    })

    console.log(data)

    reset()
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      const errorMessages = {}

      err.inner.forEach(error => {
        errorMessages[error.path] = error.message
      })

      formRef.current.setErrors(errorMessages)
    }
  }
  }

  return (
    <>
    <HeaderTwo/>
    <div id="page-login">
      <h1 className="bemvindo">Bem-Vindo!</h1>

      <div className="box-login">
        <h2 className="login-titulo">Login</h2>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input className="input-login" name="ID" type="password" />
          <button className="bentrar" type="submit">ENTRAR</button>
        </Form>
        <Link to="/Cadastro" style={{ textDecoration: 'none'}}>
          <p className="criar-conta">CRIAR CONTA</p>
        </Link>
      </div>

    </div>
    <Footer />
    </>
  )
}
export default Login;