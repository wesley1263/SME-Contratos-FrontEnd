import React, { Component } from "react";
import { Row, Col, FormGroup, Label, Input, Card } from "reactstrap";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { SelecionaTipoServico } from "../SelecionaTipoServico";
import { CALENDAR_PT } from '../../../configs/config.constants'

export default class InformacoesContrato extends Component {
  state = {
    termoContrato: "",
    tipoServico: 1,
    numeroProcesso: "",
    situacao: "Ativo",
    edital: "",
    estadoContrato: "EMERGENCIAL",
    dataAssinatura: "",
    dataOrdemInicio: "",
    vigencia: "",
    dataEncerramento: ""
  };

  handleSubmit = values => {
    console.log(values);
  };

  render() {
    const {
      termoContrato,
      numeroProcesso,
      numeroEdital,
      dataAssinatura,
      dataOrdemInicio
    } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div>
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <FormGroup>
              <Label form="termoContrato">Número Termo de Contrato</Label>
              <InputText
                id="termoContrato"
                value={termoContrato}
                onChange={e => this.setState({ termoContrato: e.target.value })}
                placeholder={"Ex: 001/002"}
                className="w-100"
              />
            </FormGroup>
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8}>
            <Label form="tipoServico">Tipo de Serviço</Label>
            <br />
            <SelecionaTipoServico id="tipoServico" className="w-100" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <FormGroup>
              <Label form="numeroProcesso">Número de Processo</Label>
              <InputText
                id="numeroProcesso"
                value={numeroProcesso}
                onChange={e =>
                  this.setState({ numeroProcesso: e.target.value })
                }
                placeholder={"Ex: 0000.2019/0000000-0"}
                className="w-100"
              />
            </FormGroup>
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8}>
            <Label form="situacao">Situação de Contrato</Label>
            <br />
            <FormGroup check inline>
              <Label check>
                <Input type="radio" name="situacao" value="ATIVO" /> Ativo
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="radio" name="situacao" value="ENCERRADO" />{" "}
                Encerrado
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="radio" name="situacao" value="RASCUNHO" /> Rascunho
              </Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <Label for="edital">Número do Edital</Label>
            <InputText
              id="edital"
              value={numeroEdital}
              onChange={e => this.setState({ numeroEdital: e.target.value })}
              placeholder={"Ex: 00000000"}
              className="w-100"
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8}>
            <Label form="estado">Estado de Contrato</Label>
            <br />
            <FormGroup check inline>
              <Label check>
                <Input type="radio" name="estado_contrato" value="VIGENTE" />{" "}
                VIGENTE
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="radio" name="estado_contrato" value="ULTIMO_ANO" />{" "}
                ÚLTIMO ANO
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="radio"
                  name="estado_contrato"
                  value="EXCEPCIONAL"
                />{" "}
                EXCEPCIONAL
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="radio"
                  name="estado_contrato"
                  value="EMERGENCIAL"
                />{" "}
                EMERGENCIAL
              </Label>
            </FormGroup>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <Label>Data Assinatura de Contrato</Label>
            <br />
            <Calendar
              value={dataAssinatura}
              onChange={e => this.setState({ dataAssinatura: e.value })}
              locale={CALENDAR_PT}
              dateFormat="dd/mm/yy"
              showIcon={true}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <Label>Data Ordem de Início</Label>
            <br />
            <Calendar
              value={dataOrdemInicio}
              onChange={e => this.setState({ dataOrdemInicio: e.value })}
              showIcon={true}
              locale={CALENDAR_PT}
              dateFormat="dd/mm/yy"
              showIcon={true}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <Label for="dataAssinatura">Contagem Vencimento</Label>
            <br />
            <Card className='text-center p-5'>
              <h2 className='font-weight-bold text-success'>xxx dias</h2>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}
