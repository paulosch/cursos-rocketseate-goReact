import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const FormHtml = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  max-width: 25%;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  -webkit-box-shadow: 0px 4px 54px -17px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 54px -17px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 4px 54px -17px rgba(0, 0, 0, 0.75);
`
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  text-decoration: none;
  padding-top: 10px;
  justify-content: space-between;
`
export const Avatar = styled.img`
  border-radius: 50%;
  border: 4px solid #c25bf6;
`
export const AvatarWOB = styled.img`
  border-radius: 50%;
  border: none;
  margin-right: 5px;
`
export const PanelHtml = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  left: 30px;
  top: 5vh;
  width: 240px;
  height: 90vh;
  background: white;
  border-radius: 5px;
  padding: 15px;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
`
export const DevItemHtml = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
  padding-bottom: 5px;
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
`
export const Strong = styled.strong`
  font-size: 12px;
`
export const Small = styled.small`
  font-size: 10px;
  color: #ccc;
`
export const IconDanger = styled.i`
  color: red;
  margin: 0 2px;
  cursor: pointer;
`
export const Icon = styled.i`
  color: gray;
  margin: 0 2px;
  cursor: pointer;
`
