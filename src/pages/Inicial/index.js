import React from 'react';
import { Link } from 'react-router-dom'
import banner from '../../assets/banner.png'
import './styles.css'

import mais from '../../assets/mais.png'
import sedan from '../../assets/sedan.png'
import populares from '../../assets/populares.png'
import suvs from '../../assets/suvs.png'
import eletricos from '../../assets/eletricos.png'
import velhos from '../../assets/velhos.png'
import utilitario from '../../assets/utilitario.png'
import moto from '../../assets/moto.png'

import HeaderOne from '../../components/HeaderOne'
import Footer from '../../components/Footer'

function Inicial() {
  return (
    <>
    <HeaderOne/>
    <img className="banner" src={banner} alt="banner"/>
    
    <p className="mais-vendido">Categorias</p>

    <Link to="/Todos" style={{ textDecoration: 'none'}}>
    <container id="cards-categorias">
        <div className="card-categorias">
          <p className="categoria">Mais vendidos</p>
          <img className="imagem-categorias" src={mais} alt="imagem de um carro"/>
        </div>

        <div className="card-categorias">
          <p className="categoria">Sedan</p>
          <img className="imagem-categorias" src={sedan} alt="imagem de um carro"/>
        </div>

        <div className="card-categorias">
          <p className="categoria">Populares</p>
          <img className="imagem-categorias" src={populares} alt="imagem de um carro"/>
        </div>

        <div className="card-categorias">
          <p className="categoria">SUVs</p>
          <img className="imagem-categorias" src={suvs} alt="imagem de um carro"/>
        </div>
    </container>
    </Link>

    <Link to="/Todos" style={{ textDecoration: 'none'}}>
    <container id="cards-categorias">

      <div className="card-categorias">
          <p className="categoria">Elétrico</p>
          <img className="imagem-categorias" src={eletricos} alt="imagem de um carro"/>
        </div>

        <div className="card-categorias">
          <p className="categoria">Caminhonetes</p>
          <img className="imagem-categorias" src={utilitario} alt="imagem de um carro"/>
        </div>

        <div className="card-categorias">
          <p className="categoria">Antigos</p>
          <img className="imagem-categorias" src={velhos} alt="imagem de um carro"/>
        </div>

        <div className="card-categorias">
          <p className="categoria">Motos</p>
          <img className="imagem-categorias" src={moto} alt="imagem de um carro"/>
        </div>

    </container>
    </Link>

    <Footer/>
    </>
  )
}
export default Inicial;