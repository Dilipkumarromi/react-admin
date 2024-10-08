import React from "react";

function EnrollmentList() {
  return (
    <>
      <div class="nk-content">
        <div class="container-fluid">
          <div class="nk-content-inner">
            <div class="nk-content-body">
              <div class="nk-block-head nk-block-head-sm">
                <div class="nk-block-between">
                  <div class="nk-block-head-content">
                    <h3 class="nk-block-title page-title">Enrollment list</h3>
                  </div>
                  <div class="nk-block-head-content">
                    <div class="toggle-wrap nk-block-tools-toggle">
                      <a
                        href="#"
                        class="btn btn-icon btn-trigger toggle-expand me-n1"
                        data-target="more-options"
                      >
                        <em class="icon ni ni-more-v"></em>
                      </a>
                      <div
                        class="toggle-expand-content"
                        data-content="more-options"
                      >
                        <ul class="nk-block-tools g-3">
                          <li>
                            <div class="form-control-wrap">
                              <div class="form-icon form-icon-right">
                                <em class="icon ni ni-search"></em>
                              </div>
                              <input
                                type="text"
                                class="form-control"
                                id="default-04"
                                placeholder="Search by name"
                              />
                            </div>
                          </li>
                          <li>
                            <div class="drodown">
                              <a
                                href="#"
                                class="dropdown-toggle dropdown-indicator btn btn-outline-light btn-white"
                                data-bs-toggle="dropdown"
                              >
                                Status
                              </a>
                              <div class="dropdown-menu dropdown-menu-end">
                                <ul class="link-list-opt no-bdr">
                                  <li>
                                    <a href="#">
                                      <span>Actived</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span>Inactived</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <span>Blocked</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li class="nk-block-tools-opt">
                            <a
                              href="enroll-student.html"
                              class="btn btn-icon btn-primary d-md-none"
                            >
                              <em class="icon ni ni-plus"></em>
                            </a>
                            <a
                              href="enroll-student.html"
                              class="btn btn-primary d-none d-md-inline-flex"
                            >
                              <em class="icon ni ni-plus"></em>
                              <span>Add</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="nk-block">
                <div class="card">
                  <div class="card-inner-group">
                    <div class="card-inner p-0">
                      <div class="nk-tb-list nk-tb-ulist">
                        <div class="nk-tb-item nk-tb-head">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid"
                              />
                              <label
                                class="custom-control-label"
                                for="uid"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <span class="sub-text">User</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span class="sub-text">Phone</span>
                          </div>
                          <div class="nk-tb-col tb-col-mb">
                            <span class="sub-text">Enrolled Courses</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <span class="sub-text">Enrollment date</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span class="sub-text">Status</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-1 my-n1">
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-mail"></em>
                                          <span>Send Email to All</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-na"></em>
                                          <span>Suspend Selected</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-trash"></em>
                                          <span>Remove Seleted</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid1"
                              />
                              <label
                                class="custom-control-label"
                                for="uid1"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <a href="#">
                              <div class="user-card">
                                <div class="user-avatar bg-primary">
                                  <span>AB</span>
                                </div>
                                <div class="user-info">
                                  <span class="tb-lead">
                                    Abu Bin Ishtiyak
                                    <span class="dot dot-success d-md-none ms-1"></span>
                                  </span>
                                  <span>info@softnio.com</span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+811 758-756433</span>
                          </div>
                          <div class="nk-tb-col tb-col-mb">
                            <div class="text-primary tb-lead">
                              UI/UX Design with Adobe XD
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <span>10-01-21</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span class="tb-status text-warning">Waiting</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-1">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="students-details.html">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-activity-round"></em>
                                          <span>Activities</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid2"
                              />
                              <label
                                class="custom-control-label"
                                for="uid2"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <a href="#">
                              <div class="user-card">
                                <div class="user-avatar">
                                  <img src="../images/avatar/c-sm.jpg" alt="" />
                                </div>
                                <div class="user-info">
                                  <span class="tb-lead">
                                    Ashley Lawson
                                    <span class="dot dot-warning d-md-none ms-1"></span>
                                  </span>
                                  <span>ashley@softnio.com</span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+811 758-756433</span>
                          </div>
                          <div class="nk-tb-col tb-col-mb">
                            <div class="text-primary tb-lead">
                              Front-end Web Development with React
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <span>10-01-21</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span class="tb-status text-success">Accepted</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-1">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="students-details.html">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-activity-round"></em>
                                          <span>Activities</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid3"
                              />
                              <label
                                class="custom-control-label"
                                for="uid3"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <a href="#">
                              <div class="user-card">
                                <div class="user-avatar bg-info">
                                  <span>JL</span>
                                </div>
                                <div class="user-info">
                                  <span class="tb-lead">
                                    Joe Larson
                                    <span class="dot dot-success d-md-none ms-1"></span>
                                  </span>
                                  <span>larson@example.com</span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+811 987-4958</span>
                          </div>
                          <div class="nk-tb-col tb-col-mb">
                            <div class="text-primary tb-lead">
                              UI/UX Design with Adobe XD
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <span>10-01-21</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span class="tb-status text-success">Accepted</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-1">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="students-details.html">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-activity-round"></em>
                                          <span>Activities</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid4"
                              />
                              <label
                                class="custom-control-label"
                                for="uid4"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar bg-danger">
                                <span>JM</span>
                              </div>
                              <div class="user-info">
                                <span class="tb-lead">
                                  Jane Mont
                                  <span class="dot dot-danger d-md-none ms-1"></span>
                                </span>
                                <span>jane84@example.com</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+811 765-4958</span>
                          </div>
                          <div class="nk-tb-col tb-col-mb">
                            <div class="text-primary tb-lead">
                              Learn Android Development with project
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <span>10-07-21</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span class="tb-status text-warning">Waiting</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-1">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="students-details.html">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-activity-round"></em>
                                          <span>Activities</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid5"
                              />
                              <label
                                class="custom-control-label"
                                for="uid5"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar">
                                <img src="../images/avatar/a-sm.jpg" alt="" />
                              </div>
                              <div class="user-info">
                                <span class="tb-lead">
                                  Frances Burns
                                  <span class="dot dot-success d-md-none ms-1"></span>
                                </span>
                                <span>frances@example.com</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+639 130-3150</span>
                          </div>
                          <div class="nk-tb-col tb-col-mb">
                            <div class="text-primary tb-lead">
                              Learn Android Development with project
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <span>10-08-21</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span class="tb-status text-danger">Rejected</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-1">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="students-details.html">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-activity-round"></em>
                                          <span>Activities</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid6"
                              />
                              <label
                                class="custom-control-label"
                                for="uid6"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <a href="#">
                              <div class="user-card">
                                <div class="user-avatar bg-primary">
                                  <span>AB</span>
                                </div>
                                <div class="user-info">
                                  <span class="tb-lead">
                                    Abu Bin Ishtiyak
                                    <span class="dot dot-success d-md-none ms-1"></span>
                                  </span>
                                  <span>info@softnio.com</span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+811 758-756433</span>
                          </div>
                          <div class="nk-tb-col tb-col-mb">
                            <div class="text-primary tb-lead">
                              UI/UX Design with Adobe XD
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <span>10-01-21</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span class="tb-status text-warning">Waiting</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-1">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="students-details.html">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-activity-round"></em>
                                          <span>Activities</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid7"
                              />
                              <label
                                class="custom-control-label"
                                for="uid7"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <a href="#">
                              <div class="user-card">
                                <div class="user-avatar">
                                  <img src="../images/avatar/c-sm.jpg" alt="" />
                                </div>
                                <div class="user-info">
                                  <span class="tb-lead">
                                    Ashley Lawson
                                    <span class="dot dot-warning d-md-none ms-1"></span>
                                  </span>
                                  <span>ashley@softnio.com</span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+811 758-756433</span>
                          </div>
                          <div class="nk-tb-col tb-col-mb">
                            <div class="text-primary tb-lead">
                              Front-end Web Development with React
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <span>10-01-21</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span class="tb-status text-success">Accepted</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-1">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="students-details.html">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-activity-round"></em>
                                          <span>Activities</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid8"
                              />
                              <label
                                class="custom-control-label"
                                for="uid8"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <a href="#">
                              <div class="user-card">
                                <div class="user-avatar bg-info">
                                  <span>JL</span>
                                </div>
                                <div class="user-info">
                                  <span class="tb-lead">
                                    Joe Larson
                                    <span class="dot dot-success d-md-none ms-1"></span>
                                  </span>
                                  <span>larson@example.com</span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+811 987-4958</span>
                          </div>
                          <div class="nk-tb-col tb-col-mb">
                            <div class="text-primary tb-lead">
                              UI/UX Design with Adobe XD
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <span>10-01-21</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span class="tb-status text-success">Accepted</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-1">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="students-details.html">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-activity-round"></em>
                                          <span>Activities</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid9"
                              />
                              <label
                                class="custom-control-label"
                                for="uid9"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar bg-danger">
                                <span>JM</span>
                              </div>
                              <div class="user-info">
                                <span class="tb-lead">
                                  Jane Mont
                                  <span class="dot dot-danger d-md-none ms-1"></span>
                                </span>
                                <span>jane84@example.com</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+811 765-4958</span>
                          </div>
                          <div class="nk-tb-col tb-col-mb">
                            <div class="text-primary tb-lead">
                              Learn Android Development with project
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <span>10-07-21</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span class="tb-status text-warning">Waiting</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-1">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="students-details.html">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-activity-round"></em>
                                          <span>Activities</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid10"
                              />
                              <label
                                class="custom-control-label"
                                for="uid10"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar">
                                <img src="../images/avatar/a-sm.jpg" alt="" />
                              </div>
                              <div class="user-info">
                                <span class="tb-lead">
                                  Frances Burns
                                  <span class="dot dot-success d-md-none ms-1"></span>
                                </span>
                                <span>frances@example.com</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+639 130-3150</span>
                          </div>
                          <div class="nk-tb-col tb-col-mb">
                            <div class="text-primary tb-lead">
                              Learn Android Development with project
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <span>10-08-21</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span class="tb-status text-danger">Rejected</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-1">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-trigger btn-icon"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="students-details.html">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-activity-round"></em>
                                          <span>Activities</span>
                                        </a>
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
                    <div class="card-inner">
                      <div class="nk-block-between-md g-3">
                        <div class="g">
                          <ul class="pagination justify-content-center justify-content-md-start">
                            <li class="page-item">
                              <a class="page-link" href="#">
                                <em class="icon ni ni-chevrons-left"></em>
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li class="page-item">
                              <span class="page-link">
                                <em class="icon ni ni-more-h"></em>
                              </span>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                6
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                7
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="#">
                                <em class="icon ni ni-chevrons-right"></em>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="g">
                          <div class="pagination-goto d-flex justify-content-center justify-content-md-start gx-3">
                            <div>Page</div>
                            <div>
                              <select
                                class="form-select js-select2"
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
    </>
  );
}

export default EnrollmentList;
