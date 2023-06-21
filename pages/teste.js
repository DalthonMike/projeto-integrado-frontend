import axios from 'axios';
import {useEffect, useState} from "react";
import {Button, Card, Container, ProgressBar} from "react-bootstrap";
import styles from "../styles/teste.module.css"

const Teste = () => {
    const [politicos, setPoliticos] = useState([]);
    const [deputadoAleatorio, setDeputadoAleatorio] = useState({});
    const [indiceAleatorio, setIndiceAleatorio] = useState(null);
    const [opcoesDeputado, setOpcoesDeputado] = useState([]);
    const [progresso, setProgresso] = useState(0);
    const [botaoNome, setBotaoNome] = useState(false);
    const [botaoPartido, setBotaoPartido] = useState(false);
    const [botaoEstado, setBotaoEstado] = useState(false);
    const [meuObjeto, setMeuObjeto] = useState({
        nome: false,
        partido: false,
        estado: false
    });

    const verificaSeAcertouNome = (item) => {
        if (item.nome === deputadoAleatorio.nome) {
            setMeuObjeto(prevState => ({
                ...prevState,
                nome: true
            }));
            setProgresso(progresso + 33);
            setBotaoNome(true);
        } else {
            setMeuObjeto(prevState => ({
                ...prevState,
                nome: false
            }));
            setProgresso(progresso + 33);
            setBotaoNome(true);
        }
    };

    const verificaSeAcertouPartido = (item) => {
        if (item.siglaPartido === deputadoAleatorio.siglaPartido) {
            setMeuObjeto(prevState => ({
                ...prevState,
                partido: true
            }));
            setProgresso(progresso + 33);
            setBotaoPartido(true);
        } else {
            setMeuObjeto(prevState => ({
                ...prevState,
                partido: false
            }));
            setProgresso(progresso + 33);
            setBotaoPartido(true);
        }
    };

    const verificaSeAcertouEstado = (item) => {
        console.log(meuObjeto);
        if (item.siglaUf === deputadoAleatorio.siglaUf) {
            setProgresso(progresso + 33 + 1);
            setBotaoEstado(true);
            setMeuObjeto(prevState => ({
                ...prevState,
                estado: true
            }));
        } else {
            setProgresso(progresso + 33 + 1);
            setBotaoEstado(true);
            setMeuObjeto(prevState => ({
                ...prevState,
                estado: false
            }));
        }
    };

    useEffect(() => {
        axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados`)
            .then((response) => {
                setPoliticos(response.data.dados);
                setIndiceAleatorio(Math.floor(Math.random() * response.data.dados.length));
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        let teste = [];
        if (indiceAleatorio !== null && politicos.length > 0) {
            setDeputadoAleatorio(politicos[indiceAleatorio]);
            for (let i = 0; i < 6; i++) {
                if (!teste.length) {
                    teste.push(politicos[indiceAleatorio])
                } else {
                    teste.push(politicos[i])
                }
            }
            setOpcoesDeputado(embaralhaPartidos(teste));
        }
    }, [indiceAleatorio, politicos]);

    return (
        <Container style={{alignItems: 'center'}}>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={deputadoAleatorio.urlFoto}/>
            </Card>
            <h5 className={styles.typingAnimation}>Qual o nome do deputado? resposta: {deputadoAleatorio.nome}</h5>
            {opcoesDeputado.map((item, i) => (
                <Button style={{marginRight: '10px', minWidth: '150px'}} disabled={botaoNome} variant="primary"
                        onClick={() => verificaSeAcertouNome(item)} key={i}>{item.nome}</Button>
            ))}
            <br/>
            <br/>
            <h5 className={styles.typingAnimation}>Qual o partido do deputado?
                resposta: {deputadoAleatorio.siglaPartido}</h5>
            {opcoesDeputado.map((item, i) => (
                <Button style={{marginRight: '10px', minWidth: '150px'}} disabled={botaoPartido} variant="primary"
                        onClick={() => verificaSeAcertouPartido(item)}
                        key={i}>{item.siglaPartido}</Button>
            ))}
            <br/>
            <br/>
            <h5 className={styles.typingAnimation}>Qual o estado do deputado? resposta: {deputadoAleatorio.siglaUf}</h5>
            {opcoesDeputado.map((item, i) => (
                <Button style={{marginRight: '10px', minWidth: '150px'}} disabled={botaoEstado} variant="primary"
                        onClick={() => verificaSeAcertouEstado(item)} key={i}>{item.siglaUf}</Button>
            ))}
            <ProgressBar variant='success' now={progresso} label={`${progresso}%`} animated now={progresso}/>
            <Button variant='danger'>Verificar</Button>
        </Container>
    );
};

export default Teste;

function embaralhaPartidos(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
}

function verificaAcertos(arr) {

}
