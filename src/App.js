import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';

function App() {
  const {dark} = useSelector(d => d)
  return (
    <div className="" style={{
background : dark ? "black" : "white"}}>
      <Header/>
<Todo/>
    </div>
  );
}

export default App;
