import React from 'react'
import ReactApexChart from 'react-apexcharts';

function TotalCertificate() {
    const state = {
          
        series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          },
          yaxis: {
            title: {
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
              }
            }
          }
        },
      
      
      };
   
  return (
    <>
     <div className="col-md-6 col-xxl-8">
                          <div className="card h-100">
                            <div className="card-inner">
                              <div className="card-title-group align-start pb-3 g-2">
                                <div className="card-title card-title-sm">
                                  <h6 className="title">Active Certificate</h6>
                                  <p>
                                    How do your students visited in the time.
                                  </p>
                                </div>
                                <div className="card-tools">
                                  <em
                                    className="card-hint icon ni ni-help"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title="Users of this month"
                                  ></em>
                                </div>
                              </div>
                              <div className="analytic-au">
                                <div className="analytic-data-group analytic-au-group g-3">
                                  <div className="analytic-data analytic-au-data">
                                    <div className="title">Monthly</div>
                                    <div className="amount">9.28K</div>
                                    <div className="change up">
                                      <em className="icon ni ni-arrow-long-up"></em>
                                      4.63%
                                    </div>
                                  </div>
                                  <div className="analytic-data analytic-au-data">
                                    <div className="title">Weekly</div>
                                    <div className="amount">2.69K</div>
                                    <div className="change down">
                                      <em className="icon ni ni-arrow-long-down"></em>
                                      1.92%
                                    </div>
                                  </div>
                                  <div className="analytic-data analytic-au-data">
                                    <div className="title">Daily (Avg)</div>
                                    <div className="amount">0.94K</div>
                                    <div className="change up">
                                      <em className="icon ni ni-arrow-long-up"></em>
                                      3.45%
                                    </div>
                                  </div>
                                </div>
                                <div className="analytic-au-ck">
                                <ReactApexChart options={state.options} series={state.series} type="bar" height={200} />
                                </div>
                                <div className="chart-label-group">
                                  <div className="chart-label">
                                    01 Jan, 2020
                                  </div>
                                  <div className="chart-label">
                                    30 Jan, 2020
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
    </>
  )
}

export default TotalCertificate