import './App.css';
import Board from './components/Board';
import {TbDeviceGamepad2} from 'react-icons/tb'

function App() {
  return (
    <>
      <h2 className='heading'> <TbDeviceGamepad2/> Tic Tac Toe</h2>
      <Board />
    </>
  );
}

export default App;
