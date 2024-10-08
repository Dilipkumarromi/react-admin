import React from "react";

function EnrollmentStudent() {
  return (
    <>
      <div class="nk-content">
        <div class="container-fluid">
          <div class="nk-content-inner">
            <div class="nk-content-body">
              <div class="nk-block-head nk-block-head-sm">
                <div class="nk-block-between g-3">
                  <div class="nk-block-head-content">
                    <h3 class="nk-block-title page-title">Enroll a student</h3>
                  </div>
                </div>
              </div>
              <div class="nk-block">
                <div class="card">
                  <div class="card-inner">
                    <div class="row gy-4">
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-label">Select an user</label>
                          <div class="form-control-wrap">
                            <select
                              class="form-select js-select2"
                              data-search="on"
                            >
                              <option value="default_option">
                                Abu Bin Ishtiyak
                              </option>
                              <option value="option_select_name">
                                Frances Burns
                              </option>
                              <option value="option_select_name">
                                Patrick Newman
                              </option>
                              <option value="option_select_name">
                                Jane Harris
                              </option>
                              <option value="option_select_name">
                                Victoria Lynch
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-label">Course to enrol</label>
                          <div class="form-control-wrap">
                            <select
                              class="form-select js-select2"
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
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-label">Country</label>
                          <div class="form-control-wrap">
                            <select
                              class="form-select js-select2"
                              data-placeholder="Select multiple options"
                            >
                              <option value="default_option">
                                United State
                              </option>
                              <option value="option_select_name">
                                United Kindom
                              </option>
                              <option value="option_select_name">India</option>
                              <option value="option_select_name">Canada</option>
                              <option value="option_select_name">
                                Australia
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-label">State</label>
                          <div class="form-control-wrap">
                            <select
                              class="form-select js-select2"
                              data-placeholder="Select multiple options"
                            >
                              <option value="default_option">
                                United State
                              </option>
                              <option value="option_select_name">
                                United Kindom
                              </option>
                              <option value="option_select_name">India</option>
                              <option value="option_select_name">Canada</option>
                              <option value="option_select_name">
                                Australia
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-label">Payment Method</label>
                          <div class="form-control-wrap">
                            <select
                              class="form-select js-select2"
                              data-placeholder="Select multiple options"
                            >
                              <option value="default_option">Card</option>
                              <option value="option_select_name">
                                Bitcoin
                              </option>
                              <option value="option_select_name">Cash</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-label" for="phone-no">
                            Phone
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="phone-no"
                            placeholder="Phone no"
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-label" for="email">
                            Email Address
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-label" for="address">
                            Current address
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="address"
                            placeholder="Current address"
                          />
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="form-label" for="student-id">
                            Student Id
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="student-id"
                            placeholder="Student Id"
                          />
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <ul class="preview-list">
                          <li class="preview-item">
                            <button type="button" class="btn btn-primary">
                              Enroll Student
                            </button>
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
      </div>
    </>
  );
}

export default EnrollmentStudent;
