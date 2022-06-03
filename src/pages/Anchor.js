import { Layout } from "../components/Layout/Layout";
import { useMock } from '../hooks/useMock';

export function Anchor() {
  const mock = useMock({ size: 10 });

  return (
    <Layout title="Anchor Navigation">
      <h1>Anchor Navigation</h1>

      {mock.map((value, idx) => {
        return (
          <a key={`${value}-${idx}`} href={`/products/${value}`}>
            {value}
          </a>
        )
      })}
    </Layout>
  )
}
