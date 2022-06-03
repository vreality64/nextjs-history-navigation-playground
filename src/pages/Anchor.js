import { Layout } from "../components/Layout/Layout";
import { useMock } from '../hooks/useMock';
import styles from './List.module.css'

export function Anchor() {
  const mock = useMock({ size: 10 });

  return (
    <Layout title="Anchor Navigation">
      <h1>Anchor Navigation</h1>

      <div className={styles.list}>
        {mock.map((value, idx) => {
          return (
            <a key={`${value}-${idx}`} href={`/products/${value}`}>
              {value}
            </a>
          )
        })}
      </div>
    </Layout>
  )
}
