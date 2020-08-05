import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import dados from './data/dados_iniciais.json';

function App() {
  const categorias = dados.categorias;

  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <BannerMain
        videoTitle="Final Fantasy 7"
        videoDescription='bbb'
        url="https://www.youtube.com/watch?v=I_ATSCTnUD8">
      </BannerMain>
      <Carousel category={categorias[0]}></Carousel>
      <Carousel category={categorias[1]}></Carousel>
      <Carousel category={categorias[2]}></Carousel>
      <Carousel category={categorias[3]}></Carousel>
      <Carousel category={categorias[4]}></Carousel>
      <Carousel category={categorias[5]}></Carousel>
      <Footer></Footer>
    </div >
  );
}

export default App;
