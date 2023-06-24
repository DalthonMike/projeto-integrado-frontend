import styles from "../styles/pagina.module.css"

const Pagina = ({ backgorundColor }) => {
    const paginaStyle = {
        background: backgorundColor
    };

    return (
        <>
            <section className={styles.backgroundPage} style={{ height: '100vh' }}>
            </section>
        </>
    );
};

export default Pagina;