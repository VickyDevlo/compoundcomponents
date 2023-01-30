import React from "react";
import Content from "./Content";
import Accordion from "./Accordion";
import Header from "./Header";
import Card from "../Card/Card";

const Accordions = () => {
  return (
    <Card>
      <Accordion>
        <Header>
          <button>Section 1</button>
        </Header>
        <Content>
          <p className="para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            omnis necessitatibus doloremque, architecto blanditiis suscipit
            atque minima rerum quam magnam unde quia repellendus. Ea sequi,
            dignissimos nihil, aut hic, laborum quibusdam voluptate culpa
            deserunt et maiores iste voluptatem maxime neque aliquid consequatur
            quasi. Ipsam necessitatibus iste, temporibus labore facere suscipit.
          </p>
        </Content>
      </Accordion>

      <Accordion>
        <Header>
          <button>Section 2</button>
        </Header>
        <Content>
          <p className="para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            omnis necessitatibus doloremque, architecto blanditiis suscipit
            atque minima rerum quam magnam unde quia repellendus. Ea sequi,
            dignissimos nihil, aut hic, laborum quibusdam voluptate culpa
            deserunt et maiores iste voluptatem maxime neque aliquid consequatur
            quasi. Ipsam necessitatibus iste, temporibus labore facere suscipit.
          </p>
        </Content>
      </Accordion>

      <Accordion>
        <Header>
          <button>Section 3</button>
        </Header>
        <Content>
          <p className="para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            omnis necessitatibus doloremque, architecto blanditiis suscipit
            atque minima rerum quam magnam unde quia repellendus. Ea sequi,
            dignissimos nihil, aut hic, laborum quibusdam voluptate culpa
            deserunt et maiores iste voluptatem maxime neque aliquid consequatur
            quasi. Ipsam necessitatibus iste, temporibus labore facere suscipit.
          </p>
        </Content>
      </Accordion>
    </Card>
  );
};

export default Accordions;
