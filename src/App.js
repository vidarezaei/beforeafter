import BeforeAfter from './components/BeforeAfter';

function App() {
   return (
      <BeforeAfter
         beforeImg="../assets/before.jpg"
         afterImg="../assets/after.jpg"
         isVertical={true}
         isHoverEnabled={true}
      />
   );
}

export default App;
