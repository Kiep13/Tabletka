import { ChangeEvent, useCallback, useState } from 'react';

import { IDatalistOption, IMedicine, IMedicineMin } from '@utils/interfaces';
import { MOCK_MEDICINES } from '@mocks/medicines.mock';
import styles from './datalist.module.scss';

export function Datalist() {
  const [value, setValue] = useState<string>('');
  const [options, setOptions] = useState<IDatalistOption[]>([]);

  const handleChange = useCallback((event: ChangeEvent) => {
    const typedValue = (event.target as HTMLTextAreaElement).value.toLowerCase();
    setValue(typedValue);

    if(typedValue.length === 0) {
      setOptions([]);
      return;
    }

    const filteredMedicines: IMedicineMin[] = MOCK_MEDICINES.filter((medicine: IMedicine) => {
      return medicine.title.toLowerCase().includes(typedValue);
    });

    setOptions(filteredMedicines);
  }, []);

  const handleOptionSelection = useCallback((option: IDatalistOption) => {
    setValue(option.title);
    setOptions([]);
  }, []);

  const datalist = MOCK_MEDICINES.length && <section className={styles.options}>
      {
        options.map((medicine: IMedicine) => {
          return <div className={styles.option}
                      key={medicine.id}
                      onClick={() => handleOptionSelection(medicine)}>
            {medicine.title}
          </div>
        })
      }
    </section>

  return (
    <section className={styles.wrapper}>
      <section className={styles.datalist}>
        <input name="medicine"
               placeholder='Start type medicine here...'
               className={styles.input}
               value={value}
               onChange={handleChange}/>
        {datalist}
      </section>
    </section>
  );
}