import React, { useState, useEffect } from 'react';
import styles from '../styles/modal.module.css'
import { useRouter } from 'next/router';

const Modal = ({ isOpen, onClose, children, deputadoAleatorio }) => {
        const router = useRouter();
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
                <button className={styles.modalBtn} onClick={onclose}>
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
