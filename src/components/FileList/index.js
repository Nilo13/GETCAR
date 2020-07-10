import React from 'react';
import * as Icon from 'react-feather'

import { Container, FileInfo, Preview } from './styles';

const FileList = ({files}) => (
  <Container>
    {files.map(uploadedFiles => (
      <li key={uploadedFiles.id}>
      <FileInfo>
        <Preview src={uploadedFiles.preview}/>
        <div>
          <button onClick={() => {}}><Icon.XCircle /></button>
        </div>
      </FileInfo>
    </li>
    ))}
  </Container>
)

export default FileList;