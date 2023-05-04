import Link from 'next/link';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.logo}>
        <h1><Link href='/'>Tabletka</Link></h1>
      </div>

      <div className={styles.links}>
        <span className={styles.link}><Link href='/assortment'>Search</Link></span>
        <span className={styles.link}>Pharmacies</span>
      </div>

      <div className={styles.buttons}>
        <span className={'button button__outline'}>Sign up</span>
        <span className={'button'}>Sign in</span>
      </div>
    </section>
  )
}