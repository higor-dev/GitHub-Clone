import { AppProps } from 'next/app';
import  GlobalStyle  from '../styles/globals'
import Header from '../components/Header';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <>
    <Header />
    <Component {...pageProps} />
    <GlobalStyle />
  </>
}

export default MyApp
