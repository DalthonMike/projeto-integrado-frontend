import axios from 'axios';
import {useEffect, useState} from "react";
import {Button, Card, Container, ProgressBar} from "react-bootstrap";
import styles from "../styles/teste.module.css"
import Footer from '../components/footer';
import Header from '../components/header';
import Modal from '../components/Modal'

const Quiz = () => {
    const [contadorAcertos, setContadorAcertos] = useState(0);
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
    const [buttonVariantNome, setButtonVariantNome] = useState('primary');
    const [buttonVariantPartido, setButtonVariantPartido] = useState('primary');
    const [buttonVariantEstado, setButtonVariantEstado] = useState('primary');
    const [modalOpen, setModalOpen] = useState(false);

    const [respostas, setRespostas] = useState({
        nome: '',
        partido: '',
        estado: ''
    });

    const verificaSeAcertouNome = (item) => {
        if (item.nome === deputadoAleatorio.nome) {
            setMeuObjeto(prevState => ({
                ...prevState,
                nome: true
            }));
            setProgresso(progresso + 33);
            setBotaoNome(true);
            setRespostas(prevState => ({
                ...prevState,
                nome: deputadoAleatorio.nome
            }));
            setContadorAcertos(contadorAcertos + 1);
        } else {
            setMeuObjeto(prevState => ({
                ...prevState,
                nome: false
            }));
            setProgresso(progresso + 33);
            setBotaoNome(true);
            setRespostas(prevState => ({
                ...prevState,
                nome: deputadoAleatorio.nome
            }));
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
            setRespostas(prevState => ({
                ...prevState,
                partido: deputadoAleatorio.siglaPartido
            }));
            setContadorAcertos(contadorAcertos + 1)
        } else {
            setMeuObjeto(prevState => ({
                ...prevState,
                partido: false
            }));
            setProgresso(progresso + 33);
            setBotaoPartido(true);
            setRespostas(prevState => ({
                ...prevState,
                partido: deputadoAleatorio.siglaPartido
            }));
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
            setRespostas(prevState => ({
                ...prevState,
                estado: deputadoAleatorio.siglaUf
            }));
            setContadorAcertos(contadorAcertos + 1)
        } else {
            setProgresso(progresso + 33 + 1);
            setBotaoEstado(true);
            setMeuObjeto(prevState => ({
                ...prevState,
                estado: false
            }));
            setRespostas(prevState => ({
                ...prevState,
                estado: deputadoAleatorio.siglaUf
            }));
        }
    };

    const handleClickNome = (item) => {
        if (item.nome === deputadoAleatorio.nome) {
            console.log('Item:', item.nome);
            verificaSeAcertouNome(item);
            setButtonVariantNome('success');
        } else {
            console.log('Item:', item.nome);
            verificaSeAcertouNome(item);
            setButtonVariantNome('danger');
        }
    };

    const handleClickPartido = (item) => {
        if (item.siglaPartido === deputadoAleatorio.siglaPartido) {
            console.log('Item:', item.siglaPartido);
            verificaSeAcertouPartido(item);
            setButtonVariantPartido('success');
        } else {
            console.log('Item:', item.siglaPartido);
            verificaSeAcertouPartido(item);
            setButtonVariantPartido('danger');
        }
    };

    const handleClickEstado = (item) => {
        if (item.siglaUf === deputadoAleatorio.siglaUf) {
            console.log('Item:', item.siglaUf);
            verificaSeAcertouEstado(item);
            setButtonVariantEstado('success');
        } else {
            console.log('Item:', item.siglaUf);
            verificaSeAcertouEstado(item);
            setButtonVariantEstado('danger');
        }
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        axios.get(`https://dadosabertos.camara.leg.br/api/v2/deputados`)
            .then((response) => {
                setPoliticos(response.data.dados);
                setIndiceAleatorio(Math.floor(Math.random() * response.data.dados.length));
            })
            .catch((error) => {
                alert(error.stack);
                console.error(error);
            });
    }, []);

    useEffect(() => {
        let politicosAleatorios = [];
        if (indiceAleatorio !== null && politicos.length > 0) {
            setDeputadoAleatorio(politicos[indiceAleatorio]);
            for (let i = 0; i < 6; i++) {
                !politicosAleatorios.length ? politicosAleatorios.push(politicos[indiceAleatorio]) : politicosAleatorios.push(politicos[Math.floor(Math.random() * politicos.length)])
            }
        }
        setOpcoesDeputado(embaralhaPartidos(politicosAleatorios));
    }, [indiceAleatorio, politicos]);

    return (
        <>
            <Header/>
            <section className={styles.backgroundPage} style={{height: '80vh'}}>
                <ProgressBar variant='success' now={progresso} label={`${progresso}%`} animated now={progresso}/>
                <Container className={styles.centeringContainer}>
                    <div className={styles.cardImageContainer}>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={deputadoAleatorio.urlFoto}
                                      style={{alignItems: 'center', justifyContent: 'center',}}/>
                        </Card>
                    </div>
                    <h5 className={styles.typingAnimation}>Qual o nome do deputado? resposta: {respostas.nome}</h5>
                    {opcoesDeputado.map((item, i) => (
                        <Button style={{marginRight: '10px', minWidth: '150px'}} disabled={botaoNome}
                                variant={buttonVariantNome}
                                onClick={() => handleClickNome(item)} key={i}>{item.nome}</Button>
                    ))}
                    <br/>
                    <br/>
                    <h5 className={styles.typingAnimation}>Qual o partido do deputado?
                        resposta: {respostas.partido}</h5>
                    {opcoesDeputado.map((item, i) => (
                        <Button style={{marginRight: '10px', minWidth: '150px'}} disabled={botaoPartido}
                                variant={buttonVariantPartido}
                                onClick={() => handleClickPartido(item)}
                                key={i}>{item.siglaPartido}</Button>
                    ))}
                    <br/>
                    <br/>
                    <h5 className={styles.typingAnimation}>Qual a UF do estado de nascimento do deputado?
                        resposta: {respostas.estado}</h5>
                    {opcoesDeputado.map((item, i) => (
                        <Button style={{marginRight: '10px', minWidth: '150px'}} disabled={botaoEstado}
                                variant={buttonVariantEstado}
                                onClick={() => handleClickEstado(item)} key={i}>{item.siglaUf}</Button>
                    ))}
                    <br/>
                    <Button variant='danger' style={{marginTop: '10px'}} disabled={progresso < 100}
                            onClick={openModal}>Verificar</Button>
                </Container>
                <Modal isOpen={modalOpen} onClose={closeModal} deputado={deputadoAleatorio}>
                    <br/>
                    <p>Parabéns, você acertou {contadorAcertos} de 3 questões!</p>
                    <p>O que você deseja?</p>
                </Modal>
            </section>
            <Footer/>
        </>
    );
};

export default Quiz;

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
