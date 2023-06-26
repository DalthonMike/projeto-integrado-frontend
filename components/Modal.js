import React from 'react';
import styles from '../styles/modal.module.css'
import { Card } from "react-bootstrap";

const Modal = ({ isOpen, onClose, children, deputado }) => {

    if (!isOpen) return null;

    const buttonReloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.modalClose} onClick={onClose}>
                    <a title='Fechar'>x</a>
                </button>
                {children}
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={deputado.urlFoto} />
                    <Card.Body>
                        <Card.Title>{deputado.nome}</Card.Title>
                        <Card.Text>
                            Partido: {deputado.siglaPartido} <br />
                            Estado: {deputado.siglaUf}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <button className={styles.modalBtn} onClick={onClose}>
                    <a title='Detalhes do Deputado'>Detalhes</a>
                </button>
                <button className={styles.modalBtn} onClick={buttonReloadPage}>
                    <a title='Refazer Quiz'>Refazer</a>
                </button>
            </div>
        </div>
    );
};

export default Modal;
