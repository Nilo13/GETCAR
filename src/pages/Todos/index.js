import React from 'react';
import './styles.css'

import car from '../../assets/car.jpg'

import HeaderOne from '../../components/HeaderOne'
import Footer from '../../components/Footer'

function Todos() {
  return (
    <>
    <HeaderOne/>
    
    <container id="cards">
      
      {/* adicionar id ao lado do "card-mais", para identificar o card para consumir da API */}

      <div className="card-mais">
        <img className="imagem-card" src={car} alt="imagem de um carro"/>
        <p className="modelo">Modelo</p>
        <p className="preco">R$ 9999,99</p>
        <p className="nu">Novo !</p>
      </div>

      <div className="card-mais">
        <img className="imagem-card" src={car} alt="imagem de um carro"/>
        <p className="modelo">Modelo</p>
        <p className="preco">R$ 9999,99</p>
        <p className="nu">Novo !</p>
      </div>

      <div className="card-mais">
        <img className="imagem-card" src={car} alt="imagem de um carro"/>
        <p className="modelo">Modelo</p>
        <p className="preco">R$ 9999,99</p>
        <p className="nu">Novo !</p>
      </div>

      <div className="card-mais">
        <img className="imagem-card" src={car} alt="imagem de um carro"/>
        <p className="modelo">Modelo</p>
        <p className="preco">R$ 9999,99</p>
        <p className="nu">Novo !</p>
      </div>

      <div className="card-mais">
        <img className="imagem-card" src={car} alt="imagem de um carro"/>
        <p className="modelo">Modelo</p>
        <p className="preco">R$ 9999,99</p>
        <p className="nu">Novo !</p>
      </div>

      <div className="card-mais">
        <img className="imagem-card" src={car} alt="imagem de um carro"/>
        <p className="modelo">Modelo</p>
        <p className="preco">R$ 9999,99</p>
        <p className="nu">Novo !</p>
      </div>

      <div className="card-mais">
        <img className="imagem-card" src={car} alt="imagem de um carro"/>
        <p className="modelo">Modelo</p>
        <p className="preco">R$ 9999,99</p>
        <p className="nu">Novo !</p>
      </div>

      <div className="card-mais">
        <img className="imagem-card" src={car} alt="imagem de um carro"/>
        <p className="modelo">Modelo</p>
        <p className="preco">R$ 9999,99</p>
        <p className="nu">Novo !</p>
      </div>

      <div className="card-mais">
        <img className="imagem-card" src={car} alt="imagem de um carro"/>
        <p className="modelo">Modelo</p>
        <p className="preco">R$ 9999,99</p>
        <p className="nu">Novo !</p>
      </div>

      <div className="card-mais">
        <img className="imagem-card" src={car} alt="imagem de um carro"/>
        <p className="modelo">Modelo</p>
        <p className="preco">R$ 9999,99</p>
        <p className="nu">Novo !</p>
      </div>

      <div className="card-mais">
        <img className="imagem-card" src={car} alt="imagem de um carro"/>
        <p className="modelo">Modelo</p>
        <p className="preco">R$ 9999,99</p>
        <p className="nu">Novo !</p>
      </div>

      <div className="card-mais">
        <img className="imagem-card" src={car} alt="imagem de um carro"/>
        <p className="modelo">Modelo</p>
        <p className="preco">R$ 9999,99</p>
        <p className="nu">Novo !</p>
      </div>

    </container>

    <Footer/>
    </>
  )
}
export default Todos;