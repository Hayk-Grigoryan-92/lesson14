import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { ViewPage } from './pages/components/viewPage';
import { FormData } from './pages/components/formData';
import {Header} from './components/header'
import { Navigate } from 'react-router-dom';

function App() {

  
  return (
    <div className="App">
      <Header/>

      <Routes>
          <Route path='/' element={<FormData/>}/>
          <Route path='/page_details' element={<ViewPage />}/>
          <Route path={"/*"} element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
