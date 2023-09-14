import {BsFillPlayFill, BsTriangle, BsTriangleFill} from "react-icons/bs";
import {AiTwotoneSetting} from "react-icons/ai";
import {MdReplay} from "react-icons/md";


function App() {
  return (
    <div className="container d-flex align-items-center min-vh-100 justify-content-center">
      <div className={"col-12 col-md-10 col-lg-8"}>
          <div className={"m-3 d-flex justify-content-center align-items-center fw-bold bg-grey-btn text-semi-white"} style={{height: "30vh", fontSize: "20vh"}}>
              <span className={"me-2"}>05</span>:<span className={"ms-2"}>00</span>
          </div>
          <div className={"d-flex justify-content-between ms-3 me-3"} style={{height: "20vh"}}>
              <div className={"bg-grey-btn w-25 align-items-center d-flex justify-content-center fw-bold h2 text-yellow"}>
                  <span className={"me-1"}>01</span>:<span className={"ms-1"}>30</span>
              </div>
              <div className={"bg-grey-btn w-25 align-items-center d-flex justify-content-center fw-bold h2 text-orange"}>
                  <span className={"me-1"}>00</span>:<span className={"ms-1"}>45</span>
              </div>
              <div className={"bg-grey-btn w-25 align-items-center d-flex justify-content-center fw-bold h2 text-red"}>
                  <span className={"me-1"}>00</span>:<span className={"ms-1"}>15</span>
              </div>
          </div>
          <div className={"position-relative mt-2 ms-3 me-3"}>
              <div className="progress" style={{height: 30}}>
                  <div className="progress-bar bg-green"
                       role="progressbar"
                       style={{width: "25%"}}
                       aria-valuenow="25"
                       aria-valuemin="0"
                       aria-valuemax="100"></div>
              </div>
              <div style={{position: "absolute", bottom: -21, left: -9, zIndex: 1}}>
                  <BsTriangleFill color="white" size={20}/>
              </div>
          </div>
          <div  className={"mt-5 d-flex justify-content-evenly"}>
              <div>
                  <AiTwotoneSetting color={"white"} size={50}/>
              </div>
              <div>
                  <BsFillPlayFill color={"white"} size={50}/>
              </div>
              <div>
                  <MdReplay color={"white"} size={50} />
              </div>
          </div>

      </div>
    </div>
  );
}

export default App;
