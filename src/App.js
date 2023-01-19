import React from "react";
import "./App.css";
import Accordion from "./Components/Accordions/Accordion";
import Card from "./Components/Card";

function App() {
  return (
    <Card>
      <Accordion>
        <Accordion.Header>
          <button>Section 1</button>
        </Accordion.Header>
        <Accordion.Content>
          <p className="para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            omnis necessitatibus doloremque, architecto blanditiis suscipit
            atque minima rerum quam magnam unde quia repellendus. Ea sequi,
            dignissimos nihil, aut hic, laborum quibusdam voluptate culpa
            deserunt et maiores iste voluptatem maxime neque aliquid consequatur
            quasi. Ipsam necessitatibus iste, temporibus labore facere suscipit.
          </p>
        </Accordion.Content>
      </Accordion>

      <Accordion>
        <Accordion.Header>
          <button>Section 2</button>
        </Accordion.Header>
        <Accordion.Content>
          <p className="para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            omnis necessitatibus doloremque, architecto blanditiis suscipit
            atque minima rerum quam magnam unde quia repellendus. Ea sequi,
            dignissimos nihil, aut hic, laborum quibusdam voluptate culpa
            deserunt et maiores iste voluptatem maxime neque aliquid consequatur
            quasi. Ipsam necessitatibus iste, temporibus labore facere suscipit.
          </p>
        </Accordion.Content>
      </Accordion>

      <Accordion>
        <Accordion.Header>
          <button>Section 3</button>
        </Accordion.Header>
        <Accordion.Content>
          <p className="para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            omnis necessitatibus doloremque, architecto blanditiis suscipit
            atque minima rerum quam magnam unde quia repellendus. Ea sequi,
            dignissimos nihil, aut hic, laborum quibusdam voluptate culpa
            deserunt et maiores iste voluptatem maxime neque aliquid consequatur
            quasi. Ipsam necessitatibus iste, temporibus labore facere suscipit.
          </p>
        </Accordion.Content>
      </Accordion>
    </Card>
  );
}

export default App;
