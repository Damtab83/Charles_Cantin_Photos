import './components/css/Home.css';
import './App.css';
import MainLayout from './layout/MainLayout';
import cover from './img/photographe.jpg';

function App() {
  return (
    <div classname="App">
      <MainLayout>
        <img className='image-cover' src={cover} alt="photographe" />
        <div className='title'>
          <h1 className='title1'>Charles Cantin</h1>
          <h2 className='title2'>Photographe</h2>
        </div>
      </MainLayout>
    </div>
    
  );
}

export default App;
