import { Button, Card, Col, Row } from "react-bootstrap";
import Pagina from "../../components/Pagina";
import api from "../../service/api";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import axios from 'axios';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DetalhesDeputado = ({ deputado, despesas, ocupacoes, dadosGrafico }) => {
  const opcoesGrafico = {
    chart: {
      type: 'polarArea',
    },
    stroke: {
      colors: ['#fff'],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    title: {
      text: 'Despesas',
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: undefined,
        color: '#263238',
      },
    },
  };

  return (
    <Pagina>
      <Row className="mb-3">
        <Col md={3}>
          <Card className='mb-3'>
            <Card.Img height="400" width="300" variant='top' src={deputado.ultimoStatus.urlFoto} />
            <Card.Body>
              <Card.Title className='text-center'>{deputado.nomeCivil}</Card.Title>
              <p>Partido: {deputado.ultimoStatus.siglaPartido}</p>
              <p>UF Partido: {deputado.ultimoStatus.siglaUf}</p>
            </Card.Body>
          </Card>
          <Button href={'/deputados/deputados'} variant="danger">Voltar</Button>
        </Col>
        <Col md={6}>
          <h2>Despesas</h2>
          <div style={{ width: '100%', height: '100%', marginTop: 50 }} className="d-flex flex-column justify-content-center align-items-center">
            <Chart style={{ width: '100%', height: '100%' }} options={opcoesGrafico} series={dadosGrafico.map(item => item.valorLiquido)} type="polarArea" />
          </div>
          <p>Descrição do gráfico: Este gráfico representa as despesas do deputado.</p>
        </Col>
        <Col md={3}>
          <h2>Profissões</h2>
          <ul>
            {ocupacoes.map(item => (
              <li key={item.id}>{item.titulo}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Pagina>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.id;

  const resultado = await api.get(`/deputados/${id}`);
  const deputado = resultado.data.dados;

  const resDespesas = await api.get(`/deputados/${id}/despesas`);
  const despesas = resDespesas.data.dados;

  const resOcupacoes = await api.get(`/deputados/${id}/ocupacoes`);
  const ocupacoes = resOcupacoes.data.dados;

  const resultadoGrafico = await api.get(`/deputados/${id}/despesas`);
  const dadosGrafico = resultadoGrafico.data.dados;

  return {
    props: { deputado, despesas, ocupacoes, dadosGrafico },
  };
}

export default DetalhesDeputado;
