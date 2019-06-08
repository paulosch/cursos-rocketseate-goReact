import styled from 'styled-components'

export const InputText = styled.input`
  display: flex;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`

export const ButtonCancel = styled.button`
  display: flex;
  width: 100px;
  padding: 10px;
  border: none;
  background-color: gray;
  color: white;
  text-decoration: none;
  justify-content: center;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: all 0.3s;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`

export const ButtonConfirm = styled.button`
  display: flex;
  width: 100px;
  padding: 10px;
  background-color: green;
  color: white;
  text-decoration: none;
  justify-content: center;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  border: none;
  transition: all 0.3s;
  border-radius: 5px;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`
