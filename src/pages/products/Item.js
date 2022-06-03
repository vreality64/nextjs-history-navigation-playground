import { useRouter } from "next/router";
import { Layout } from "../../components/Layout/Layout";

export function Item() {
  const router = useRouter();
  const slug = router.query.item;

  if (!router.isReady) {
    return null;
  }

  return (
    <Layout title={`item slug: ${slug}`}>
      <div>Slug: {slug}</div>
    </Layout>
  )
}