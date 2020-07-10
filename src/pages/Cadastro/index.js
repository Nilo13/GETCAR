import React, { useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import './styles.css'

import HeaderTwo from '../../components/HeaderTwo'
import Input from '../../components/Form/Input'
import Footer from '../../components/Footer'

function Cadastro() {

  const formRef = useRef(null)

  async function handleSubmit(data, { reset }) {
  try{
    const schema = Yup.object().shape({
      email: Yup.string().email().required('*Digite seu E-EMAIL'),
      nomedaagencia: Yup.string().required('*Digite o nome da agência'),
      nomedogerente: Yup.string().required('*Digite o nome do gerente'),
      cnpj: Yup.string().required('*Digite seu cnpj'),
      cep: Yup.string().required('*Digite seu cep'),
      bairro: Yup.string().required('*Digite seu bairro'),
      endereco: Yup.string().required('*Digite o nome da rua'),
      cidade: Yup.string().required('*Digite sua cidade'),
      telefone: Yup.string().required('*Digite seu telefone'),
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
    <HeaderTwo />
    <div id="page-login">

      <h1 className="bemvindo">Vamos lá!</h1>

      <div className="box-cadastro">
        
        <h2 className="login-titulo">Cadastro</h2>
        
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input 
              className="input-cadastro" 
              name="email" 
              type="email" 
              placeholder="E-MAIL"
          />

          <Input 
            className="input-cadastro" 
            name="nomedaagencia" 
            placeholder="NOME DA AGÊNCIA"
          />

          <Input 
            className="input-cadastro" 
            name="nomedogerente" 
            placeholder="NOME DO(A) GERENTE"
          />

          <Input 
            className="input-cadastro" 
            name="cnpj" 
            placeholder="CNPJ"
          />

          <Input 
            className="input-cadastro" 
            name="cep" 
            placeholder="CEP"
          />

          <Input 
            className="input-cadastro" 
            name="bairro" 
            placeholder="BAIRRO"
          />

      <div className="en">
          <Input 
            className="input-endereco" 
            name="endereco" 
            placeholder="RUA"
          />

          <Input 
            className="input-n" 
            name="n" 
            placeholder="N°"
          />
      </div>

      <div className="en">
          <Input 
            className="input-endereco" 
            name="cidade" 
            placeholder="CIDADE"
          />

          <Input 
            className="input-n" 
            name="uf" 
            placeholder="UF"
          />
      </div>

          <Input 
            className="input-cadastro" 
            name="telefone" 
            placeholder="TELEFONE"
          />

          <button className="bentrar" type="submit">CADASTRAR</button>
        </Form>
        
      </div>

    </div>
    <Footer/>
    </>
  )
}
export default Cadastro;