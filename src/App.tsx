import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")}>Add To Cart</Button>
    </div>
  );
}

export default App;
