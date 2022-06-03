import { useRouter } from "next/router";
import { Layout } from "../../components/Layout/Layout";

export function Item() {
  const router = useRouter();

  if (!router.isReady) {
    return <div>Loading...</div>
  }

  const slug = router.query.item;

  return (
    <Layout title={`item slug: ${slug}`}>
      <div>Slug: {slug}</div>
    </Layout>
  )
}