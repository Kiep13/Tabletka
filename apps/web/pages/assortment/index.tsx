import { request, gql } from 'graphql-request';
import { useQuery } from 'react-query';
import React from 'react';

import { environment } from '@environments/environment';
import { IMedicineMin } from '@utils/interfaces';
import { Datalist } from '@components/ui/Datalist';
import { Layout } from '@components/Layout';
import styles from './index.module.scss';

export interface Data {
  medicines: IMedicineMin[]
}
export const getMedicines = async () => {
  const query = gql`query {medicines {id, title}}`
  const data = await request<Data>(environment.url, query)
  return data.medicines
}

export default function Assortment() {
  const { isLoading, data, error } = useQuery('medicines', getMedicines);

  console.log(isLoading, data, error);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading users</div>;
  }

  return (
    <Layout>
      <section className={styles.content}>
        <Datalist/>
      </section>
    </Layout>
  )
}