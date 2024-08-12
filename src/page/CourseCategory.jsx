import React from 'react'

function CourseCategory() {
  return (
    <>
    <div className="col-lg-6">
                          <div className="card card-full">
                            <div className="card-inner">
                              <div className="card-title-group align-start mb-4">
                                <div className="card-title">
                                  <h6 className="title mb-1">Top Categories</h6>
                                  <p>In last 15 days buy and sells overview.</p>
                                </div>
                                <div className="card-tools">
                                  <div className="drodown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle btn btn-icon btn-trigger"
                                      data-bs-toggle="dropdown"
                                    >
                                      <em className="icon ni ni-more-h"></em>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                      <ul className="link-list-opt no-bdr">
                                        <li>
                                          <a href="#" className="active">
                                            <span>15 Days</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
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
                              <div className="d-flex">
                                <div className="h-250px mt-n2 flex-grow-1">
                                  <canvas
                                    className="course-progress-chart"
                                    id="courseProgress"
                                  ></canvas>
                                </div>
                                <ul className="flex-shrink-0 gy-2">
                                  <li className="align-center">
                                    <span
                                      className="dot dot-lg sq me-1"
                                      data-bg="#f98c45"
                                    ></span>
                                    <span> Web Development</span>
                                  </li>
                                  <li className="align-center">
                                    <span
                                      className="dot dot-lg sq me-1"
                                      data-bg="#9cabff"
                                    ></span>
                                    <span> Mobile Application</span>
                                  </li>
                                  <li className="align-center">
                                    <span
                                      className="dot dot-lg sq me-1"
                                      data-bg="#8feac5"
                                    ></span>
                                    <span> Graphics Design</span>
                                  </li>
                                  <li className="align-center">
                                    <span
                                      className="dot dot-lg sq me-1"
                                      data-bg="#6b79c8"
                                    ></span>
                                    <span> Database</span>
                                  </li>
                                  <li className="align-center">
                                    <span
                                      className="dot dot-lg sq me-1"
                                      data-bg="#79f1dc"
                                    ></span>
                                    <span> Marketing</span>
                                  </li>
                                  <li className="align-center">
                                    <span
                                      className="dot dot-lg sq me-1"
                                      data-bg="#FF65B6"
                                    ></span>
                                    <span> Machine Learning</span>
                                  </li>
                                  <li className="align-center">
                                    <span
                                      className="dot dot-lg sq me-1"
                                      data-bg="#6A29FF"
                                    ></span>
                                    <span> Data Science</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
    </>
  )
}

export default CourseCategory