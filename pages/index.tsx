import Head from 'next/head'
import React from 'react';
import Router, { SingletonRouter } from 'next/router'

export default function Home() {


React.useEffect((): void => {
   const {pathname}: SingletonRouter = Router
   if(pathname == '/' ){
       Router.push('/higor-dev')
   }
 });

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
