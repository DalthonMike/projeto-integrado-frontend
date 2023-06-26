import React from 'react';
import styles from '../styles/modal.module.css'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {children}
        <button className={styles.modalClose} onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;