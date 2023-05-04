import { ChangeEvent, useCallback, useState } from "react";

import { IDatalistOption, IMedicine, IMedicineMin } from '../../../utils/interfaces';
import { MOCK_MEDICINES } from './../../../mocks';
import styles from './datalist.module.scss';

export function Datalist() {
  const [options, setOptions] = useState<IDatalistOption[]>([]);

  const handleChange = useCallback((event: ChangeEvent) => {
    const typedValue = (event.target as HTMLTextAreaElement).value.toLowerCase();

    if(typedValue.length === 0) {
      setOptions([]);
      return;
    }

    const filteredMedicines: IMedicineMin[] = MOCK_MEDICINES.filter((medicine: IMedicine) => {
      return medicine.title.toLowerCase().includes(typedValue);
    });

    setOptions(filteredMedicines);
  }, []);

  const datalist = MOCK_MEDICINES.length && <section className={styles.options}>
      {
        options.map((medicine: IMedicine) => {
          return <div className={styles.option} key={medicine.id}>{medicine.title}</div>
        })
      }
    </section>

  return (
    <section className={styles.wrapper}>
      <section className={styles.datalist}>
        <input name="medicine" placeholder='Start type medicine here...' className={styles.input} onChange={handleChange}/>
        {datalist}
      </section>
    </section>
  );
}