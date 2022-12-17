import React from 'react';
import './App.css';
import Buttons from "./components/Button";
import Article from "./components/Article";
import bagOne from "./assets/bag_1.png";
import bagTwo from "./assets/bag_2.png";
import bagThree from "./assets/bag_3.png";
import bagFour from "./assets/bag_4.png";
import brandImg from "./assets/brand.png";
import ourStory from "./assets/our_story.png";
import Tiles from "./components/Tiles";



function App() {

  return (
      <>
      <h1>Handbags & Purses</h1>
          {/*navigatiebalk met buttons*/}
          <nav>
              <Buttons
                  buttonTag="to the collection">
              </Buttons>
              <Buttons
                  buttonTag="shop all bags">
              </Buttons>
              <Buttons
                  buttonTag="pre orders">
              </Buttons>
          </nav>
          {/*main met articles voor producten*/}
          <main>
              <Article
                  redText="Best seller"
                  productImage={<img src={bagOne} alt="bagOne"/>}
                  productName="The  bag"
                  price="Euro 400,-"
              ></Article>
              <Article
                  redText="Best seller"
                  productImage={<img src={bagTwo} alt="bagTwo"/>}
                  productName="The stylish bag"
                  price="Euro 250,-"
              ></Article>
              <Article
                  redText="Best seller"
                  productImage={<img src={bagThree} alt="bagThree"/>}
                  productName="The simple bag"
                  price="Euro 300,-"
              ></Article>
              <Article
                  redText="Best seller"
                  productImage={<img src={bagFour} alt="bagFour"/>}
                  productName="The trendy bag"
                  price="Euro 150,-"
              ></Article>
          {/*    Tegels     */}

          </main>
          <footer>
              <Tiles
                  headerHOne="The Brand"
                  para=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nam nostrum voluptas voluptatem! Dolore facere, harum libero repellendus sed vitae?"
              >
              </Tiles>
              <Tiles
              brandImage = {<img src={brandImg} alt="brandImg"/>}
              ></Tiles>
              <Tiles
                  headerHOne="The Brand"
                  para=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nam nostrum voluptas voluptatem! Dolore facere, harum libero repellendus sed vitae?"
              ></Tiles>
              <Tiles
                  brandImage = {<img src={ourStory} alt="ourStory"/>}
              ></Tiles>
      </footer>
      </>
  );
}

export default App;



