import React, { useCallback, useState } from 'react';
import { gql, request } from 'graphql-request';
import { useQuery } from 'react-query';

import { Layout } from '@components/Layout';
import { MedicineDatalist } from '@components/MedicineDatalist';
import { environment } from '@environments/environment';
import { IMedicineMin } from '@utils/interfaces';
import { IAssortment } from '@utils/interfaces';
import styles from './index.module.scss';

interface Data {
  assortment: IAssortment[]
}

export default function Assortment() {
  const [searchMedicine, setSearchMedicine] = useState<IMedicineMin>();

  const { data, isLoading, refetch } = useQuery({
    queryKey: 'assortment',
    queryFn: async () => {
      if(!searchMedicine) {
        return new Promise((resolve) => resolve([]));
      }

      const query = gql`query {
          assortment {
              id, medicine { title }, pharmacy {address, organization {title}}, amount, price
          }
      }`;

      const data = await request<Data>(environment.url, query);

      return data.assortment;
    }
  });

  const handleMedicineSelection = useCallback((medicine: IMedicineMin) => {
    setSearchMedicine(medicine);
    refetch();
  }, []);



  return (
    <Layout>
      <section className={styles.content}>
        <MedicineDatalist handleSelection={handleMedicineSelection}/>
      </section>
    </Layout>
  );
}