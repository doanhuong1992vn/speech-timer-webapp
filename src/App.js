import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./page/HomePage";
import TimeCounter from "./page/TimeCounter";
import TimeSetter from "./page/TimeSetter";
import OptionSetting from "./page/OptionSetting";
import {HOME_PAGE, OPTION_SETTING_PAGE, TIME_COUNTER_PAGE, TIME_SETTER_PAGE} from "./constant/page";


function App() {
  return (
      <BrowserRouter>
          <div className="container d-flex align-items-center min-vh-100 justify-content-center">
              <Routes>
                  <Route path={HOME_PAGE} element={<HomePage />} />
                  <Route path={TIME_COUNTER_PAGE} element={<TimeCounter />}/>
                  <Route path={TIME_SETTER_PAGE} element={<TimeSetter />}/>
                  <Route path={OPTION_SETTING_PAGE} element={<OptionSetting />}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
