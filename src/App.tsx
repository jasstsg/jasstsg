import { ReactNode } from 'react';
import Header from './sections/header/Header';
import Footer from './sections/footer/Footer';
import './App.scss';

function App(props: {children: ReactNode}) {
  return (
    <section id="app">
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </section>
  );
}

export default App;
