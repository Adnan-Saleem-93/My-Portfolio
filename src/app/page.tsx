import Main from '@/components/pages/Hero-Section'
import {NextPage} from 'next'

const Home: NextPage = () => {
  return (
    <main className="h-screen z-0">
      <section id="main" className="snap-start">
        <Main />
      </section>
    </main>
  )
}

export default Home
