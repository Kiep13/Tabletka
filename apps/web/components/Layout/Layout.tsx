import { Header } from './components';
import styles from './layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <div className={styles.content}>
      <Header/>
      { children }
    </div>
  )
}