import styles from './page.module.scss';
import Popular from '@/components/popular/Popular';

export default function Home() {
  return (
    <div className={styles.main}>
      <Popular />
    </div>
  )
}
