import React from "react";
import Charts from 'react-apexcharts'
const Income=()=> {
 

  return (
    <>
      <div className="col-md-6">
        <div className="card">
          <div className="nk-ecwg nk-ecwg3">
            <div className="card-inner pb-0">
              <div className="card-title-group">
                <div className="card-title">
                  <h6 className="title">Total Sales</h6>
                </div>
              </div>
              <div className="data">
                <div className="data-group">
                  <div className="amount fw-normal">$9,495.20</div>
                  <div className="info text-end">
                    <span className="change up text-danger">
                      <em className="icon ni ni-arrow-long-up"></em>
                      4.63%
                    </span>
                    <br />
                    <span>vs. last month</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="nk-ecwg3-ck">
              <canvas className="courseSells" id="totalSells"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="nk-ecwg nk-ecwg3">
            <div className="card-inner pb-0">
              <div className="card-title-group">
                <div className="card-title">
                  <h6 className="title">This week so far</h6>
                </div>
              </div>
              <div className="data">
                <div className="data-group">
                  <div className="amount fw-normal">$2,995.81</div>
                  <div className="info text-end">
                    <span className="change up text-danger">
                      <em className="icon ni ni-arrow-long-up"></em>
                      7.13%
                    </span>
                    <br />
                    <span>vs. last week</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="nk-ecwg3-ck">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Income;
