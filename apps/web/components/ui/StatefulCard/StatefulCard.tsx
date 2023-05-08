import { Spinner } from '../Spinner';
import { IProps } from './props.interface';
import styles from './stateful-card.module.scss';

export function StatefulCard({ isLoading, isError, isNoContent, children }: IProps) {
  if(isLoading) {
    return <section className={styles.loading}>
      <Spinner/>
      Loading...
    </section>
  }

  if(isError) {
    return <section className={styles.loading}>
      Error due attempt to load data
    </section>
  }

  if(isNoContent) {
    return <section className={styles.noContent}>
      No data to display
    </section>
  }

  return <>{children}</>;
}