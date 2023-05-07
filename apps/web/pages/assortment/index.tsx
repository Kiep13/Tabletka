import { request, gql } from 'graphql-request';
import { useQuery } from 'react-query';
import React, { useState } from 'react';

import { environment } from '@environments/environment';
import { IDatalistOption, IMedicineMin } from '@utils/interfaces';
import { Datalist } from '@components/ui/Datalist';
import { Layout } from '@components/Layout';
import styles from './index.module.scss';

export interface Data {
  medicines: IMedicineMin[]
}

export default function Assortment() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [medicines, setMedicines] = useState<IMedicineMin[]>([]);

  const { isLoading, refetch  } = useQuery({
    queryKey: 'medicines',
    queryFn: async () => {
      const query = gql`query GetMedicines($search: String) {
          medicines(search: $search) {
              id, title
          }
      }`

      const data = await request<Data>(environment.url, query, {
        search: searchTerm
      });

      setMedicines(data.medicines);

      return data.medicines
    }
  });

  const handleDatalistTyping = (value: string): void => {
    setSearchTerm(value);
    refetch();
  };

  const handleSelection = (value: IDatalistOption): void => {
    setMedicines([]);

    console.log(value);
  };

  return (
    <Layout>
      <section className={styles.content}>
        <Datalist options={searchTerm ? medicines : []}
                  isLoading={isLoading}
                  handleTyping={handleDatalistTyping}
                  handleSelection={handleSelection}/>
      </section>
    </Layout>
  )
}