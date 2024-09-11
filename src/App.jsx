// App.jsx
import React from 'react';
import './App.css';
import ButtonLoadText from './components/ButtonLoadText';
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import TheBags from "./components/TheBags.jsx";
import brandPhoto from './assets/brand.png'
import outStory from './assets/our_story.png'
import Tile from "./components/Tile.jsx";
function App() {
  return (
      <div>
        <h1>Handbags & Purses</h1>
        <nav>
          {/* Gebruik de ButtonLoadText-component met verschillende props */}
          <ButtonLoadText text="To the collection" disabled={false} />
          <ButtonLoadText text="Shop all bags" disabled={false} />
          <ButtonLoadText text="Pre-orders" disabled={true} />
        </nav>
          <main>
                  <TheBags title="Limited Edition" img={bag1} name="The handy bag" price="€400,."/>
                  <TheBags title="New Arrival" img={bag2} name="The stylish bag" price="€250,."/>
                  <TheBags title="Best Seller" img={bag3} name="The simple bag" price="€300,."/>
                  <TheBags title="Discount" img={bag4} name="The trendy bag" price="€150,."/>
          </main>

      {/*    Maak een omwikkelende footer-tag voor de tegels. Maak vier section-elementen met daarin:
Een afbeelding van het merk of de designers (als er geen tekst in staat)
Een h2-element voor de titel en p-elementen voor de paragrafen (als er wel tekst in staat)
Maak nu een custom Tile-component die alle benodigde data kan ontvangen. Als er een afbeelding wordt meegegeven
 gedraagt hij zich als een foto-tegel, maar zonder afbeelding is het een tekst-tegel. Houd er rekening mee dat je van
 tevoren ook niet weet hoeveel losse paragrafen er in een Tile komen te staan.*/}

          <footer>


              <Tile title="lorem Ipsum"
                  paragraphs={["lorem ipsum."]}/>
              <Tile img={brandPhoto} title="Our Brand"/>
              <Tile img={outStory} title="Our Story"/>
              <Tile title="Lorem Ipsum" paragraphs={["lorem Ipsum"
                  ]}
              />
          </footer>
</div>

)
    ;
}

export default App;
