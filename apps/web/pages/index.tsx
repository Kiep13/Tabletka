import Head from 'next/head';
import React from 'react';

import { Layout } from '../components/Layout';
import styles from './index.module.scss';

export default function Web() {
  return (
    <Layout>
      <Head>
        <title>Tabletka</title>
      </Head>
      <section className={styles.content}>
        <section className={styles.title}>
          <span>Easy way</span><br/>
          <span>To find your pharmacy</span>
        </section>
        <section className={styles.buttons}>
          <span className={'button button__outline'}>Search medicine</span>
          <span className={'button'}>Show pharmacies</span>
        </section>
      </section>
    </Layout>
  );
}
