import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h4>Trabalho de PI</h4>
      <ul>
        <li>nome:</li>
        <li>Marcos Vinicius De Sousa Silva</li>
        <li>Matricula: 20214290006</li>
      </ul>
      <ul>
        <li>nome:</li>
        <li>Dalthon Mike</li>
        <li>Matricula: 000000000</li>
      </ul>
      <ul>
        <li>nome:</li>
        <li>Caio Lima</li>
        <li>Matricula: 0000000000</li>
      </ul>
      <ul>
        <li>nome:</li>
        <li>Patrick Marins</li>
        <li>Matricula: 0000000000</li>
      </ul>
    </footer>
  );
}
