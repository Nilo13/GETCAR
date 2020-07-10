import React, { useRef } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import './styles.css'

import Input from '../../components/Form/Input'

function FormPublicacao() {
  const formRef = useRef(null)

  async function handleSubmit(data, { reset }) {
  try{
    const schema = Yup.object().shape({
      Nomedaagencia: Yup.string().required('*Digite o nome da agência'),

      Categoria: Yup.string().required('*Escolha a Categoria do veículo'),
      
      Marca: Yup.string().required('*Digite a marca do veículo'),

      Modelo: Yup.string().required('*Digite o modelo do veículo'),

      Ano: Yup.string().required('*Digite o ano do veículo'),

      Cambio: Yup.string().required('*Digite o qual é o Câmbio do veículo'),

      Finaldaplaca: Yup.string().required('*Digite o final da placa do veículo'),

      Cor: Yup.string().required('*Digite a cor do veículo'),

      Velocidademaxima: Yup.string().required('*Digite a velocidade máxima do veículo'),

      Tipodecombustivel: Yup.string().required('*Digite o tipo de combustível do veículo'),

      Capacidadedotanquedecombustivel: Yup.string().required('*Digite a capacidade do tanque de combustível do veículo'),

      Tracao: Yup.string().required('*Digite qual a tração do veículo'),

      Consumourbano: Yup.string().required('*Digite o consumo urbano do veículo'),

      Consumorodoviario: Yup.string().required('*Digite o consumo rodoviario do veículo'),

      KMrodados: Yup.string().required('*Digite quantos KM rodados o veículo tem'),

      Potencia: Yup.string().required('*Digite a potência do veículo'),

      Capacidadeportamalas: Yup.string().required('*Digite a capacida portamalas do veículo'),

      Quantidadedelugares: Yup.string().required('*Digite a quantida de lugares do veículo'),

      IPVA: Yup.string().required('*Digite o IPVA do veículo'),

      Pneussaonovos: Yup.string().required('*Digite se os pneus são novos'),

      Aceitatroca: Yup.string().required('*Digite se aceita troca'),
      
      Preço: Yup.string().required('*Digite o preço do veículo'),
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
    <div id="form-publicacao">
      <div className="box-publicacao">

        <h2 className="login-publicacao">Informações</h2>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input 
            className="input-publicacao" 
            name="Nomedaagencia" 
            placeholder="Nome da agência"
          />
          
          <Input 
            className="input-publicacao" 
            name="Categoria" 
            placeholder="Categorias"
          />

          <Input 
            className="input-publicacao" 
            name="Marca" 
            placeholder="Marca"
          />

          <Input 
            className="input-publicacao" 
            name="Modelo" 
            placeholder="Modelo"
          />
          {/* */}
          <Input 
            className="input-publicacao" 
            name="Ano" 
            placeholder="Ano"
          />

          <Input 
            className="input-publicacao" 
            name="Cambio" 
            placeholder="Câmbio"
          />

          <Input 
            className="input-publicacao" 
            name="Finaldaplaca" 
            placeholder="Final da placa"
          />
          {/* */}
          <Input 
            className="input-publicacao" 
            name="Cor" 
            placeholder="Cor"
          />

          <Input 
            className="input-publicacao" 
            name="Velocidademaxima" 
            placeholder="Velocidade máxima"
          />

          <Input 
            className="input-publicacao" 
            name="Tipodecombustivel" 
            placeholder="Tipo de combustivel"
          />
          {/* */}
          <Input 
            className="input-publicacao" 
            name="Capacidadedotanquedecombustivel" 
            placeholder="Capacidade do tanque de combustível"
          />

          <Input 
            className="input-publicacao" 
            name="Tracao" 
            placeholder="Tração"
          />

          <Input 
            className="input-publicacao" 
            name="Consumourbano" 
            placeholder="Consumo urbano"
          />
          {/* */}
          <Input 
            className="input-publicacao" 
            name="Consumorodoviario" 
            placeholder="Consumo rodoviario"
          />

          <Input 
            className="input-publicacao" 
            name="KMrodados" 
            placeholder="KM rodados"
          />

          <Input 
            className="input-publicacao" 
            name="Potencia" 
            placeholder="Potência"
          />
          {/* */}
          <Input 
            className="input-publicacao" 
            name="Capacidadeportamalas" 
            placeholder="Capacidade porta malas"
          />

          <Input 
            className="input-publicacao" 
            name="Quantidadedelugares" 
            placeholder="Quantidade de lugares"
          />

          <Input 
            className="input-publicacao" 
            name="IPVA" 
            placeholder="IPVA"
          />
          {/* */}
          <Input 
            className="input-publicacao" 
            name="Pneussaonovos" 
            placeholder="Pneus são novos?"
          />

          <Input 
            className="input-publicacao" 
            name="Aceitatroca" 
            placeholder="Aceita troca?"
          />

          <Input 
            className="input-publicacao" 
            name="Preço" 
            placeholder="Preço"
          />

          
          <button className="bpublicar" type="submit">PUBLICAR</button>
        </Form>
      </div>

    </div>
    </>
  )
}
export default FormPublicacao;