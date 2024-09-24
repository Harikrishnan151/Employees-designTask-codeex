import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './Pages/AddEmployee/AddEmployee';
import EmployeeDetails from './Pages/EmployeeDetails/EmployeeDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AddEmployee/>}/>
        <Route path='/view/employee' element={<EmployeeDetails/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
