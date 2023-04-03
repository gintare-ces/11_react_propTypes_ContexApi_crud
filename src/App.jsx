import './styles/reset.css';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
// import Button from './components/ui/button/Button';
import Header from './components/layout/Header';
import HomePage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';
import UsersPage from './components/pages/UsersPage';


function App() {

  // function testBtn() {
  //   console.count('paspaudei mygtuka')
  // }
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/users' element={<UsersPage />}/>
        <Route path='/contact' element={<ContactPage />}/>

      </Routes>
      {/* <Button onClick={testBtn} className='mb20'>Click me</Button> */}
    </div>
  );
}
export default App;
