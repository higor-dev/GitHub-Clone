import React from 'react'
import Link from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import { GetServerSideProps } from 'next';
import { AppProps } from 'next/app';

const User: React.FC<AppProps> = (props: AppProps) => {
  const router: NextRouter = useRouter();
  const { user } = router.query;
  return (
    <div>
      <Link href="/higor-dev">
        <a>go to {user}</a>
      </Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      token: process.env.TOKEN
    }
  }
}

export default User


