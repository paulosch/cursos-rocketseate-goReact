import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as DevsActions } from '../../store/ducks/devs'

import {
  Modal,
  Container,
  FormContainer,
  FormHtml,
  FooterContainer
} from './styles'
import { TitleM } from '../../styles/titles'
import { InputText, ButtonCancel, ButtonConfirm } from '../../styles/inputs'

class Form extends Component {
  state = {
    devInput: ''
  }

  handleAddDev = event => {
    event.preventDefault()
    this.props.addDevRequest(this.state.devInput)

    this.setState({ devInput: '' })
  }

  handleCancel = event => {
    event.preventDefault()
    this.props.addDevCancelClick()
  }

  render() {
    return (
      <Modal>
        <Container>
          <FormContainer>
            <TitleM>Adicionar novo usuário</TitleM>

            <FormHtml onSubmit={this.handleAddDev}>
              <InputText
                type="text"
                placeholder="Usuário no github"
                value={this.state.devInput}
                onChange={e => this.setState({ devInput: e.target.value })}
              />
              <FooterContainer>
                <ButtonCancel type="button" onClick={this.handleCancel}>
                  Cancelar
                </ButtonCancel>
                <ButtonConfirm type="submit">Salvar</ButtonConfirm>
              </FooterContainer>
            </FormHtml>
          </FormContainer>
        </Container>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  devs: state.devs
})

const mapDispatchToProps = dispatch => bindActionCreators(DevsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
