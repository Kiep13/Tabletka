import { request, gql } from 'graphql-request';
import { useQuery } from 'react-query';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';

import { environment } from '@environments/environment';
import { Layout } from '@components/Layout';
import { IMedicineMin } from '@utils/interfaces';
import styles from './index.module.scss';

export interface Data {
  medicines: IMedicineMin[]
}
export const getMedicines = async () => {
  const query = gql`query {medicines {id, title}}`
  const data = await request<Data>(environment.url, query)
  return data.medicines
}

export default function Home() {
  const { isLoading, data, error } = useQuery('medicines', getMedicines);

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
