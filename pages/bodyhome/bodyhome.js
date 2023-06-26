import React from 'react'
import styles from '../../styles/header.module.css';
import Header from "../../components/header";
import Footer from "../../components/footer";
import {Button, Col, Container, Row} from "react-bootstrap";

const Bodyhome = () => {
    return (
        <section className={styles.backgroundPage} style={{height: '80vh'}}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.quizcontainer}>
                            <h1>Sobre o Quiz</h1>
                            <p>
                                Um Quiz de Deputados é um jogo interativo que testa seu conhecimento sobre os
                                parlamentares brasileiros. Nesse tipo de quiz, você é apresentado a uma pergunta
                                relacionada a um deputado específico e precisa selecionar a resposta correta entre
                                várias opções de acerto. Geralmente, as opções incluem o estado de origem do deputado,
                                seu partido político e seu nome.
                            </p>
                            <p>
                                Ao jogar o Quiz de Deputados, você tem a oportunidade de aprender mais sobre os
                                representantes eleitos, suas trajetórias políticas e seus respectivos estados e
                                partidos. Esse tipo de jogo oferece uma maneira divertida e educativa de se familiarizar
                                com a política brasileira e de testar seus conhecimentos sobre os legisladores do país.
                            </p>
                            <p>
                                Cada pergunta do quiz apresenta informações sobre um deputado, como seu nome, partido e
                                estado de origem. Com base nessas informações, você precisa selecionar a resposta
                                correta. Por exemplo, a pergunta pode ser: "Qual é o partido político do deputado João
                                da Silva?", e as opções podem ser "A) PT, B) PSDB, C) MDB, D) DEM". A resposta correta
                                seria a opção A) PT, se esse fosse o partido do deputado João da Silva.
                            </p>
                            <p>
                                O Quiz de Deputados pode abranger diversos aspectos, como história política, eventos
                                atuais, cargos ocupados pelos deputados, entre outros. Ele oferece uma oportunidade de
                                se manter atualizado sobre os representantes eleitos e seus respectivos estados e
                                partidos, além de estimular o interesse pela política e pelo funcionamento do sistema
                                legislativo brasileiro.
                            </p>
                            <p>
                                Esses quizzes podem ser desenvolvidos em plataformas online, utilizando tecnologias como
                                React, HTML, CSS e JavaScript, para criar uma experiência interativa e envolvente.
                                Através do uso de recursos visuais e interações, os quizzes de deputados tornam-se uma
                                forma divertida de aprender sobre a política brasileira e testar seus conhecimentos.
                            </p>
                            <Button variant="primary" href="/quiz">Teste seu conhecimento</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Bodyhome
