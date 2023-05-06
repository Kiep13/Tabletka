import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';

import { Layout } from '@components/Layout';
import styles from './index.module.scss';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tabletka</title>
      </Head>
      <section className={styles.content}>
        <section className={styles.info}>
          <section className={styles.title}>
            <span>Easy way</span><br/>
            <span>To find your pharmacy</span>
          </section>
          <section className={styles.buttons}>
            <span className={'button button__outline'}><Link href='/assortment'>Search medicine</Link></span>
            <span className={'button'}>Show pharmacies</span>
          </section>
        </section>
        <section className={styles.image}>
          <Image
            priority
            src='/images/medicine.png'
            height={500}
            width={500}
            alt=""
          />
        </section>
      </section>
    </Layout>
  );
}
