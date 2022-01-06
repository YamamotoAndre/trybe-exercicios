import { render } from "@testing-library/react";
import React, { Component } from "react";


export default class PeopInfo extends Component {

  render() {
    const estadosDoBrasil = [
      { sigla: 'AC', nome: 'Acre' },
      { sigla: 'AL', nome: 'Alagoas' },
      { sigla: 'AP', nome: 'Amapá' },
      { sigla: 'AM', nome: 'Amazonas' },
      { sigla: 'BA', nome: 'Bahia' },
      { sigla: 'CE', nome: 'Ceará' },
      { sigla: 'DF', nome: 'Distrito Federal' },
      { sigla: 'ES', nome: 'Espírito Santo' },
      { sigla: 'GO', nome: 'Goías' },
      { sigla: 'MA', nome: 'Maranhão' },
      { sigla: 'MT', nome: 'Mato Grosso' },
      { sigla: 'MS', nome: 'Mato Grosso do Sul' },
      { sigla: 'MG', nome: 'Minas Gerais' },
      { sigla: 'PA', nome: 'Pará' },
      { sigla: 'PB', nome: 'Paraíba' },
      { sigla: 'PR', nome: 'Paraná' },
      { sigla: 'PE', nome: 'Pernambuco' },
      { sigla: 'PI', nome: 'Piauí' },
      { sigla: 'RJ', nome: 'Rio de Janeiro' },
      { sigla: 'RN', nome: 'Rio Grande do Norte' },
      { sigla: 'RS', nome: 'Rio Grande do Sul' },
      { sigla: 'RO', nome: 'Rondônia' },
      { sigla: 'RR', nome: 'Roraíma' },
      { sigla: 'SC', nome: 'Santa Catarina' },
      { sigla: 'SP', nome: 'São Paulo' },
      { sigla: 'SE', nome: 'Sergipe' },
      { sigla: 'TO', nome: 'Tocantins' },]

      const {saveSub} = this.props

    return (
      <section>
        <fieldset>
          <div>
            <label>
              Nome
              <input
                type={'text'}
                name="Nome"
                maxLength={40}
                onSubmit={saveSub}
                required />
            </label>
          </div>
          <div>
            <label>
              E-Mail
              <input
                type={'email'}
                name="e-mail"
                required
                maxLength={50} 
                onSubmit={saveSub}/>
            </label>
          </div>
          <div>
            <label>
              CPF
              <input
                type={'text'}
                maxLength={11}
                required
                name="CPF"
                onSubmit={saveSub}
              />
            </label>
          </div>
          <div>
            <label>
              Endereço
              <input
                maxLength={200}
                required
                name="Endereço"
                onSubmit={saveSub}
              />
            </label>
          </div>
          <div>
            <label>
              Cidade
              <input
                maxLength={28}
                required
                name="Cidade"
                onSubmit={saveSub}
              />
            </label>
          </div>
          <label>
            Estado
            <select>
              <option> selecione um estado </option>
              {estadosDoBrasil.map((estado) => <option key={estado.sigla} value={estado.sigla}> {estado.nome} </option>)}
            </select>
          </label>
          
        </fieldset>
      </section>
    )
  }
}



  //   Crie um <fieldset> para os dados pessoais a seguir:
  // Nome - Texto ok
  // Limite de 40 caracteres ok
  // Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
  // Campo obrigatório ok


  // Email - Texto
  // Limite de 50 caracteres
  // Campo obrigatório

  // CPF - Texto
  // Limite de 11 caracteres
  // Campo obrigatório

  // Endereço - Texto
  // Limite de 200 caracteres
  // Remover qualquer caracter especial que seja digitado
  // Campo obrigatório

  // Cidade - Texto
  // Limite de 28 caracteres
  // Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
  // Campo obrigatório.

  // Estado - ComboBox
  // Todos os estados do Brasil
  // Campo obrigatório.

  // Tipo - Radio Button
  // Casa, Apartamento
  // Campo obrigatório.
