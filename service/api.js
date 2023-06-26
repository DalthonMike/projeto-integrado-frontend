import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
});

api.get('/deputados')
  .then(response => {
    console.log(response.data); // Aqui estão os dados recebidos
  })
  .catch(error => {
    if (error.response) {
      // O pedido foi feito e o servidor respondeu com um status fora do intervalo 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // O pedido foi feito, mas não houve resposta
      console.log(error.request);
    } else {
      // Algo aconteceu na configuração do pedido que disparou um erro
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
