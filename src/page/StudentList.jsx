import React from 'react'

function StudentList() {
  return (
    <>
    <div className="col-md-12">
                              <div className="card">
                                <div className="card-inner">
                                  <div className="card-title-group align-start mb-2">
                                    <div className="card-title">
                                      <h6 className="title">
                                        Students Enrolement
                                      </h6>
                                      <p>
                                        In last 30 days enrolement of students
                                      </p>
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
                                        <span className="sub-title">
                                          This Month
                                        </span>
                                      </div>
                                      <div className="nk-sale-data">
                                        <span className="amount">
                                          1480
                                          <span className="change up text-success">
                                            <em className="icon ni ni-arrow-long-up"></em>
                                            4.26%
                                          </span>
                                        </span>
                                        <span className="sub-title">
                                          This Week
                                        </span>
                                      </div>
                                    </div>
                                    <div className="nk-sales-ck sales-revenue">
                                      <canvas
                                        className="student-enrole"
                                        id="enrolement"
                                      ></canvas>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
    </>
  )
}

export default StudentList