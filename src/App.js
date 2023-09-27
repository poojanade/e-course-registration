import './App.css';
import Form from './Form';
import Success from './Success';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {

  return (
    <div className="App">
     <Router><>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/Success' element={<Success />} />
      </Routes>
      </>
    </Router>
      {/* <RegistrationForm/> */}
    </div>
  );
}

export default App;
