import { IProps } from './props.interface';
import styles from './assortment-card.module.scss';

export function AssortmentCard({ assortment }: IProps) {
  return (
    <section className={styles.card}>
      <div>
        <h3 className={styles.organizationName}>{assortment.pharmacy.organization.title}</h3>
        <span>{assortment.pharmacy.address}</span>
      </div>

      <section className={styles.divider}/>

      <div>
        <span>{assortment.medicine.title} ({assortment.amount} items available)</span>
      </div>

      <div className={styles.priceSection}>
        <span className={`button button__outline ${styles.button}`}>{assortment.price}€</span>
      </div>
    </section>
  )
}