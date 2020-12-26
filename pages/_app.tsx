import { AppProps } from 'next/app';
import  GlobalStyle  from '../styles/globals'
import Header from '../components/Header';
import { ApolloProvider } from '@apollo/client';
import {client } from './api/apolloClient/index'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <>
    <ApolloProvider client={client}>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
    </ApolloProvider>
  </>
}

export default MyApp
