import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {
    DANGER_TIME_SETTER_PAGE,
    HOME_PAGE,
    OPTION_SETTING_PAGE,
    SCHEDULE_TIME_SETTER_PAGE,
    TIME_COUNTER_PAGE, URGENT_TIME_SETTER_PAGE,
    WARNING_TIME_SETTER_PAGE
} from "./constant/page";
import HomePage from "./page/HomePage";
import TimeCounter from "./page/TimeCounter";
import OptionSetting from "./page/OptionSetting";
import ScheduleTimeSetter from "./page/ScheduleTimeSetter";
import WarningTimeSetter from "./page/WarningTimeSetter";
import UrgentTimeSetter from "./page/UrgentTimeSetter";
import DangerTimeSetter from "./page/DangerTimeSetter";
import {TimerContextProvider} from "./component/TimerContext";


function App() {
  return (
      <BrowserRouter>
          <TimerContextProvider>
              <div className="container d-flex align-items-center min-vh-100 justify-content-center">
                  <Routes>
                      <Route path={HOME_PAGE} element={<HomePage/>}/>
                      <Route path={OPTION_SETTING_PAGE} element={<OptionSetting/>}/>
                      <Route path={TIME_COUNTER_PAGE} element={<TimeCounter/>}/>
                      <Route path={SCHEDULE_TIME_SETTER_PAGE} element={<ScheduleTimeSetter/>}/>
                      <Route path={WARNING_TIME_SETTER_PAGE} element={<WarningTimeSetter/>}/>
                      <Route path={URGENT_TIME_SETTER_PAGE} element={<UrgentTimeSetter/>}/>
                      <Route path={DANGER_TIME_SETTER_PAGE} element={<DangerTimeSetter/>}/>
                  </Routes>
              </div>
          </TimerContextProvider>
      </BrowserRouter>
  );
}

export default App;
