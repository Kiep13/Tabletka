import { request, gql } from 'graphql-request';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { environment } from '@environments/environment';
import { IDatalistOption, IMedicineMin } from '@utils/interfaces';
import { Datalist } from '@components/ui/Datalist';
import { IProps } from './props.interface';

interface Data {
  medicines: IMedicineMin[];
}

export function MedicineDatalist({ handleSelection }: IProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [medicines, setMedicines] = useState<IMedicineMin[]>([]);

  const { isLoading, refetch } = useQuery({
    queryKey: 'medicines',
    queryFn: async () => {
      if(!searchTerm) {
        return new Promise((resolve) => resolve([]));
      }

      const query = gql`query GetMedicines($search: String) {
          medicines(search: $search) {
              id, title
          }
      }`;

      const data = await request<Data>(environment.url, query, {
        search: searchTerm
      });

      setMedicines(data.medicines);

      return data.medicines;
    }
  });

  const handleDatalistTyping = (value: string): void => {
    setSearchTerm(value);
    refetch();
  };

  const handleDatalistSelection = (value: IDatalistOption): void => {
    handleSelection(value);
    setMedicines([]);
  };

  return (
    <Datalist options={searchTerm ? medicines : []}
              isLoading={isLoading}
              handleTyping={handleDatalistTyping}
              handleSelection={handleDatalistSelection} />
  );
}