import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { uniqueId } from 'lodash'
import { Container, Content } from './styles'


import Logo from '../../assets/logo.svg'

import Upload from '../../components/Upload'
import FileList from '../../components/FileList'
import Footer from '../../components/Footer'
import FormPublicacao from '../../components/FormPublicacao'


//inputs de cadastro dos carros

class Publicacao extends Component {

  //upload das igm
  state = {
    uploadedFiles: [],
  }

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      preview: URL.createObjectURL(file),
    }))

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    })

  } 

  render() {
    const { uploadedFiles } = this.state

    return (
      <>
      <Container>

        <Link to="/">
          <img className="logo-login" src={Logo} alt="logo, get car"/>
        </Link>

        <h1 className="bemvindo">Vamos lá!</h1>

        <Content>
          <Upload onUpload={this.handleUpload} />
          { !!uploadedFiles.length && <FileList files={uploadedFiles}/>}
        </Content>
        
      </Container>

      <FormPublicacao />
      <Footer/>
      </>
    )
  }
}

export default Publicacao;