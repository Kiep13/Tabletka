import React from 'react';

import { Layout } from '@components/Layout';
import { MedicineDatalist } from '@components/MedicineDatalist';
import styles from "./index.module.scss";

export default function Assortment() {
  return (
    <Layout>
      <section className={styles.content}>
        <MedicineDatalist />
      </section>
    </Layout>
  );
}