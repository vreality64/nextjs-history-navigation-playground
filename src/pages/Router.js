import { useRouter } from "next/router";
import { Layout } from "../components/Layout/Layout";
import { useMock } from '../hooks/useMock';
import styles from './List.module.css'

export function Router() {
  const router = useRouter();
  const mock = useMock({ size: 10 });

  return (
    <Layout title="Router Navigation">
      <h1>Router Navigation</h1>

      <div className={styles.list}>
        {mock.map((value, idx) => {
          return (
            <div
              key={`${value}-${idx}`}
              onClick={() => {
                router.push({
                  pathname: `/products/${value}`
                })
              }}
            >
              {value}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}