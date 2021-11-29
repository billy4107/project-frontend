import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Menu from './components/Menu';
import PageDashboard from './page/PageDashboard';
import PageProcess from './page/PageProcess';
import PageWorkplace from './page/PageWorkplace';
import PageFormAddWork from './page/PageAddWork';
// import Authen from './components/Authen';

function App() {
  return (
   <>
      <Router>
        <Menu />
        <Routes >
          <Route path="/" exact element={<PageDashboard />} />
          <Route path="/pageworkplace"  element={<PageWorkplace />} />
          <Route path="/pageformaddwork"  element={<PageFormAddWork />} />
        </Routes>
      </Router>
   </>
  );
}

export default App;
