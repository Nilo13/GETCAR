import React from 'react'
import './styles.css'

import HeaderTwo from '../../components/HeaderTwo'
import Footer from '../../components/Footer'

function Publicado() {

  return (
    <>
    <HeaderTwo/>
    <div id="box-publicado">

      <div className="infos">

        <h1 className="titulo-agencia">Agência</h1>
        <h2 className="titulo-marca">Marca | Modelo</h2>

        <p className="info-fixa">Ano</p>
        <p className="info-dinamica">2020</p>

        <p className="info-fixa">Câmbio</p>
        <p className="info-dinamica">Automatico</p>

        <p className="info-fixa">Final da placa</p>
        <p className="info-dinamica">XX</p>

        <p className="info-fixa">Cor</p>
        <p className="info-dinamica">Azul</p>

        <p className="info-fixa">Velocidade Máxima</p>
        <p className="info-dinamica">300 - KH</p>

        <p className="info-fixa">Combustível</p>
        <p className="info-dinamica">Flex</p>

        <p className="info-fixa">Capacidade do tanque de combustível</p>
        <p className="info-dinamica">41 L</p>

        <p className="info-fixa">Tração</p>
        <p className="info-dinamica">Dianteira</p>

        <p className="info-fixa">Consumo Urbano</p>
        <p className="info-dinamica">5 KM-L</p>

        <p className="info-fixa">Consumo Rodoviario</p>
        <p className="info-dinamica">3 KM-L</p>

        <p className="info-fixa">KM rodados</p>
        <p className="info-dinamica">015</p>

        <p className="info-fixa">HPs</p>
        <p className="info-dinamica">150 - 230</p>

        <p className="info-fixa">Capacidade porta malas</p>
        <p className="info-dinamica">15 L</p>

        <p className="info-fixa">Quantidade de lugares</p>
        <p className="info-dinamica">05</p>

        <p className="info-fixa">IPVA</p>
        <p className="info-dinamica">XX</p>

        <p className="info-fixa">Pneus novos?</p>
        <p className="info-dinamica">Sim</p>

        <p className="info-fixa">Aceita troca?</p>
        <p className="info-dinamica">Sim</p>

        <div className="box-contato">
          <h1 className="precos">R$ - 55.555.00</h1>
          <h2 className="contato">CONTATOS</h2>
          
          <p className="box-contatos">E-MAIL  -  contato@contato.com</p>
          <p className="box-contatos">TELEFONE  -  (11) 948950318</p>

        </div>

      </div>

      
    </div>
    <Footer />
    </>
  )
}
export default Publicado;