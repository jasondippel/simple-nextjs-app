import { useRouter } from 'next/router'
import Link from 'next/link'

const Page = () => {
  const router = useRouter();
  const { id } = router.query

  return (
    <section>
      <h2>Note {id}</h2>
      <Link href={`/notes/${id}/author`}>
        <a>Author</a>
      </Link>
      <br/>
      <Link href={`/notes`}>
        <a>Back</a>
      </Link>
    </section>
  )
}

export default Page
