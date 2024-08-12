import React from "react";
import ReactApexChart from "react-apexcharts";

function StudentList() {
  const state = {
          
    series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      
      xaxis: {
        // categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      
      },
      title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },
  
  
  };

  return (
    <>
      <div className="col-md-12">
        <div className="card">
          <div className="card-inner">
            <div className="card-title-group align-start mb-2">
              <div className="card-title">
                <h6 className="title">Students Enrolement</h6>
                <p>In last 30 days enrolement of students</p>
              </div>
              <div className="card-tools">
                <em
                  className="card-hint icon ni ni-help-fill"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Students Enrolement"
                ></em>
              </div>
            </div>
            <div className="align-end gy-3 gx-5 flex-wrap flex-md-nowrap flex-lg-wrap flex-xxl-nowrap">
              <div className="nk-sale-data-group flex-md-nowrap g-4">
                <div className="nk-sale-data">
                  <span className="amount">
                    5490
                    <span className="change down text-danger">
                      <em className="icon ni ni-arrow-long-down"></em>
                      16.93%
                    </span>
                  </span>
                  <span className="sub-title">This Month</span>
                </div>
                <div className="nk-sale-data">
                  <span className="amount">
                    1480
                    <span className="change up text-success">
                      <em className="icon ni ni-arrow-long-up"></em>
                      4.26%
                    </span>
                  </span>
                  <span className="sub-title">This Week</span>
                </div>
              </div>
              <div className="nk-sales-ck sales-revenue">
              <ReactApexChart options={state.options} series={state.series} type="bar" height={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentList;
