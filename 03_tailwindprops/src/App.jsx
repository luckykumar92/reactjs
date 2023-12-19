import { Card } from "./components/Card";

// productname ratings price
function App() {
  let myObj = {
    username: "lucky",
    year: 2023,
  };
  let newArray = [1, 2, 3];
  let product = {
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    ratings: "5",
    price: "$599",
  };
  return (
    <>
      <div className="">
        <h1 className="flex bg-green-400 text-white text-5xl mb-5 place-content-center text-center w-fit justify-center mx-auto p-3 rounded-lg">
          tailwind props
        </h1>
        <Card
          date="19 Dec"
          product={product}
          // someObj={myObj}
          // array={newArray}
        />
        <Card date="29 Dec" />
      </div>
    </>
  );
}

export default App;
