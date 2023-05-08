import React from 'react';
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useRouter } from 'next/router';
import styles from '../../styles/header.module.css';

const Politicos = ({ politicos, partido }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading... </div>;
  }

  let navbarClass = styles.header;

  // Verifica qual é o partido e define a classe correspondente
  if (partido === 'PT') {
    navbarClass += ` ${styles.PT}`;
  } else if (partido === 'PSDB') {
    navbarClass += ` ${styles.PSDB}`;
  } else if (partido === 'PSOL') {
    navbarClass += ` ${styles.PSOL}`;
  }

  return (
    <div>
      <Header navbarClass={navbarClass} />
      <h1>{partido}</h1>
      <ul>
        {politicos ? (
          politicos.map((politico) => (
            <li key={politico.id}>
              <Link href={`/politico/${politico.id}`} passHref>
                <a>{politico.nome}</a>
              </Link>
            </li>
          ))
        ) : (
          <p>Nenhum político encontrado.</p>
        )}
      </ul>
      <Footer />
    </div>
  );
};

export default Politicos;
