import BeforeAfter from "./Component/BeforeAfter";

function App() {
  return (
    <BeforeAfter
      beforeimg="../assets/before.jpg"
      afterimg="../assets/after.jpg"
      isVertical={false}
      isHoverEnabled={false}
    />
  );
}

export default App;
