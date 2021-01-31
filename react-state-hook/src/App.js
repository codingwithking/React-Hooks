import './App.css';
import ClassCounter from './components/ClassCounter';
import HooksCounter from './components/HooksCounter';
import PrevStateCounter from './components/PrevStateCounter';
import UpdateObjectState from './components/UpdateObjectState';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HooksCounter /> */}
      {/* <PrevStateCounter /> */}
      <UpdateObjectState />
    </div>
  );
}

export default App;
