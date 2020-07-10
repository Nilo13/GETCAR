import React from 'react'
import logo from '../../assets/logo.svg'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'

import './styles.css'

export default function HeaderTwo() {

    return (
      <div id="header-two">
          <img className="logo-two" src={logo} alt="logo"/>

        <div id="voltar">
          <Link to="/" style={{ textDecoration: 'none'}}>
            <button className="bvoltar"><Icon.ArrowLeft/><p className="pvoltar">Voltar</p></button>
          </Link>
        </div>
      </div>
    )
}
