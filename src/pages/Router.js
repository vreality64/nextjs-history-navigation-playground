import Router as NextRouter from "next/router";
import { Layout } from "../components/Layout/Layout";
import { useMock } from '../hooks/useMock';
import styles from './List.module.css'

export function Router() {
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
                NextRouter.push({
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
