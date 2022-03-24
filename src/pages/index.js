import Head from 'next/head'
import styles from '../styles/Home.module.scss';
import { useState } from 'react';

import { Cover } from '../components/Cover/index.tsx';
import { Modal } from '../components/Modal/index.tsx';

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Thiago Mataruco - Gestão de tráfego</title>
        <meta name="description" content="Landing Page para Thiago Mataruco" />
      </Head>

      <main className={styles.main}>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <Cover />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
