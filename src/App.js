import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import PageProcess from './page/PageProcess';
import PageWorkplace from './page/PageWorkplace';
import PageFormAddWork from './page/PageAddWork';
import Dried from './components/process/dried/Dried';
import Packing from './components/process/packing/Packing';
import 'react-tabs/style/react-tabs.css';
import Sidebar from './components/menu/Sidebar';
import Navbar from './components/nav/Navbar';
import EditWorkplace from './components/workplace/EditWorkplace';
import Sorting from './components/process/sorting/Sorting';
import AddProduct from './components/fresh/AddProduct';
import ManageProduct from './components/fresh/ManageProduct';
import EditProduct from './components/fresh/EditProduct';
import WarehousePage from './components/warehouse/WarehousePage';
import ConfirmForm from './components/process/confirm/ConfirmForm';
import Member from './components/purchase/member/Member';
import AddMember from './components/purchase/member/AddMember';
import ViewMember from './components/purchase/member/ViewMember';
import EditMember from './components/purchase/member/EditMember';
import BuyMushroom from './components/purchase/buy/BuyMushroom';
import AddBuy from './components/purchase/buy/AddBuy';
import EditBuy from './components/purchase/buy/EditBuy';
import ViewBuy from './components/purchase/buy/ViewBuy';
import Partner from './components/sells/partner/Partner';
import AddPartner from './components/sells/partner/AddPartner';
import EditPartner from './components/sells/partner/EditPartner';
import ViewPartner from './components/sells/partner/ViewPartner';
import Sell from './components/sells/sell/Sell';
import AddSell from './components/sells/sell/AddSell';
import EditSell from './components/sells/sell/EditSell';
import ViewSell from './components/sells/sell/ViewSell';
import Personnel from './components/personnel/Personnel';
import AddPersonnel from './components/personnel/AddPersonnel.js';
import EditPersonnel from './components/personnel/EditPersonnel.js';
import ViewPersonnel from './components/personnel/ViewPersonnel.js';
import EditWarehouse from './components/warehouse/EditWarehouse';
import ViewWarehouse from './components/warehouse/ViewWarehouse';
import Login from './components/login/LoginPage';
import SideHub from './SideHub';
import Register from './components/login/Register';

function App() {

  return (
    <>
      <Router>

        {/* <Routes >
        </Routes> */}

        {/* <div className="contentDiv">
          <Sidebar />
          <div className="contentMargin">
            <Navbar /> */}
            <Routes >
            <Route element={<SideHub />} >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/pageworkplace" element={<PageWorkplace />} />
              <Route path="/pageworkplace/pageformaddwork" element={<PageFormAddWork />} />
              <Route path="/pageprocess" element={<PageProcess />} />
              <Route path="/pageprocess/sorting" element={<Sorting />} />
              <Route path="/pageprocess/dried" element={<Dried />} />
              <Route path="/pageprocess/packing" element={<Packing />} />
              <Route path="/pageprocess/confirmform" element={<ConfirmForm />} />
              <Route path="/pageworkplace/edit/:wid" element={<EditWorkplace />} />
              <Route path="/pageprocess/sorting/:proid" element={<Sorting />} />
              <Route path="/pageprocess/dried/:proid" element={<Dried />} />
              <Route path="/pageprocess/packing/:proid" element={<Packing />} />
              <Route path="/pagewarehouse/fresh/addproduct" element={<AddProduct />} />
              <Route path="/pagewarehouse/fresh/manageproduct" element={<ManageProduct />} />
              <Route path="/pagewarehouse/fresh/edit/:pfid" element={<EditProduct />} />
              <Route path="/pageprocess/confirmform/:proid" element={<ConfirmForm />} />
              <Route path="/warehouse" element={<WarehousePage />} />
              <Route path="/warehouse/edit/:wareid" element={<EditWarehouse />} />
              <Route path="/warehouse/view/:wareid" element={<ViewWarehouse />} />
              <Route path="/member" element={<Member />} />
              <Route path="/member/add" element={<AddMember />} />
              <Route path="/member/view/:fmid" element={<ViewMember />} />
              <Route path="/member/edit/:fmid" element={<EditMember />} />
              <Route path="/buymushroom" element={<BuyMushroom />} />
              <Route path="/buymushroom/add" element={<AddBuy />} />
              <Route path="/buymushroom/edit/:buyid" element={<EditBuy />} />
              <Route path="/buymushroom/view/:buyid" element={<ViewBuy />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/partner/add" element={<AddPartner />} />
              <Route path="/partner/edit/:pid" element={<EditPartner />} />
              <Route path="/partner/view/:pid" element={<ViewPartner />} />
              <Route path="/sellmushroom" element={<Sell />} />
              <Route path="/sellmushroom/add" element={<AddSell />} />
              <Route path="/sellmushroom/edit/:sellid" element={<EditSell />} />
              <Route path="/sellmushroom/view/:sellid" element={<ViewSell />} />
              <Route path="/sellmushroom/select" element={<AddSell />} />
              <Route path="/personnel" element={<Personnel />} />
              <Route path="/personnel/add" element={<AddPersonnel />} />
              <Route path="/personnel/edit/:perid" element={<EditPersonnel />} />
              <Route path="/personnel/view/:perid" element={<ViewPersonnel />} />
            </Route>
            <Route exact path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            </Routes>
          {/* </div>
        </div> */}
      </Router>
    </>
  );
}

export default App;
