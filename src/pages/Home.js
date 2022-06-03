import { Layout } from '../components/Layout/Layout';
import styles from './Home.module.css'
import { Mode, useRouterMode } from '../components/RouterModeContext/RouterModeContext'

export function Home() {
  const { changeMode } = useRouterMode();

  return (
    <Layout title="Next Playground">
      <h1 className={styles.title}>
        Next
      </h1>

      <p className={styles.description}>
        Router Navigation Playground
      </p>

      <div className={styles.grid}>
        <a
          href="/anchor"
          className={styles.card}
          onClick={() => {
            changeMode(Mode.Native)
          }}
        >
          <h2>Native Anchor &rarr;</h2>
          <p>브라우저 anchor 를 사용해서 히스토리 제어</p>
        </a>

        <a
          href="/router"
          className={styles.card}
          onClick={() => {
            changeMode(Mode.Router)
          }}
        >
          <h2>Next Router &rarr;</h2>
          <p>Next router (pushState) 를 사용해서 히스토리 제어</p>
        </a>
      </div>
    </Layout>
  )
}
