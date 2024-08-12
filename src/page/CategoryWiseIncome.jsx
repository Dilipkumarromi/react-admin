import React from 'react'

function CategoryWiseIncome() {
  return (
    <>
    <div className="col-md-6 col-xxl-4">
                          <div className="card h-100">
                            <div className="card-inner">
                              <div className="card-title-group mb-2">
                                <div className="card-title">
                                  <h6 className="title">Top Courses</h6>
                                </div>
                                <div className="card-tools">
                                  <div className="dropdown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle link link-light link-sm dropdown-indicator"
                                      data-bs-toggle="dropdown"
                                    >
                                      Weekly
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                      <ul className="link-list-opt no-bdr">
                                        <li>
                                          <a href="#">
                                            <span>Daily</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#" className="active">
                                            <span>Weekly</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            <span>Monthly</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <ul className="nk-top-products">
                                <li className="item">
                                  <div className="user-avatar sq bg-success-dim me-3">
                                    <span>UI/X</span>
                                  </div>
                                  <div className="info">
                                    <div className="title">
                                      UI/UX Design with Adobe XD
                                    </div>
                                    <div className="price">$85.00</div>
                                  </div>
                                  <div className="total">
                                    <div className="amount">$2,125.00</div>
                                    <div className="count">25 Sold</div>
                                  </div>
                                </li>
                                <li className="item">
                                  <div className="user-avatar sq bg-warning-dim me-3">
                                    <span>AD</span>
                                  </div>
                                  <div className="info">
                                    <div className="title">
                                      Android App Development
                                    </div>
                                    <div className="price">$95.00</div>
                                  </div>
                                  <div className="total">
                                    <div className="amount">$1,710.00</div>
                                    <div className="count">10 Sold</div>
                                  </div>
                                </li>
                                <li className="item">
                                  <div className="user-avatar sq bg-danger-dim me-3">
                                    <span>WD</span>
                                  </div>
                                  <div className="info">
                                    <div className="title">
                                      Wordpress Development
                                    </div>
                                    <div className="price">$70.00</div>
                                  </div>
                                  <div className="total">
                                    <div className="amount">$1050.00</div>
                                    <div className="count">15 Sold</div>
                                  </div>
                                </li>
                                <li className="item">
                                  <div className="user-avatar sq bg-primary-dim me-3">
                                    <span>ML</span>
                                  </div>
                                  <div className="info">
                                    <div className="title">
                                      Machine Learning
                                    </div>
                                    <div className="price">$110.00</div>
                                  </div>
                                  <div className="total">
                                    <div className="amount">$990.00</div>
                                    <div className="count">10 Sold</div>
                                  </div>
                                </li>
                                <li className="item">
                                  <div className="user-avatar sq bg-info-dim me-3">
                                    <span>RD</span>
                                  </div>
                                  <div className="info">
                                    <div className="title">
                                      Responsive Design
                                    </div>
                                    <div className="price">$80.00</div>
                                  </div>
                                  <div className="total">
                                    <div className="amount">$960.00</div>
                                    <div className="count">12 Sold</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
    </>
  )
}

export default CategoryWiseIncome