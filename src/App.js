import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./page/HomePage";
import TimeCounter from "./page/TimeCounter";
import TimeSetter from "./page/TimeSetter";



function App() {
  return (
      <BrowserRouter>
          <div className="container d-flex align-items-center min-vh-100 justify-content-center">
              <Routes>
                  <Route path={"/"} element={<HomePage />} />
                  <Route path={"/time-counter"} element={<TimeCounter />}/>
                  <Route path={"/time-setter"} element={<TimeSetter />}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
