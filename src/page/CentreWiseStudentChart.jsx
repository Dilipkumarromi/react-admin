import React from 'react'

function CentreWiseStudentChart() {
  return (
     <>
      <div className="col-xxl-4 col-md-6">
                          <div className="card card-full overflow-hidden">
                            <div className="nk-ecwg nk-ecwg4 h-100">
                              <div className="card-inner flex-grow-1">
                                <div className="card-title-group mb-4">
                                  <div className="card-title">
                                    <h6 className="title">Traffic Sources</h6>
                                  </div>
                                  <div className="card-tools">
                                    <div className="dropdown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle link link-light link-sm dropdown-indicator"
                                        data-bs-toggle="dropdown"
                                      >
                                        30 Days
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a href="#">
                                              <span>15 Days</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#" className="active">
                                              <span>30 Days</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <span>3 Months</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="data-group">
                                  <div className="nk-ecwg4-ck">
                                    <canvas
                                      className="lms-doughnut-s1"
                                      id="trafficSources"
                                    ></canvas>
                                  </div>
                                  <ul className="nk-ecwg4-legends">
                                    <li>
                                      <div className="title">
                                        <span
                                          className="dot dot-lg sq"
                                          data-bg="#9cabff"
                                        ></span>
                                        <span>Organic Search</span>
                                      </div>
                                      <div className="amount amount-xs">
                                        4,305
                                      </div>
                                    </li>
                                    <li>
                                      <div className="title">
                                        <span
                                          className="dot dot-lg sq"
                                          data-bg="#ffa9ce"
                                        ></span>
                                        <span>Referrals</span>
                                      </div>
                                      <div className="amount amount-xs">
                                        482
                                      </div>
                                    </li>
                                    <li>
                                      <div className="title">
                                        <span
                                          className="dot dot-lg sq"
                                          data-bg="#b8acff"
                                        ></span>
                                        <span>Social Media</span>
                                      </div>
                                      <div className="amount amount-xs">
                                        859
                                      </div>
                                    </li>
                                    <li>
                                      <div className="title">
                                        <span
                                          className="dot dot-lg sq"
                                          data-bg="#f9db7b"
                                        ></span>
                                        <span>Others</span>
                                      </div>
                                      <div className="amount amount-xs">
                                        138
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="card-inner card-inner-md bg-light">
                                <div className="card-note">
                                  <em className="icon ni ni-info-fill"></em>
                                  <span>
                                    Traffic channels have beed generating the
                                    most traffics over past days.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
     </>
  )
}

export default CentreWiseStudentChart