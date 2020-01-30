// edit.component.js

import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeSobreNome = this.onChangeSobreNome.bind(this);
    this.onChangeTelefone = this.onChangeTelefone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nome: '',
      sobrenome: '',
      telefone:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/pessoa/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                nome: response.data.nome, 
                sobrenome: response.data.sobrenome,
                telefone: response.data.telefone });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }
  onChangeSobreNome(e) {
    this.setState({
      sobrenome: e.target.value
    })  
  }
  onChangeTelefone(e) {
    this.setState({
      telefone: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nome: this.state.nome,
      sobrenome: this.state.sobrenome,
      telefone: this.state.telefone
    };
    axios.post('http://localhost:4000/pessoa/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Atualizar contato:</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nome:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nome}
                      onChange={this.onChangeNome}
                      />
                </div>
                <div className="form-group">
                    <label>Sobrenome: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.sobrenome}
                      onChange={this.onChangeSobreNome}
                      />
                </div>
                <div className="form-group">
                    <label>Telefone: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.telefone}
                      onChange={this.onChangeTelefone}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Atualizar contato" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}