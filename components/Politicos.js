import axios from 'axios';

const Politicos = ({ partido }) => {
  const [politicos, setPoliticos] = useState([]);

  useEffect(() => {
    axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados?siglaPartido=${partido}&ordem=ASC&ordenarPor=nome`)
      .then((response) => {
        setPoliticos(response.data.dados);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {/* Renderiza os políticos */}
    </div>
  );
};

export default Politicos;
