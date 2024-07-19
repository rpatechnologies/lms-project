import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import '../style/global.css'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
          <Component/>
    </main>
  )
}
