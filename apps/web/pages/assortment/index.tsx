import { Datalist } from '@components/ui/Datalist';
import { Layout } from '@components/Layout';
import styles from './index.module.scss';

export default function Assortment() {
  return (
    <Layout>
      <section className={styles.content}>
        <Datalist/>
      </section>
    </Layout>
  )
}