import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Dave");
  const [count, setCount] = useState(0);

  const headlerNames = () => {
    const name = ["Boboho", "Ucup", "Surucup"];
    const int = Math.floor(Math.random() * 3);
    // return name[int];

    setName(name[int]);
  };

  const headlineClick = () => {
    console.log("clicke");
  };
  const hedleCount = () => {
    setCount(count + 1)
    setCount(count + 1)
    console.log(count);
  }
const headlineClikCount2 = () => {
    console.log(count);
}

  const headlineClick2 = (name) => {
    console.log(`Halo ${name}`);
  };

  const headlineClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={headlineClick}>Hallo {name}</p>
      {/* Button Healine Change Name */}
      <button onClick={headlerNames}>Change Name</button>


      {/* Count Clike */}
      <button onClick={hedleCount}>Count</button>

      {/* Clik Count 2 */}
      <button onClick={headlineClikCount2}>Count 2</button>
      {/* Cliked now */}
      <button onClick={headlineClick}>Clik</button>
      {/* Send Parameter */}
      <button onClick={() => headlineClick2("Dev")}>Clik</button>
      {/* Clikek Target */}
      <button onClick={(e) => headlineClick3(e)}>Clik</button>
    </main>
  );
};

export default Content;
