import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Page = () => {
  const router = useRouter();
  const { id } = router.query

  return (
    <section>
      <h2>Author {id} of Note</h2>
      <Link href={`/notes/${id}`}>
        <a>Back</a>
      </Link>
    </section>
  )
}

export default Page
