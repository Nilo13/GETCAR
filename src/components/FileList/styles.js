import styled from 'styled-components'

export const Container = styled.ul`
  margin-top: 20px;

  li{
    display:flex;
    align-items:center;
    color: #444;
    
    & + li {
      margin-top:15px;
    }
  }
`;

export const FileInfo = styled.div`
  display:flex;
  align-items:center;

  button {
    border:0;
    background: transparent;
    border:none;
    color: #e57878;
    cursor: pointer;
  }
`;

export const Preview = styled.div`
  width: 370px;
  height: 200px;
  border-radius:5px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 5px;
  margin-left: -40px;
`;