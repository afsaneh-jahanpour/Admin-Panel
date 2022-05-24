
import './App.css';
import SideBar from './Components/SideBar';
import Header from './Components/Header';

function App() {
  return (
    <div  data-theme=" kidsydark" className='flex w-full h-screen'>
     <SideBar/>
      <section className='w-10/12 bg-base-100 h-screen'>
        <Header/>
      </section>
    </div>
  );
}

export default App;
