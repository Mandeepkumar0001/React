import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "mandeep",
    age: 21,
  };
  let newArray = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Mandeep Kumar</h1>
      <Card channel="mandeep" sum={newArray} />
    </>
  );
}

export default App;
