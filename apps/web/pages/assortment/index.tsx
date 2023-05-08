import React, { useEffect, useState } from 'react';
import { gql, request } from 'graphql-request';
import { useQuery } from 'react-query';

import { AssortmentCard } from '@components/AssortmentCard';
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

  const { data, isLoading, refetch } = useQuery<IAssortment[]>({
    queryKey: 'assortment',
    queryFn: async () => {
      if(!searchMedicine) {
        return new Promise((resolve) => resolve([]));
      }

      const query = gql`query getAssortment($medicine: MedicineFilterInput) {
        assortment(medicine: $medicine) {
          id, medicine { title }, pharmacy {address, organization {title}}, amount, price
        }
      }`;

      const data = await request<Data>(environment.url, query, {
        medicine: searchMedicine
      });

      return data.assortment;
    }
  });

  useEffect(() => {
    if(searchMedicine) {
      refetch();
    }
  }, [searchMedicine]);

  const handleMedicineSelection = (medicine: IMedicineMin) => {
    setSearchMedicine(medicine);
  };

  return (
    <Layout>
      <section className={styles.content}>
        <MedicineDatalist handleSelection={handleMedicineSelection}/>

        <section className={styles.cards}>
          {
            data?.map((assortment: IAssortment) => {
              return <div className={styles.card} key={assortment.id} >
                <AssortmentCard assortment={assortment} />
              </div>
            })
          }
        </section>
      </section>
    </Layout>
  );
}