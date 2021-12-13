import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PageDashboard from './page/PageDashboard';
import PageProcess from './page/PageProcess';
import PageWorkplace from './page/PageWorkplace';
import PageFormAddWork from './page/PageAddWork';
import Dried from './components/process/Dried';
import Packing from './components/process/Packing';
import 'react-tabs/style/react-tabs.css';
import Weigh from './components/process/Weigh';
import Printing from './components/process/Printing';
import Menu from './components/menu/Menu';
import TableWarehouse from './components/warehouse/TableWarehouse';
import Sidebar from './components/menu/Sidebar';
import Navbar from './components/nav/Navbar';
// import Header from './components/menu/Header';
// import Authen from './components/Authen';

function App() {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%"
    }
  };
  return (
    <>
      <Router>
        <div className="contentDiv">
          <Sidebar />
          <div className="contentMargin">
          <Navbar />
            <Routes >
              <Route path="/" exact element={<PageDashboard />} />
              <Route path="/pageworkplace" element={<PageWorkplace />} />
              <Route path="/pageworkplace/pageformaddwork" element={<PageFormAddWork />} />
              <Route path="/pageprocess" element={<PageProcess />} />
              <Route path="/pageprocess/dried" element={<Dried />} />
              <Route path="/pageprocess/packing" element={<Packing />} />
              <Route path="/pageprocess/weigh" element={<Weigh />} />
              <Route path="/pageprocess/printing" element={<Printing />} />
              <Route path="/pagewarehouse/warehouse" element={<TableWarehouse />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
