import React, {Component} from 'react';

import Dropzone from 'react-dropzone'

import { DropContainer } from './styles';

export default class Upload extends Component {
  render() {
    const { onUpload } = this.props

    return (
      // todo tipo de imagem pode ser upado, se vc fez uma validação no back pode mudar aki tbm.
      <Dropzone accept="image/*" onDropAccepted={onUpload}>
        { ({ getRootProps, getInputProps }) => (
          <DropContainer {...getRootProps()}>
            <input {...getInputProps()}/>
            Clique aki ou arrastes suas fotos aki.
          </DropContainer>
            
        ) }
      </Dropzone>
    )
  }
}
