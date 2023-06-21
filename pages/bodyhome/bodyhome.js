import React from 'react'
import styles from '../../styles/header.module.css';
const Bodyhome = () => {
  return (
<main>
        <section className={styles.partidos}>
          <h2 className={styles.title}>Partidos Políticos</h2>
          <div className="container">
            <div className="row my-3">
              <div className="col-md-4">
                
                <a href="/politicos[partido]">
                  <img src="/images/Bandeira_partido_dos_trabalhadores.svg" alt="Bandeira do Partido dos Trabalhadores" className="img-fluid"/>
                </a>
              </div>
              <div className="col-md-4">
                <a href="/politicos/PSDB">
                  <img src="/images/logo-PSDB.jpeg" alt="PSDB" className="img-fluid"/>
                </a>
              </div>
              <div className="col-md-4">
                <a href="/politicos/PSOL">
                  <img src="/images/Bandeira_PSOL.jpg" alt="PSOL" className="img-fluid"/>
                </a>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-4">
                <a href="/politicos/MDB">
                  <img src="/images/mdb-logo-partido-3.png" alt="mdb" className="img-fluid"/>
                </a>
              </div>
              <div className="col-md-4">
                <a href="/politicos/PSL">
                  <img src="/images/Partido_Social_Liberal_logo.svg.png" alt="psol" className="img-fluid"/>
                </a>
              </div>
              <div className="col-md-4">
                <a href="/politicos/PSB">
                  <img src="/images/PSB b.jpg" alt="jpg" className="img-fluid"/>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}

export default Bodyhome
