import styles from '../styles/globals.scss';

import { Header } from '../components/Header/index.tsx';

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Header />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
