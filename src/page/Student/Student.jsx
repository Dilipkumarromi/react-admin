import React from 'react'

function Student() {
  return (
     <>
     <div className="nk-content">
            <div className="container-fluid">
              <div className="nk-content-inner">
                <div className="nk-content-body">
                  <div className="nk-block-head nk-block-head-sm">
                    <div className="nk-block-between">
                      <div className="nk-block-head-content">
                        <h3 className="nk-block-title page-title">Students</h3>
                      </div>
                      <div className="nk-block-head-content">
                        <div className="toggle-wrap nk-block-tools-toggle">
                          <a
                            href="#"
                            className="btn btn-icon btn-trigger toggle-expand me-n1"
                            data-target="more-options"
                            ><em className="icon ni ni-more-v"></em
                          ></a>
                          <div
                            className="toggle-expand-content"
                            data-content="more-options"
                          >
                            <ul className="nk-block-tools g-3">
                              <li>
                                <div className="form-control-wrap">
                                  <div className="form-icon form-icon-right">
                                    <em className="icon ni ni-search"></em>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="default-04"
                                    placeholder="Search by name"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="drodown">
                                  <a
                                    href="#"
                                    className="dropdown-toggle dropdown-indicator btn btn-outline-light btn-white"
                                    data-bs-toggle="dropdown"
                                    >Status</a
                                  >
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <ul className="link-list-opt no-bdr">
                                      <li>
                                        <a href="#"><span>Actived</span></a>
                                      </li>
                                      <li>
                                        <a href="#"><span>Inactived</span></a>
                                      </li>
                                      <li>
                                        <a href="#"><span>Blocked</span></a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li className="nk-block-tools-opt">
                                <a
                                  className="btn btn-icon btn-primary d-md-none"
                                  data-bs-toggle="modal"
                                  href="#student-add"
                                  ><em className="icon ni ni-plus"></em></a
                                ><a
                                  className="btn btn-primary d-none d-md-inline-flex"
                                  data-bs-toggle="modal"
                                  href="#student-add"
                                  ><em className="icon ni ni-plus"></em
                                  ><span>Add</span></a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nk-block">
                    <div className="card">
                      <div className="card-inner-group">
                        <div className="card-inner p-0">
                          <div className="nk-tb-list nk-tb-ulist">
                            <div className="nk-tb-item nk-tb-head">
                              <div className="nk-tb-col nk-tb-col-check">
                                <div
                                  className="custom-control custom-control-sm custom-checkbox notext"
                                >
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="uid"
                                  /><label
                                    className="custom-control-label"
                                    for="uid"
                                  ></label>
                                </div>
                              </div>
                              <div className="nk-tb-col">
                                <span className="sub-text">User</span>
                              </div>
                              <div className="nk-tb-col tb-col-mb">
                                <span className="sub-text d-lg-flex d-none"
                                  >Enrolled Courses</span
                                >
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span className="sub-text">Phone</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span className="sub-text">Country</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span className="sub-text">Payment</span>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span className="sub-text">Status</span>
                              </div>
                              <div className="nk-tb-col nk-tb-col-tools">
                                <ul className="nk-tb-actions gx-1 my-n1">
                                  <li>
                                    <div className="drodown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                        data-bs-toggle="dropdown"
                                        ><em className="icon ni ni-more-h"></em
                                      ></a>
                                      <div
                                        className="dropdown-menu dropdown-menu-end"
                                      >
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a href="#"
                                              ><em className="icon ni ni-mail"></em
                                              ><span>Send Email to All</span></a
                                            >
                                          </li>
                                          <li>
                                            <a href="#"
                                              ><em className="icon ni ni-na"></em
                                              ><span>Suspend Selected</span></a
                                            >
                                          </li>
                                          <li>
                                            <a href="#"
                                              ><em className="icon ni ni-trash"></em
                                              ><span>Remove Seleted</span></a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="nk-tb-item">
                              <div className="nk-tb-col nk-tb-col-check">
                                <div
                                  className="custom-control custom-control-sm custom-checkbox notext"
                                >
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="uid1"
                                  /><label
                                    className="custom-control-label"
                                    for="uid1"
                                  ></label>
                                </div>
                              </div>
                              <div className="nk-tb-col">
                                <a href="students-details.html"
                                  ><div className="user-card">
                                    <div className="user-avatar bg-primary">
                                      <span>AB</span>
                                    </div>
                                    <div className="user-info">
                                      <span className="tb-lead"
                                        >Abu Bin Ishtiyak
                                        <span
                                          className="dot dot-success d-md-none ms-1"
                                        ></span></span
                                      ><span>info@softnio.com</span>
                                    </div>
                                  </div></a
                                >
                              </div>
                              <div className="nk-tb-col tb-col-mb">
                                <span className="tb-lead d-lg-flex d-none"
                                  >Fornt-end Development</span
                                >
                                <div className="d-lg-flex d-none">
                                  <div className="drodown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle pt-1 text-info"
                                      data-bs-toggle="dropdown"
                                    >
                                      <span>View More</span>
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu-start"
                                    >
                                      <ul className="link-list-opt no-bdr p-3">
                                        <li className="tb-lead p-1">
                                          Application Management
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                        <li className="tb-lead p-1">
                                          UI/UX Design with Adobe XD
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span>+811 847-4958</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span>United State</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span
                                  className="badge badge-dot badge-dot bg-warning"
                                  >Due</span
                                >
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span className="tb-status text-success"
                                  >Active</span
                                >
                              </div>
                              <div className="nk-tb-col nk-tb-col-tools">
                                <ul className="nk-tb-actions gx-1">
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Send Email"
                                      ><em className="icon ni ni-mail-fill"></em
                                    ></a>
                                  </li>
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Suspend"
                                      ><em
                                        className="icon ni ni-user-cross-fill"
                                      ></em
                                    ></a>
                                  </li>
                                  <li>
                                    <div className="drodown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                        data-bs-toggle="dropdown"
                                        ><em className="icon ni ni-more-h"></em
                                      ></a>
                                      <div
                                        className="dropdown-menu dropdown-menu-end"
                                      >
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a href="students-details.html"
                                              ><em className="icon ni ni-eye"></em
                                              ><span>View Details</span></a
                                            >
                                          </li>
                                          <li>
                                            <a href="#"
                                              ><em
                                                className="icon ni ni-activity-round"
                                              ></em
                                              ><span>Activities</span></a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="nk-tb-item">
                              <div className="nk-tb-col nk-tb-col-check">
                                <div
                                  className="custom-control custom-control-sm custom-checkbox notext"
                                >
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="uid2"
                                  /><label
                                    className="custom-control-label"
                                    for="uid2"
                                  ></label>
                                </div>
                              </div>
                              <div className="nk-tb-col">
                                <a href="students-details.html"
                                  ><div className="user-card">
                                    <div className="user-avatar">
                                      <img
                                        src="../images/avatar/a-sm.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="user-info">
                                      <span className="tb-lead"
                                        >Ashley Lawson
                                        <span
                                          className="dot dot-warning d-md-none ms-1"
                                        ></span></span
                                      ><span>ashley@softnio.com</span>
                                    </div>
                                  </div></a
                                >
                              </div>
                              <div className="nk-tb-col tb-col-mb">
                                <span className="tb-lead d-lg-flex d-none"
                                  >Responsive Design</span
                                >
                                <div className="d-lg-flex d-none">
                                  <div className="drodown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle pt-1 text-info"
                                      data-bs-toggle="dropdown"
                                    >
                                      <span>View More</span>
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu-start"
                                    >
                                      <ul className="link-list-opt no-bdr p-3">
                                        <li className="tb-lead p-1">
                                          Application Management
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                        <li className="tb-lead p-1">
                                          UI/UX Design with Adobe XD
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span>+124 394-1787</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span>United Kindom</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span className="tb-status badge-dot bg-success"
                                  >Paid</span
                                >
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span className="tb-status text-warning"
                                  >Inactive</span
                                >
                              </div>
                              <div className="nk-tb-col nk-tb-col-tools">
                                <ul className="nk-tb-actions gx-1">
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Send Email"
                                      ><em className="icon ni ni-mail-fill"></em
                                    ></a>
                                  </li>
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Suspend"
                                      ><em
                                        className="icon ni ni-user-cross-fill"
                                      ></em
                                    ></a>
                                  </li>
                                  <li>
                                    <div className="drodown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                        data-bs-toggle="dropdown"
                                        ><em className="icon ni ni-more-h"></em
                                      ></a>
                                      <div
                                        className="dropdown-menu dropdown-menu-end"
                                      >
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a href="students-details.html"
                                              ><em className="icon ni ni-eye"></em
                                              ><span>View Details</span></a
                                            >
                                          </li>
                                          <li>
                                            <a href="#"
                                              ><em
                                                className="icon ni ni-activity-round"
                                              ></em
                                              ><span>Activities</span></a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="nk-tb-item">
                              <div className="nk-tb-col nk-tb-col-check">
                                <div
                                  className="custom-control custom-control-sm custom-checkbox notext"
                                >
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="uid3"
                                  /><label
                                    className="custom-control-label"
                                    for="uid3"
                                  ></label>
                                </div>
                              </div>
                              <div className="nk-tb-col">
                                <a href="students-details.html"
                                  ><div className="user-card">
                                    <div className="user-avatar bg-info">
                                      <span>JL</span>
                                    </div>
                                    <div className="user-info">
                                      <span className="tb-lead"
                                        >Joe Larson
                                        <span
                                          className="dot dot-success d-md-none ms-1"
                                        ></span></span
                                      ><span>larson@example.com</span>
                                    </div>
                                  </div></a
                                >
                              </div>
                              <div className="nk-tb-col tb-col-mb">
                                <span className="tb-lead d-lg-flex d-none"
                                  >Mobile Applicationn</span
                                >
                                <div className="d-lg-flex d-none">
                                  <div className="drodown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle pt-1 text-info"
                                      data-bs-toggle="dropdown"
                                    >
                                      <span>View More</span>
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu-start"
                                    >
                                      <ul className="link-list-opt no-bdr p-3">
                                        <li className="tb-lead p-1">
                                          Application Management
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                        <li className="tb-lead p-1">
                                          UI/UX Design with Adobe XD
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span>+168 603-2320</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span>India</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span className="tb-status badge-dot bg-success"
                                  >Paid</span
                                >
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span className="tb-status text-success"
                                  >Active</span
                                >
                              </div>
                              <div className="nk-tb-col nk-tb-col-tools">
                                <ul className="nk-tb-actions gx-1">
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Send Email"
                                      ><em className="icon ni ni-mail-fill"></em
                                    ></a>
                                  </li>
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Suspend"
                                      ><em
                                        className="icon ni ni-user-cross-fill"
                                      ></em
                                    ></a>
                                  </li>
                                  <li>
                                    <div className="drodown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                        data-bs-toggle="dropdown"
                                        ><em className="icon ni ni-more-h"></em
                                      ></a>
                                      <div
                                        className="dropdown-menu dropdown-menu-end"
                                      >
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a href="students-details.html"
                                              ><em className="icon ni ni-eye"></em
                                              ><span>View Details</span></a
                                            >
                                          </li>
                                          <li>
                                            <a href="#"
                                              ><em
                                                className="icon ni ni-activity-round"
                                              ></em
                                              ><span>Activities</span></a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="nk-tb-item">
                              <div className="nk-tb-col nk-tb-col-check">
                                <div
                                  className="custom-control custom-control-sm custom-checkbox notext"
                                >
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="uid4"
                                  /><label
                                    className="custom-control-label"
                                    for="uid4"
                                  ></label>
                                </div>
                              </div>
                              <div className="nk-tb-col">
                                <a href="students-details.html"
                                  ><div className="user-card">
                                    <div className="user-avatar bg-danger">
                                      <span>JM</span>
                                    </div>
                                    <div className="user-info">
                                      <span className="tb-lead"
                                        >Jane Montgomery
                                        <span
                                          className="dot dot-danger d-md-none ms-1"
                                        ></span></span
                                      ><span>jane84@example.com</span>
                                    </div>
                                  </div></a
                                >
                              </div>
                              <div className="nk-tb-col tb-col-mb">
                                <span className="tb-lead d-lg-flex d-none"
                                  >UI/UX Design with Adobe XD</span
                                >
                                <div className="d-lg-flex d-none">
                                  <div className="drodown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle pt-1 text-info"
                                      data-bs-toggle="dropdown"
                                    >
                                      <span>View More</span>
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu-start"
                                    >
                                      <ul className="link-list-opt no-bdr p-3">
                                        <li className="tb-lead p-1">
                                          SEO Optimize
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                        <li className="tb-lead p-1">
                                          UI/UX Design with Adobe XD
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span>+439 271-5360</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span>Canada</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span className="tb-status badge-dot bg-danger"
                                  >Cancelled</span
                                >
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span className="tb-status text-danger"
                                  >Suspend</span
                                >
                              </div>
                              <div className="nk-tb-col nk-tb-col-tools">
                                <ul className="nk-tb-actions gx-1">
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Send Email"
                                      ><em className="icon ni ni-mail-fill"></em
                                    ></a>
                                  </li>
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Suspend"
                                      ><em
                                        className="icon ni ni-user-cross-fill"
                                      ></em
                                    ></a>
                                  </li>
                                  <li>
                                    <div className="drodown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                        data-bs-toggle="dropdown"
                                        ><em className="icon ni ni-more-h"></em
                                      ></a>
                                      <div
                                        className="dropdown-menu dropdown-menu-end"
                                      >
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a href="students-details.html"
                                              ><em className="icon ni ni-eye"></em
                                              ><span>View Details</span></a
                                            >
                                          </li>
                                          <li>
                                            <a href="#"
                                              ><em
                                                className="icon ni ni-activity-round"
                                              ></em
                                              ><span>Activities</span></a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="nk-tb-item">
                              <div className="nk-tb-col nk-tb-col-check">
                                <div
                                  className="custom-control custom-control-sm custom-checkbox notext"
                                >
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="uid5"
                                  /><label
                                    className="custom-control-label"
                                    for="uid5"
                                  ></label>
                                </div>
                              </div>
                              <div className="nk-tb-col">
                                <a href="students-details.html"
                                  ><div className="user-card">
                                    <div className="user-avatar">
                                      <img
                                        src="../images/avatar/b-sm.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="user-info">
                                      <span className="tb-lead"
                                        >Frances Burns
                                        <span
                                          className="dot dot-success d-md-none ms-1"
                                        ></span></span
                                      ><span>frances@example.com</span>
                                    </div>
                                  </div></a
                                >
                              </div>
                              <div className="nk-tb-col tb-col-mb">
                                <span className="tb-lead d-lg-flex d-none"
                                  >Application Management</span
                                >
                                <div className="d-lg-flex d-none">
                                  <div className="drodown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle pt-1 text-info"
                                      data-bs-toggle="dropdown"
                                    >
                                      <span>View More</span>
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu-start"
                                    >
                                      <ul className="link-list-opt no-bdr p-3">
                                        <li className="tb-lead p-1">
                                          UI/UX Design with Adobe XD
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                        <li className="tb-lead p-1">
                                          Application Management
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span>+639 130-3150</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span>Australia</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span className="tb-status badge-dot bg-success"
                                  >Paid</span
                                >
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span className="tb-status text-success"
                                  >Active</span
                                >
                              </div>
                              <div className="nk-tb-col nk-tb-col-tools">
                                <ul className="nk-tb-actions gx-1">
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Send Email"
                                      ><em className="icon ni ni-mail-fill"></em
                                    ></a>
                                  </li>
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Suspend"
                                      ><em
                                        className="icon ni ni-user-cross-fill"
                                      ></em
                                    ></a>
                                  </li>
                                  <li>
                                    <div className="drodown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                        data-bs-toggle="dropdown"
                                        ><em className="icon ni ni-more-h"></em
                                      ></a>
                                      <div
                                        className="dropdown-menu dropdown-menu-end"
                                      >
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a href="students-details.html"
                                              ><em className="icon ni ni-eye"></em
                                              ><span>View Details</span></a
                                            >
                                          </li>
                                          <li>
                                            <a href="#"
                                              ><em
                                                className="icon ni ni-activity-round"
                                              ></em
                                              ><span>Activities</span></a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="nk-tb-item">
                              <div className="nk-tb-col nk-tb-col-check">
                                <div
                                  className="custom-control custom-control-sm custom-checkbox notext"
                                >
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="uid6"
                                  /><label
                                    className="custom-control-label"
                                    for="uid6"
                                  ></label>
                                </div>
                              </div>
                              <div className="nk-tb-col">
                                <a href="students-details.html"
                                  ><div className="user-card">
                                    <div className="user-avatar bg-primary">
                                      <span>AB</span>
                                    </div>
                                    <div className="user-info">
                                      <span className="tb-lead"
                                        >Abu Bin Ishtiyak
                                        <span
                                          className="dot dot-success d-md-none ms-1"
                                        ></span></span
                                      ><span>info@softnio.com</span>
                                    </div>
                                  </div></a
                                >
                              </div>
                              <div className="nk-tb-col tb-col-mb">
                                <span className="tb-lead d-lg-flex d-none"
                                  >Fornt-end Development</span
                                >
                                <div className="d-lg-flex d-none">
                                  <div className="drodown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle pt-1 text-info"
                                      data-bs-toggle="dropdown"
                                    >
                                      <span>View More</span>
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu-start"
                                    >
                                      <ul className="link-list-opt no-bdr p-3">
                                        <li className="tb-lead p-1">
                                          Application Management
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                        <li className="tb-lead p-1">
                                          UI/UX Design with Adobe XD
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span>+811 847-4958</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span>United State</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span
                                  className="badge badge-dot badge-dot bg-warning"
                                  >Due</span
                                >
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span className="tb-status text-success"
                                  >Active</span
                                >
                              </div>
                              <div className="nk-tb-col nk-tb-col-tools">
                                <ul className="nk-tb-actions gx-1">
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Send Email"
                                      ><em className="icon ni ni-mail-fill"></em
                                    ></a>
                                  </li>
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Suspend"
                                      ><em
                                        className="icon ni ni-user-cross-fill"
                                      ></em
                                    ></a>
                                  </li>
                                  <li>
                                    <div className="drodown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                        data-bs-toggle="dropdown"
                                        ><em className="icon ni ni-more-h"></em
                                      ></a>
                                      <div
                                        className="dropdown-menu dropdown-menu-end"
                                      >
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a href="students-details.html"
                                              ><em className="icon ni ni-eye"></em
                                              ><span>View Details</span></a
                                            >
                                          </li>
                                          <li>
                                            <a href="#"
                                              ><em
                                                className="icon ni ni-activity-round"
                                              ></em
                                              ><span>Activities</span></a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="nk-tb-item">
                              <div className="nk-tb-col nk-tb-col-check">
                                <div
                                  className="custom-control custom-control-sm custom-checkbox notext"
                                >
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="uid7"
                                  /><label
                                    className="custom-control-label"
                                    for="uid7"
                                  ></label>
                                </div>
                              </div>
                              <div className="nk-tb-col">
                                <a href="students-details.html"
                                  ><div className="user-card">
                                    <div className="user-avatar">
                                      <img
                                        src="../images/avatar/a-sm.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="user-info">
                                      <span className="tb-lead"
                                        >Ashley Lawson
                                        <span
                                          className="dot dot-warning d-md-none ms-1"
                                        ></span></span
                                      ><span>ashley@softnio.com</span>
                                    </div>
                                  </div></a
                                >
                              </div>
                              <div className="nk-tb-col tb-col-mb">
                                <span className="tb-lead d-lg-flex d-none"
                                  >Learn Android Development with project
                                </span>
                                <div className="d-lg-flex d-none">
                                  <div className="drodown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle pt-1 text-info"
                                      data-bs-toggle="dropdown"
                                    >
                                      <span>View More</span>
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu-start"
                                    >
                                      <ul className="link-list-opt no-bdr p-3">
                                        <li className="tb-lead p-1">
                                          Application Management
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                        <li className="tb-lead p-1">
                                          UI/UX Design with Adobe XD
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span>+124 394-1787</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span>United Kindom</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span className="tb-status badge-dot bg-success"
                                  >Paid</span
                                >
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span className="tb-status text-warning"
                                  >Inactive</span
                                >
                              </div>
                              <div className="nk-tb-col nk-tb-col-tools">
                                <ul className="nk-tb-actions gx-1">
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Send Email"
                                      ><em className="icon ni ni-mail-fill"></em
                                    ></a>
                                  </li>
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Suspend"
                                      ><em
                                        className="icon ni ni-user-cross-fill"
                                      ></em
                                    ></a>
                                  </li>
                                  <li>
                                    <div className="drodown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                        data-bs-toggle="dropdown"
                                        ><em className="icon ni ni-more-h"></em
                                      ></a>
                                      <div
                                        className="dropdown-menu dropdown-menu-end"
                                      >
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a href="students-details.html"
                                              ><em className="icon ni ni-eye"></em
                                              ><span>View Details</span></a
                                            >
                                          </li>
                                          <li>
                                            <a href="#"
                                              ><em
                                                className="icon ni ni-activity-round"
                                              ></em
                                              ><span>Activities</span></a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="nk-tb-item">
                              <div className="nk-tb-col nk-tb-col-check">
                                <div
                                  className="custom-control custom-control-sm custom-checkbox notext"
                                >
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="uid8"
                                  /><label
                                    className="custom-control-label"
                                    for="uid8"
                                  ></label>
                                </div>
                              </div>
                              <div className="nk-tb-col">
                                <a href="students-details.html"
                                  ><div className="user-card">
                                    <div className="user-avatar bg-info">
                                      <span>JL</span>
                                    </div>
                                    <div className="user-info">
                                      <span className="tb-lead"
                                        >Joe Larson
                                        <span
                                          className="dot dot-success d-md-none ms-1"
                                        ></span></span
                                      ><span>larson@example.com</span>
                                    </div>
                                  </div></a
                                >
                              </div>
                              <div className="nk-tb-col tb-col-mb">
                                <span className="tb-lead d-lg-flex d-none"
                                  >SEO Optimization</span
                                >
                                <div className="d-lg-flex d-none">
                                  <div className="drodown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle pt-1 text-info"
                                      data-bs-toggle="dropdown"
                                    >
                                      <span>View More</span>
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu-start"
                                    >
                                      <ul className="link-list-opt no-bdr p-3">
                                        <li className="tb-lead p-1">
                                          Application Management
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                        <li className="tb-lead p-1">
                                          UI/UX Design with Adobe XD
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span>+168 603-2320</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span>India</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span className="tb-status badge-dot bg-success"
                                  >Paid</span
                                >
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span className="tb-status text-success"
                                  >Active</span
                                >
                              </div>
                              <div className="nk-tb-col nk-tb-col-tools">
                                <ul className="nk-tb-actions gx-1">
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Send Email"
                                      ><em className="icon ni ni-mail-fill"></em
                                    ></a>
                                  </li>
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Suspend"
                                      ><em
                                        className="icon ni ni-user-cross-fill"
                                      ></em
                                    ></a>
                                  </li>
                                  <li>
                                    <div className="drodown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                        data-bs-toggle="dropdown"
                                        ><em className="icon ni ni-more-h"></em
                                      ></a>
                                      <div
                                        className="dropdown-menu dropdown-menu-end"
                                      >
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a href="students-details.html"
                                              ><em className="icon ni ni-eye"></em
                                              ><span>View Details</span></a
                                            >
                                          </li>
                                          <li>
                                            <a href="#"
                                              ><em
                                                className="icon ni ni-activity-round"
                                              ></em
                                              ><span>Activities</span></a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="nk-tb-item">
                              <div className="nk-tb-col nk-tb-col-check">
                                <div
                                  className="custom-control custom-control-sm custom-checkbox notext"
                                >
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="uid9"
                                  /><label
                                    className="custom-control-label"
                                    for="uid9"
                                  ></label>
                                </div>
                              </div>
                              <div className="nk-tb-col">
                                <a href="students-details.html"
                                  ><div className="user-card">
                                    <div className="user-avatar bg-danger">
                                      <span>JM</span>
                                    </div>
                                    <div className="user-info">
                                      <span className="tb-lead"
                                        >Jane Montgomery
                                        <span
                                          className="dot dot-danger d-md-none ms-1"
                                        ></span></span
                                      ><span>jane84@example.com</span>
                                    </div>
                                  </div></a
                                >
                              </div>
                              <div className="nk-tb-col tb-col-mb">
                                <span className="tb-lead d-lg-flex d-none"
                                  >Responsive Design
                                </span>
                                <div className="d-lg-flex d-none">
                                  <div className="drodown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle pt-1 text-info"
                                      data-bs-toggle="dropdown"
                                    >
                                      <span>View More</span>
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu-start"
                                    >
                                      <ul className="link-list-opt no-bdr p-3">
                                        <li className="tb-lead p-1">
                                          Application Management
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                        <li className="tb-lead p-1">
                                          UI/UX Design with Adobe XD
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span>+439 271-5360</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span>Canada</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span className="tb-status badge-dot bg-danger"
                                  >Cancelled</span
                                >
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span className="tb-status text-danger"
                                  >Suspend</span
                                >
                              </div>
                              <div className="nk-tb-col nk-tb-col-tools">
                                <ul className="nk-tb-actions gx-1">
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Send Email"
                                      ><em className="icon ni ni-mail-fill"></em
                                    ></a>
                                  </li>
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Suspend"
                                      ><em
                                        className="icon ni ni-user-cross-fill"
                                      ></em
                                    ></a>
                                  </li>
                                  <li>
                                    <div className="drodown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                        data-bs-toggle="dropdown"
                                        ><em className="icon ni ni-more-h"></em
                                      ></a>
                                      <div
                                        className="dropdown-menu dropdown-menu-end"
                                      >
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a href="students-details.html"
                                              ><em className="icon ni ni-eye"></em
                                              ><span>View Details</span></a
                                            >
                                          </li>
                                          <li>
                                            <a href="#"
                                              ><em
                                                className="icon ni ni-activity-round"
                                              ></em
                                              ><span>Activities</span></a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="nk-tb-item">
                              <div className="nk-tb-col nk-tb-col-check">
                                <div
                                  className="custom-control custom-control-sm custom-checkbox notext"
                                >
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="uid10"
                                  /><label
                                    className="custom-control-label"
                                    for="uid10"
                                  ></label>
                                </div>
                              </div>
                              <div className="nk-tb-col">
                                <a href="students-details.html"
                                  ><div className="user-card">
                                    <div className="user-avatar">
                                      <img
                                        src="../images/avatar/b-sm.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="user-info">
                                      <span className="tb-lead"
                                        >Frances Burns
                                        <span
                                          className="dot dot-success d-md-none ms-1"
                                        ></span></span
                                      ><span>frances@example.com</span>
                                    </div>
                                  </div></a
                                >
                              </div>
                              <div className="nk-tb-col tb-col-mb">
                                <span className="tb-lead d-lg-flex d-none"
                                  >Android Development</span
                                >
                                <div className="d-lg-flex d-none">
                                  <div className="drodown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle pt-1 text-info"
                                      data-bs-toggle="dropdown"
                                    >
                                      <span>View More</span>
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu-start"
                                    >
                                      <ul className="link-list-opt no-bdr p-3">
                                        <li className="tb-lead p-1">
                                          Application Management
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                        <li className="tb-lead p-1">
                                          UI/UX Design with Adobe XD
                                        </li>
                                        <li className="tb-lead p-1">
                                          Learn Android Development with project
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span>+639 130-3150</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span>Australia</span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span className="tb-status badge-dot bg-success"
                                  >Paid</span
                                >
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span className="tb-status text-success"
                                  >Active</span
                                >
                              </div>
                              <div className="nk-tb-col nk-tb-col-tools">
                                <ul className="nk-tb-actions gx-1">
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Send Email"
                                      ><em className="icon ni ni-mail-fill"></em
                                    ></a>
                                  </li>
                                  <li className="nk-tb-action-hidden">
                                    <a
                                      href="#"
                                      className="btn btn-trigger btn-icon"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Suspend"
                                      ><em
                                        className="icon ni ni-user-cross-fill"
                                      ></em
                                    ></a>
                                  </li>
                                  <li>
                                    <div className="drodown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                        data-bs-toggle="dropdown"
                                        ><em className="icon ni ni-more-h"></em
                                      ></a>
                                      <div
                                        className="dropdown-menu dropdown-menu-end"
                                      >
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a href="students-details.html"
                                              ><em className="icon ni ni-eye"></em
                                              ><span>View Details</span></a
                                            >
                                          </li>
                                          <li>
                                            <a href="#"
                                              ><em
                                                className="icon ni ni-activity-round"
                                              ></em
                                              ><span>Activities</span></a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-inner">
                          <div className="nk-block-between-md g-3">
                            <div className="g">
                              <ul
                                className="pagination justify-content-center justify-content-md-start"
                              >
                                <li className="page-item">
                                  <a className="page-link" href="#"
                                    ><em className="icon ni ni-chevrons-left"></em
                                  ></a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item">
                                  <span className="page-link"
                                    ><em className="icon ni ni-more-h"></em
                                  ></span>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">6</a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">7</a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#"
                                    ><em className="icon ni ni-chevrons-right"></em
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="g">
                              <div
                                className="pagination-goto d-flex justify-content-center justify-content-md-start gx-3"
                              >
                                <div>Page</div>
                                <div>
                                  <select
                                    className="form-select js-select2"
                                    data-search="on"
                                    data-dropdown="xs center"
                                  >
                                    <option value="page-1">1</option>
                                    <option value="page-2">2</option>
                                    <option value="page-4">4</option>
                                    <option value="page-5">5</option>
                                    <option value="page-6">6</option>
                                    <option value="page-7">7</option>
                                    <option value="page-8">8</option>
                                    <option value="page-9">9</option>
                                    <option value="page-10">10</option>
                                    <option value="page-11">11</option>
                                    <option value="page-12">12</option>
                                    <option value="page-13">13</option>
                                    <option value="page-14">14</option>
                                    <option value="page-15">15</option>
                                    <option value="page-16">16</option>
                                    <option value="page-17">17</option>
                                    <option value="page-18">18</option>
                                    <option value="page-19">19</option>
                                    <option value="page-20">20</option>
                                  </select>
                                </div>
                                <div>OF 102</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" role="dialog" id="student-add">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <a href="#" className="close" data-bs-dismiss="modal"
            ><em className="icon ni ni-cross-sm"></em
          ></a>
          <div className="modal-body modal-body-md">
            <h5 className="title">Add Students</h5>
            <ul className="nk-nav nav nav-tabs mt-n2">
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#student-info"
                  >Student Infomation</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#address-info"
                  >Address</a
                >
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="student-info">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" for="full-name"
                        >First Name</label
                      ><input
                        type="text"
                        className="form-control"
                        id="full-name"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" for="display-name"
                        >Last Name</label
                      ><input
                        type="text"
                        className="form-control"
                        id="display-name"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Course to Enroll</label>
                      <div className="form-control-wrap">
                        <select
                          className="form-select js-select2"
                          data-placeholder="Select multiple options"
                        >
                          <option value="default_option">
                            UI/UX Design with Adobe XD
                          </option>
                          <option value="option_select_name">
                            Front-end Web Development with React
                          </option>
                          <option value="option_select_name">
                            Learn Android Development with project
                          </option>
                          <option value="option_select_name">
                            Learn PHP Basic to Advance
                          </option>
                          <option value="option_select_name">
                            Learn Android Development with project
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" for="email">Email Address</label
                      ><input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" for="phone-no"
                        >Phone Number</label
                      ><input
                        type="text"
                        className="form-control"
                        id="phone-no"
                        value="+880"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" for="birth-day"
                        >Date of Birth</label
                      ><input
                        type="text"
                        className="form-control date-picker"
                        id="birth-day"
                        placeholder="Date of Birth"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Payment Methods</label>
                      <ul className="custom-control-group g-3 align-center">
                        <li>
                          <div
                            className="custom-control custom-control-sm custom-checkbox"
                          >
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="pay-card"
                            /><label className="custom-control-label" for="pay-card"
                              >Card</label
                            >
                          </div>
                        </li>
                        <li>
                          <div
                            className="custom-control custom-control-sm custom-checkbox"
                          >
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="pay-bitcoin"
                            /><label
                              className="custom-control-label"
                              for="pay-bitcoin"
                              >Bitcoin</label
                            >
                          </div>
                        </li>
                        <li>
                          <div
                            className="custom-control custom-control-sm custom-checkbox"
                          >
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="pay-cash"
                            /><label className="custom-control-label" for="pay-cash"
                              >Cash</label
                            >
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <a href="#" className="btn btn-primary">Add Student</a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-bs-dismiss="modal"
                          className="link link-light"
                          >Cancel</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="address-info">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" for="address-l1"
                        >Address Line 1</label
                      ><input
                        type="text"
                        className="form-control"
                        id="address-l1"
                        value="2337 Kildeer Drive"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" for="address-l2"
                        >Address Line 2</label
                      ><input
                        type="text"
                        className="form-control"
                        id="address-l2"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" for="address-st">State</label
                      ><input
                        type="text"
                        className="form-control"
                        id="address-st"
                        value="Kentucky"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" for="address-county"
                        >Country</label
                      ><select
                        className="form-select js-select2"
                        id="address-county"
                      >
                        <option>Canada</option>
                        <option>United State</option>
                        <option>United Kindom</option>
                        <option>Australia</option>
                        <option>India</option>
                        <option>Bangladesh</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <a href="#" className="btn btn-primary">Update Address</a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-bs-dismiss="modal"
                          className="link link-light"
                          >Cancel</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     </>
  )
}

export default Student