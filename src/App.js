import BeforeAfter from "./components/BeforeAfter";

function App() {
  return (
    <BeforeAfter
      beforeImg="../assets/before.jpg"
      afterImg="../assets/after.jpg"
      isVertical={false}
      isHoverEnabled={false}
    />
  );
}

export default App;
