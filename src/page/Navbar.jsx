import React from "react";
import StudentList from "./StudentList";
import Income from "./Income";
import CourseCategory from "./CourseCategory";
import CategoryWiseIncome from "./CategoryWiseIncome";
import Top_Instructors from "./Top_Instructors";
import CentreWiseStudentChart from "./CentreWiseStudentChart";
import Student from "./Student/Student";
import InvoiceList from "./Invoice/InvoiceList";
import InvoiceDetails from "./Invoice/InvoiceDetails";
import InvoicePrint from "./Invoice/InvoicePrint";
import EnrollmentList from "./Enrollment/EnrollmentList";
import EnrollmentStudent from "./Enrollment/EnrollmentStudent";
import ActiveStudent from "./ActiveStudent";
import TotalCertificate from "./TotalCertificate";

const Navbar = () => {
  return (
    <>
      <div className="nk-app-root">
        <div className="nk-main">
          <div
            className="nk-sidebar nk-sidebar-fixed"
            data-content="sidebarMenu"
          >
            <div className="nk-sidebar-element nk-sidebar-head">
              <div className="nk-sidebar-brand">
                <a href="/#" className="logo-link nk-sidebar-logo">
                  <img
                    className="logo-light logo-img"
                    src="../images/logo.png"
                    alt="logo"
                  />
                  <img
                    className="logo-dark logo-img"
                    src="../images/logo-dark.png"
                    alt="logo-dark"
                  />
                  <img
                    className="logo-small logo-img logo-img-small"
                    src="../images/logo-small.png"
                    alt="logo-small"
                  />
                </a>
              </div>
              <div className="nk-menu-trigger me-n2">
                <a
                  href="#"
                  className="nk-nav-toggle nk-quick-nav-icon d-xl-none"
                  data-target="sidebarMenu"
                >
                  <em className="icon ni ni-arrow-left"></em>
                </a>
                <a
                  href="#"
                  className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex"
                  data-target="sidebarMenu"
                >
                  <em className="icon ni ni-menu"></em>
                </a>
              </div>
            </div>
            <div className="nk-sidebar-element">
              <div className="nk-sidebar-content">
                <div className="nk-sidebar-menu" data-simplebar>
                  <ul className="nk-menu">
                    <li className="nk-menu-item">
                      <a href="index-2.html" className="nk-menu-link">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-dashboard-fill"></em>
                        </span>
                        <span className="nk-menu-text">Dashboard</span>
                      </a>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-book-fill"></em>
                        </span>
                        <span className="nk-menu-text">Courses</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a href="category.html" className="nk-menu-link">
                            <span className="nk-menu-text">Catagories</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a href="courses.html" className="nk-menu-link">
                            <span className="nk-menu-text">Course List</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-user-fill"></em>
                        </span>
                        <span className="nk-menu-text">Instructors</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a
                            href="instructor-dashborad.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              Instructor Overview
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="instructor-list.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              Instructor List
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="instructor-details.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              Instructor Details
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="instructor-payment.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              Instructor Payment
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item">
                      <a href="students.html" className="nk-menu-link">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-users-fill"></em>
                        </span>
                        <span className="nk-menu-text">Students</span>
                      </a>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-property-add"></em>
                        </span>
                        <span className="nk-menu-text">Enrolment</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a
                            href="enroll-history.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Enroll History</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="enroll-student.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              Enroll a Student
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item">
                      <a href="message.html" className="nk-menu-link">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-chat-fill"></em>
                        </span>
                        <span className="nk-menu-text">Messages</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a href="admin-profile.html" className="nk-menu-link">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-account-setting-fill"></em>
                        </span>
                        <span className="nk-menu-text">Admin profile</span>
                      </a>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-file-docs"></em>
                        </span>
                        <span className="nk-menu-text">Invoice</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a
                            href="student-invoice-list.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Invoice List</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="student-invoice-details.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              Invoice Details
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item">
                      <a href="settings.html" className="nk-menu-link">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-setting-alt-fill"></em>
                        </span>
                        <span className="nk-menu-text">Settings</span>
                      </a>
                    </li>
                    <li className="nk-menu-heading">
                      <h6 className="overline-title text-primary-alt">
                        Return to
                      </h6>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="https://dashlite.net/demo2/index.html"
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-dashlite-alt"></em>
                        </span>
                        <span className="nk-menu-text">Main Dashboard</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="https://dashlite.net/demo2/components.html"
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-layers-fill"></em>
                        </span>
                        <span className="nk-menu-text">All Components</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="nk-wrap">
            <div className="nk-header nk-header-fixed">
              <div className="container-fluid">
                <div className="nk-header-wrap">
                  <div className="nk-menu-trigger d-xl-none ms-n1">
                    <a
                      href="#"
                      className="nk-nav-toggle nk-quick-nav-icon"
                      data-target="sidebarMenu"
                    >
                      <em className="icon ni ni-menu"></em>
                    </a>
                  </div>
                  <div className="nk-header-brand d-xl-none">
                    <a
                      href="https://dashlite.net/demo2/index.html"
                      className="logo-link"
                    >
                      <img
                        className="logo-light logo-img"
                        src="../images/logo.png"
                        alt="logo"
                      />
                      <img
                        className="logo-dark logo-img"
                        src="../images/logo-dark.png"
                        alt="logo-dark"
                      />
                    </a>
                  </div>
                  <div className="nk-header-search ms-3 ms-xl-0">
                    <em className="icon ni ni-search"></em>
                    <input
                      type="text"
                      className="form-control border-transparent form-focus-none"
                      placeholder="Search anything"
                    />
                  </div>
                  <div className="nk-header-tools">
                    <ul className="nk-quick-nav">
                      <li className="dropdown language-dropdown d-none d-sm-block me-n1">
                        <a
                          href="#"
                          className="dropdown-toggle nk-quick-nav-icon"
                          data-bs-toggle="dropdown"
                        >
                          <div className="quick-icon border border-light">
                            <img
                              className="icon"
                              src="../images/flags/english-sq.png"
                              alt=""
                            />
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-s1">
                          <ul className="language-list">
                            <li>
                              <a href="#" className="language-item">
                                <img
                                  src="../images/flags/english.png"
                                  alt=""
                                  className="language-flag"
                                />
                                <span className="language-name">English</span>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="language-item">
                                <img
                                  src="../images/flags/spanish.png"
                                  alt=""
                                  className="language-flag"
                                />
                                <span className="language-name">Español</span>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="language-item">
                                <img
                                  src="../images/flags/french.png"
                                  alt=""
                                  className="language-flag"
                                />
                                <span className="language-name">Français</span>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="language-item">
                                <img
                                  src="../images/flags/turkey.png"
                                  alt=""
                                  className="language-flag"
                                />
                                <span className="language-name">Türkçe</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown chats-dropdown hide-mb-xs">
                        <a
                          href="#"
                          className="dropdown-toggle nk-quick-nav-icon"
                          data-bs-toggle="dropdown"
                        >
                          <div className="icon-status icon-status-na">
                            <em className="icon ni ni-comments"></em>
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end">
                          <div className="dropdown-head">
                            <span className="sub-title nk-dropdown-title">
                              Recent Chats
                            </span>
                            <a href="#">Setting</a>
                          </div>
                          <div className="dropdown-body">
                            <ul className="chat-list">
                              <li className="chat-item">
                                <a className="chat-link" href="message.html">
                                  <div className="chat-media user-avatar">
                                    <span>IH</span>
                                    <span className="status dot dot-lg dot-gray"></span>
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">Iliash Hossain</div>
                                      <span className="time">Now</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        You: Please confrim if you got my last
                                        messages.
                                      </div>
                                      <div className="status delivered">
                                        <em className="icon ni ni-check-circle-fill"></em>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item is-unread">
                                <a className="chat-link" href="message.html">
                                  <div className="chat-media user-avatar bg-pink">
                                    <span>AB</span>
                                    <span className="status dot dot-lg dot-success"></span>
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">
                                        Abu Bin Ishtiyak
                                      </div>
                                      <span className="time">4:49 AM</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        Hi, I am Ishtiyak, can you help me with
                                        this problem ?
                                      </div>
                                      <div className="status unread">
                                        <em className="icon ni ni-bullet-fill"></em>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item">
                                <a className="chat-link" href="message.html">
                                  <div className="chat-media user-avatar">
                                    <img
                                      src="../images/avatar/b-sm.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">George Philips</div>
                                      <span className="time">6 Apr</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        Have you seens the claim from Rose?
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item">
                                <a className="chat-link" href="message.html">
                                  <div className="chat-media user-avatar user-avatar-multiple">
                                    <div className="user-avatar">
                                      <img
                                        src="../images/avatar/c-sm.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="user-avatar">
                                      <span>AB</span>
                                    </div>
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">Softnio Group</div>
                                      <span className="time">27 Mar</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        You: I just bought a new computer but i
                                        am having some problem
                                      </div>
                                      <div className="status sent">
                                        <em className="icon ni ni-check-circle"></em>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item">
                                <a className="chat-link" href="message.html">
                                  <div className="chat-media user-avatar">
                                    <img
                                      src="../images/avatar/a-sm.jpg"
                                      alt=""
                                    />
                                    <span className="status dot dot-lg dot-success"></span>
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">Larry Hughes</div>
                                      <span className="time">3 Apr</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        Hi Frank! How is you doing?
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item">
                                <a className="chat-link" href="message.html">
                                  <div className="chat-media user-avatar bg-purple">
                                    <span>TW</span>
                                  </div>
                                  <div className="chat-info">
                                    <div className="chat-from">
                                      <div className="name">Tammy Wilson</div>
                                      <span className="time">27 Mar</span>
                                    </div>
                                    <div className="chat-context">
                                      <div className="text">
                                        You: I just bought a new computer but i
                                        am having some problem
                                      </div>
                                      <div className="status sent">
                                        <em className="icon ni ni-check-circle"></em>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown-foot center">
                            <a href="message.html">View All</a>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown notification-dropdown">
                        <a
                          href="#"
                          className="dropdown-toggle nk-quick-nav-icon"
                          data-bs-toggle="dropdown"
                        >
                          <div className="icon-status icon-status-info">
                            <em className="icon ni ni-bell"></em>
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end">
                          <div className="dropdown-head">
                            <span className="sub-title nk-dropdown-title">
                              Notifications
                            </span>
                            <a href="#">Mark All as Read</a>
                          </div>
                          <div className="dropdown-body">
                            <div className="nk-notification">
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    You have requested to{" "}
                                    <span>Widthdrawl</span>
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    Your <span>Deposit Order</span> is placed
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    You have requested to{" "}
                                    <span>Widthdrawl</span>
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    Your <span>Deposit Order</span> is placed
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    You have requested to{" "}
                                    <span>Widthdrawl</span>
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    Your <span>Deposit Order</span> is placed
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown-foot center">
                            <a href="#">View All</a>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown user-dropdown">
                        <a
                          href="#"
                          className="dropdown-toggle me-n1"
                          data-bs-toggle="dropdown"
                        >
                          <div className="user-toggle">
                            <div className="user-avatar sm">
                              <em className="icon ni ni-user-alt"></em>
                            </div>
                            <div className="user-info d-none d-xl-block">
                              <div className="user-status user-status-active">
                                Administator
                              </div>
                              <div className="user-name dropdown-indicator">
                                Abu Bin Ishityak
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-end">
                          <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                            <div className="user-card">
                              <div className="user-avatar">
                                <span>AB</span>
                              </div>
                              <div className="user-info">
                                <span className="lead-text">
                                  Abu Bin Ishtiyak
                                </span>
                                <span className="sub-text">
                                  info@softnio.com
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown-inner">
                            <ul className="link-list">
                              <li>
                                <a href="admin-profile.html">
                                  <em className="icon ni ni-user-alt"></em>
                                  <span>View Profile</span>
                                </a>
                              </li>
                              <li>
                                <a href="admin-profile-setting.html">
                                  <em className="icon ni ni-setting-alt"></em>
                                  <span>Account Setting</span>
                                </a>
                              </li>
                              <li>
                                <a href="admin-profile-activity.html">
                                  <em className="icon ni ni-activity-alt"></em>
                                  <span>Login Activity</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown-inner">
                            <ul className="link-list">
                              <li>
                                <a href="#">
                                  <em className="icon ni ni-signout"></em>
                                  <span>Sign out</span>
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
            <div className="nk-content">
              <div className="container-fluid">
                <div className="nk-content-inner">
                  <div className="nk-content-body">
                    <div className="nk-block-head nk-block-head-sm">
                      <div className="nk-block-between">
                        <div className="nk-block-head-content">
                          <h3 className="nk-block-title page-title">
                            Dashboard
                          </h3>
                          <div className="nk-block-des text-soft">
                            <p>Welcome to Learning Management Dashboard.</p>
                          </div>
                        </div>
                        <div className="nk-block-head-content">
                          <div className="toggle-wrap nk-block-tools-toggle">
                            <a
                              href="#"
                              className="btn btn-icon btn-trigger toggle-expand me-n1"
                              data-target="pageMenu"
                            >
                              <em className="icon ni ni-more-v"></em>
                            </a>
                            <div
                              className="toggle-expand-content"
                              data-content="pageMenu"
                            >
                              <ul className="nk-block-tools g-3">
                                <li>
                                  <div className="drodown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle btn btn-white btn-dim btn-outline-light"
                                      data-bs-toggle="dropdown"
                                    >
                                      <em className="d-none d-sm-inline icon ni ni-calender-date"></em>
                                      <span>
                                        <span className="d-none d-md-inline">
                                          Last
                                        </span>
                                        30 Days
                                      </span>
                                      <em className="dd-indc icon ni ni-chevron-right"></em>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <ul className="link-list-opt no-bdr">
                                        <li>
                                          <a href="#">
                                            <span>Last 30 Days</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            <span>Last 6 Months</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            <span>Last 1 Years</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                                <li className="nk-block-tools-opt">
                                  <a href="#" className="btn btn-primary">
                                    <em className="icon ni ni-reports"></em>
                                    <span>Reports</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nk-block">
                      <div className="row g-gs">
                        <div className="col-xxl-6">
                          <div className="row g-gs">
                            <StudentList />
                            <Income />
                          </div>
                        </div>
                        <CourseCategory />
                        <CategoryWiseIncome />
                        <Top_Instructors />
                        <CentreWiseStudentChart />
                        <ActiveStudent />
                        <TotalCertificate />
                        <Student />
                        <InvoiceList />
                        <InvoiceDetails />
                        <InvoicePrint />
                        <EnrollmentList />
                        <EnrollmentStudent />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="nk-footer">
              <div className="container-fluid">
                <div className="nk-footer-wrap">
                  <div className="nk-footer-copyright">
                    &copy; 2023 DashLite. Template by
                    <a href="https://softnio.com/" target="_blank">
                      Softnio
                    </a>
                  </div>
                  <div className="nk-footer-links">
                    <ul className="nav nav-sm">
                      <li className="nav-item dropup">
                        <a
                          href="#"
                          className="dropdown-toggle dropdown-indicator has-indicator nav-link text-base"
                          data-bs-toggle="dropdown"
                          data-offset="0,10"
                        >
                          <span>English</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                          <ul className="language-list">
                            <li>
                              <a href="#" className="language-item">
                                <span className="language-name">English</span>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="language-item">
                                <span className="language-name">Español</span>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="language-item">
                                <span className="language-name">Français</span>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="language-item">
                                <span className="language-name">Türkçe</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          data-bs-toggle="modal"
                          href="#region"
                          className="nav-link"
                        >
                          <em className="icon ni ni-globe"></em>
                          <span className="ms-1">Select Region</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
