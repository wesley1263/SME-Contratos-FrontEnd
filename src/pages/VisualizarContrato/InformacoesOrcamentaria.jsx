import React, { Component } from "react";
import { FormGroup, Label, Row, Col } from "reactstrap";
import { InputText } from "primereact/inputtext";
import CurrencyInput from "react-currency-input";

export default class InformacoeOrcamentaria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dotacao: [],
      dotacaoOrcamentaria: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.dotacaoOrcamentaria !== this.props.dotacaoOrcamentaria) {
      const { dotacaoOrcamentaria } = this.props;
      const { dotacao } = this.state;

      this.setState({ dotacaoOrcamentaria });
      if (dotacaoOrcamentaria.length > 0) {
        dotacaoOrcamentaria.map(valor => {
          const emptyDotacao = {
            classe: "w-75 my-2 mr-1 ",
            placeholder: "Digite nome da dotação",
            value: valor
          };
          dotacao.push(emptyDotacao);
        });
        this.setState({ dotacao });
      }
    }
  }

  appendDotacao() {
    const emptyDotacao = {
      classe: "w-75 my-2 mr-1 ",
      placeholder: "Digite nome da dotação"
    };

    const dotacao = this.state.dotacao;
    dotacao.push(emptyDotacao);
    this.setState({ dotacao });
  }

  removerDotacao(index) {
    const { dotacao, dotacaoOrcamentaria } = this.state;
    dotacao.splice(index, 1);
    dotacaoOrcamentaria.splice(index, 1);
    this.setState({ dotacao, dotacaoOrcamentaria });
  }

  alteraValorDotacao = (index, valor) => {
    const { dotacaoOrcamentaria } = this.state;
    dotacaoOrcamentaria[index] = valor;
    this.setState({ dotacaoOrcamentaria });
    this.props.setDotacao(dotacaoOrcamentaria);
  };

  alteraTotalMensal = (event, maskedValue, floatValue) => {
    this.props.setTotalMensal(floatValue)
  } 
  alteraTotalContrato = (event, maskedValue, floatValue) => {
    this.props.setTotalMensal(floatValue)
  }

  render() {
    const { totalMensal, valorTotal, disabilitar } = this.props;
    const { dotacao } = this.state;

    return (
      <Row>
        <Col lg={8} xl={8}>
          <Row>
            <Col>
              <FormGroup>
                <Label>Dotação Orçamentária</Label>
                <br />
                {dotacao.length ? (
                  dotacao.map((value, index) => {
                    return (
                      <div>
                        <InputText
                          placeholder={value.placeholder}
                          className={value.classe}
                          onChange={e =>
                            this.alteraValorDotacao(index, e.target.value)
                          }
                          value={value.value}
                        />
                        <button
                          onClick={() => this.removerDotacao(index)}
                          className="btn btn-sm btn-coad-primary"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    );
                  })
                ) : (
                  <div className="alert alert-info">
                    Sem Dotação Orçamentária
                  </div>
                )}
                <button
                  onClick={() => this.appendDotacao()}
                  className="btn bt-link font-weight-bold coad-color"
                  disabled={disabilitar}
                >
                  Adicionar Dotação
                </button>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col lg={4} xl={4}>
          <Row>
            <Col>
              <FormGroup>
                <Label>Valor mensal do Contrato</Label>
                <CurrencyInput
                    value={totalMensal}
                    onChangeEvent={this.alteraTotalMensal}
                    disabled={true}
                    decimalSeparator=","
                    thousandSeparator="."
                    prefix="R$ "
                    className="form-control"
                    ref="valorTotal"
                  />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label>Valor total do Contrato</Label>
                <CurrencyInput
                    value={0.00}
                    onChangeEvent={this.alteraTotalContrato}
                    decimalSeparator=","
                    thousandSeparator="."
                    prefix="R$ "
                    className="form-control"
                    ref="valorTotal"
                    disabled={true}
                  />
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
