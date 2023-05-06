import { ChangeEvent, useCallback, useState } from 'react';

import { IDatalistOption, IMedicine } from '@utils/interfaces';
import { MOCK_MEDICINES } from '@mocks/medicines.mock';
import { IProps } from './props.interface';
import styles from './datalist.module.scss';

export function Datalist({ options, handleTyping }: IProps) {
  const [value, setValue] = useState<string>('');

  const handleChange = useCallback((event: ChangeEvent) => {
    const typedValue = (event.target as HTMLTextAreaElement).value.toLowerCase();
    setValue(typedValue);

    handleTyping(typedValue);
  }, []);

  const handleOptionSelection = useCallback((option: IDatalistOption) => {
    setValue(option.title);
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
        <input name='medicine'
               placeholder='Start type medicine here...'
               className={styles.input}
               value={value}
               onChange={handleChange}/>
        {datalist}
      </section>
    </section>
  );
}