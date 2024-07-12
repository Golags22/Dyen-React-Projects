import './App.css';
import './index.css';
import Box1 from './components/box1';
import Box2 from './components/box2';
import Box3 from './components/box3';
import Box4 from './components/box4';
import Box5 from './components/box5';

function App() {
  return (
    <main className='App'>
        <Box1 text="COS 101" />
        <Box2 text="Advert" />
        <Box3 text="MTH 201" />
        <Box4 text="Assignment" />
        <Box5 />
    </main>
  );
}

export default App;
