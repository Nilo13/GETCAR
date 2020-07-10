import React from 'react'
import logo from '../../assets/logo.svg'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'

import './styles.css'

export default function HeaderOne() {

    return (
      <div id="header">
        <Link to="/">
          <img className="logogc" src={logo} alt="logo"/>
        </Link>
    
        <div className="busca">
    
          <input 
            ClassName="busca"
            type="text" 
            placeholder="Faça sua busca"
          />
          <button type="submit">
            <Icon.Search/>
          </button>
        </div>

        <div id="login">
          <Link to="/publicacao" style={{ textDecoration: 'none'}}>
            <button className="blogin"><Icon.PlusCircle/><p className="plogin">Anunciar</p></button>
          </Link>

          <Link to="/Login" style={{ textDecoration: 'none'}}>
            <button className="blogin"><Icon.LogIn/><p className="plogin">Login</p></button>
          </Link>
        </div>
      </div>
    )
}
