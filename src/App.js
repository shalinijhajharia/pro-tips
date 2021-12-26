import ReactDOM from 'react-dom';
import {Routes,Route,Link} from "react-router-dom";
import './App.css';
import home from './home.svg';
import add from './add.svg';
import list from './list.svg'
import Home from './components/Home';
import List from './components/List';
import Add from './components/Add';
function Empty()
{
  return <h1>There's Nothing to display</h1>
}
function App() {
  return (
   <div className='main'>
     <div className='nav'>
      <Link to='/'><img src={home} alt='home' className='logo'/></Link>
      <Link to='add'><img src={add} alt='add' className='logo'/></Link>
      <Link to='list'><img src={list} alt='add' className='logo'/></Link>
     </div>

     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="add" element={<Add/>}/>

       <Route path="list" element={<List/>}/> 
       <Route path="*" element={<Empty/>}/>
       
      </Routes>
   </div>
  );
}

export default App;