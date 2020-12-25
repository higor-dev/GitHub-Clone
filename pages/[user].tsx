import React from 'react'
import { useRouter } from 'next/router'

const User = (props) => {
  console.log(props)
  const router = useRouter();
  const { user } = router.query;
  return (
    <div>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      token: process.env.TOKEN
    }
  }
}

export default User


