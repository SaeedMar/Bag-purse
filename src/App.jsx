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
