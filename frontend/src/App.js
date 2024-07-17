// App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomersList from './pages/CustomerList';
// import AddCustomer from './components/AddCustomer';
// import ViewCustomer from './components/ViewCustomer';
// import EditCustomer from './components/EditCustomer';
// import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomersList />} />
        {/* <Route path="/customers/add" element={<AddCustomer />} /> */}
        {/* <Route path="/customers/:id" element={<ViewCustomer />} /> */}
        {/* <Route path="/customers/:id/edit" element={<EditCustomer />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
