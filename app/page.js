import Intro from '@/components/intro';
import Projects from '@/components/projects';
import Achievements from '@/components/achievements';
import Footer from '@/components/footer';


export default function HomePage() {
  return (
    <>
      <main className="pt-16">
        <Intro />
        <Projects />
        <Achievements />
        <Footer />
      </main>
    </>
  );
}