import { useRouter } from 'next/router'
import '../styles/globals.css'
import { RouterModeProvider, Mode } from '../src/components/RouterModeContext/RouterModeContext'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const routerMode = router.query.mode === 'router' ? Mode.Router : Mode.Native;

  return (
    <RouterModeProvider initialMode={routerMode}>
      <Component {...pageProps} />
    </RouterModeProvider>
  )
}

export default MyApp
