import React from 'react';
import styles from '../styles/modal.module.css'

const Modal = ({ isOpen, onClose, children }) => {

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
                <button className={styles.modalBtn} onClick={onClose}>
                    <a title='Detalhes do Deputado'>Detalhes</a>
                </button>
                <button className={styles.modalBtn} onClick={buttonReloadPage}>
                    <a title='Refazer Teste'>Refazer</a>
                </button>
            </div>
        </div>
    );
};

export default Modal;