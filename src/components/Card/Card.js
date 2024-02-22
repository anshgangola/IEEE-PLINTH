// Card.js
import "./Card.css";
import CardDeck from "./CardDeck";
import { Rig } from "./Rig";
import { useState } from "react";
import Circuit from '../../assets/Circuit.png';
import Cryptic from '../../assets/Cryptic.png';
import Robothon from '../../assets/Robothon.png';
import Robowar from '../../assets/Robowar.png';

const data = [
  {
    title: "Robothon",
    imageUrl: Robothon, // Remove curly braces
    tagline: "Tagline for Item 1",
  },
  {
    title: "Cryptic Hunt",
    imageUrl: Cryptic, // Remove curly braces
    tagline: "Tagline for Item 2",
  },
  {
    title: "Circuit Solve",
    imageUrl: Circuit, // Remove curly braces
    tagline: "Tagline for Item 3",
  },
  {
    title: "Robot War",
    imageUrl: Robowar, // Remove curly braces
    tagline: "Tagline for Item 3",
  },
  // Add more items as needed
];


export default function Card() {
  const [leftPressed, setLeftPressed] = useState(null);
  const [rightPressed, setRightPressed] = useState(null);

  const onLeftPressed = () => {
    setLeftPressed((prev) => !prev);
  };

  const onRightPressed = () => {
    setRightPressed((prev) => !prev);
  };

  return (
    <div className="Case">
      <CardDeck
        leftPressed={leftPressed}
        rightPressed={rightPressed}
        cards={data}
      />
      <Rig onClickLeft={onLeftPressed} onClickRight={onRightPressed} />
    </div>
  );
}
