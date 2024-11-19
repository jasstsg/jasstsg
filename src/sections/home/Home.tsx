import Hero from '../hero/Hero';
import Projects from '../projects/Projects';
import Timeline from '../timeline/Timeline';
import './home.scss';

function Home(props: any) {
  return (
    <section id="home">
        <Hero></Hero>
        <Projects heading="My favourite projects" featuredOnly={true}></Projects>
        <Timeline></Timeline>
    </section>
  );
}

export default Home;