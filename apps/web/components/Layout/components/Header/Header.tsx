import styles from './header.module.scss';

export const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.logo}>
        <h1>Tabletka</h1>
      </div>

      <div className={styles.links}>
        <span className={styles.link}>Search</span>
        <span className={styles.link}>Pharmacies</span>
      </div>

      <div className={styles.buttons}>
        <span className={'button button__outline'}>Sign up</span>
        <span className={'button'}>Sign in</span>
      </div>
    </section>
  )
}