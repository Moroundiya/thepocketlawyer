import React from 'react'
import '../audio.css';
import '../audio-feather.css';
import '../audio-jquery';
import '../audio-script'
import '../audio-boot'
import '../sticky-sidebar'
import '../rocket'
import '../slimscroll'
import '../history'
import '../select2'
import '../feather-pro'
import '../datatable'
import '../select2.css'
import '../summernote'

function File_Manager() {
    return (
        <div id='file-manager-container'>
            <div className="main-wrapper">
                <div className="header">
                    <div className="header-left active">
                        <a href="https://dreamspos.dreamstechnologies.com/html/template/index.html" className="logo logo-normal">
                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/logo.png" alt="" />
                        </a>
                        <a href="https://dreamspos.dreamstechnologies.com/html/template/index.html" className="logo logo-white">
                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/logo-white.png" alt="" />
                        </a>
                        <a href="https://dreamspos.dreamstechnologies.com/html/template/index.html" className="logo-small">
                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/logo-small.png" alt="" />
                        </a>
                        <a id="toggle_btn" href="javascript:void(0);">
                            <i data-feather="chevrons-left" className="feather-16" />
                        </a>
                    </div>
                    <a id="mobile_btn" className="mobile_btn" href="file-manager.html#sidebar">
                        <span className="bar-icon">
                            <span />
                            <span />
                            <span />
                        </span>
                    </a>
                    <ul className="nav user-menu">
                        <li className="nav-item nav-searchinputs">
                            <div className="top-nav-search">
                                <a href="javascript:void(0);" className="responsive-search">
                                    <i className="fa fa-search" />
                                </a>
                                <form action="file-manager.html#" className="dropdown">
                                    <div className="searchinputs dropdown-toggle" id="dropdownMenuClickable" data-bs-toggle="dropdown">
                                        <input type="text" placeholder="Search" />
                                        <div className="search-addon">
                                            <span><i data-feather="x-circle" className="feather-14" /></span>
                                        </div>
                                    </div>
                                    <div className="dropdown-menu search-dropdown" aria-labelledby="dropdownMenuClickable">
                                        <div className="search-info">
                                            <h6><span><i data-feather="search" className="feather-16" /></span>Recent Searches
                                            </h6>
                                            <ul className="search-tags">
                                                <li><a href="javascript:void(0);">Products</a></li>
                                                <li><a href="javascript:void(0);">Sales</a></li>
                                                <li><a href="javascript:void(0);">Applications</a></li>
                                            </ul>
                                        </div>
                                        <div className="search-info">
                                            <h6><span><i data-feather="help-circle" className="feather-16" /></span>Help</h6>
                                            <p>How to Change Product Volume from 0 to 200 on Inventory management</p>
                                            <p>Change Product Name</p>
                                        </div>
                                        <div className="search-info">
                                            <h6><span><i data-feather="user" className="feather-16" /></span>Customers</h6>
                                            <ul className="customers">
                                                <li><a href="javascript:void(0);">Aron Varu<img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avator1.jpg" alt="" className="img-fluid" /></a></li>
                                                <li><a href="javascript:void(0);">Jonita<img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg" alt="" className="img-fluid" /></a></li>
                                                <li><a href="javascript:void(0);">Aaron<img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avatar-10.jpg" alt="" className="img-fluid" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        <li className="nav-item dropdown has-arrow main-drop select-store-dropdown">
                            <a href="javascript:void(0);" className="dropdown-toggle nav-link select-store" data-bs-toggle="dropdown">
                                <span className="user-info">
                                    <span className="user-letter">
                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/store/store-01.png" alt="Store Logo" className="img-fluid" />
                                    </span>
                                    <span className="user-detail">
                                        <span className="user-name">Select Store</span>
                                    </span>
                                </span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="javascript:void(0);" className="dropdown-item">
                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/store/store-01.png" alt="Store Logo" className="img-fluid" /> Grocery Alpha
                                </a>
                                <a href="javascript:void(0);" className="dropdown-item">
                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/store/store-02.png" alt="Store Logo" className="img-fluid" /> Grocery Apex
                                </a>
                                <a href="javascript:void(0);" className="dropdown-item">
                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/store/store-03.png" alt="Store Logo" className="img-fluid" /> Grocery Bevy
                                </a>
                                <a href="javascript:void(0);" className="dropdown-item">
                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/store/store-04.png" alt="Store Logo" className="img-fluid" /> Grocery Eden
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown has-arrow flag-nav nav-item-box">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0);" role="button">
                                <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/flags/us.png" alt="Language" className="img-fluid" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="javascript:void(0);" className="dropdown-item active">
                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/flags/us.png" alt="" height={16} /> English
                                </a>
                                <a href="javascript:void(0);" className="dropdown-item">
                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/flags/fr.png" alt="" height={16} /> French
                                </a>
                                <a href="javascript:void(0);" className="dropdown-item">
                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/flags/es.png" alt="" height={16} /> Spanish
                                </a>
                                <a href="javascript:void(0);" className="dropdown-item">
                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/flags/de.png" alt="" height={16} /> German
                                </a>
                            </div>
                        </li>
                        <li className="nav-item nav-item-box">
                            <a href="javascript:void(0);" id="btnFullscreen">
                                <i data-feather="maximize" />
                            </a>
                        </li>
                        <li className="nav-item nav-item-box">
                            <a href="https://dreamspos.dreamstechnologies.com/html/template/email.html">
                                <i data-feather="mail" />
                                <span className="badge rounded-pill">1</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown nav-item-box">
                            <a href="javascript:void(0);" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                                <i data-feather="bell" /><span className="badge rounded-pill">2</span>
                            </a>
                            <div className="dropdown-menu notifications">
                                <div className="topnav-dropdown-header">
                                    <span className="notification-title">Notifications</span>
                                    <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
                                </div>
                                <div className="noti-content">
                                    <ul className="notification-list">
                                        <li className="notification-message">
                                            <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
                                                <div className="media d-flex">
                                                    <span className="avatar flex-shrink-0">
                                                        <img alt="" src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg" />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details"><span className="noti-title">John Doe</span> added
                                                            new task <span className="noti-title">Patient appointment booking</span>
                                                        </p>
                                                        <p className="noti-time"><span className="notification-time">4 mins ago</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-message">
                                            <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
                                                <div className="media d-flex">
                                                    <span className="avatar flex-shrink-0">
                                                        <img alt="" src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avatar-03.jpg" />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details"><span className="noti-title">Tarah Shropshire</span>
                                                            changed the task name <span className="noti-title">Appointment booking
                                                                with payment gateway</span></p>
                                                        <p className="noti-time"><span className="notification-time">6 mins ago</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-message">
                                            <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
                                                <div className="media d-flex">
                                                    <span className="avatar flex-shrink-0">
                                                        <img alt="" src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avatar-06.jpg" />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details"><span className="noti-title">Misty Tison</span>
                                                            added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                                                        <p className="noti-time"><span className="notification-time">8 mins ago</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-message">
                                            <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
                                                <div className="media d-flex">
                                                    <span className="avatar flex-shrink-0">
                                                        <img alt="" src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avatar-17.jpg" />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details"><span className="noti-title">Rolland Webber</span>
                                                            completed task <span className="noti-title">Patient and Doctor video
                                                                conferencing</span></p>
                                                        <p className="noti-time"><span className="notification-time">12 mins ago</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-message">
                                            <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">
                                                <div className="media d-flex">
                                                    <span className="avatar flex-shrink-0">
                                                        <img alt="" src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avatar-13.jpg" />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span>
                                                            added new task <span className="noti-title">Private chat module</span>
                                                        </p>
                                                        <p className="noti-time"><span className="notification-time">2 days ago</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="topnav-dropdown-footer">
                                    <a href="https://dreamspos.dreamstechnologies.com/html/template/activities.html">View all Notifications</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item nav-item-box">
                            <a href="https://dreamspos.dreamstechnologies.com/html/template/general-settings.html"><i data-feather="settings" /></a>
                        </li>
                        <li className="nav-item dropdown has-arrow main-drop">
                            <a href="javascript:void(0);" className="dropdown-toggle nav-link userset" data-bs-toggle="dropdown">
                                <span className="user-info">
                                    <span className="user-letter">
                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avator1.jpg" alt="" className="img-fluid" />
                                    </span>
                                    <span className="user-detail">
                                        <span className="user-name">John Smilga</span>
                                        <span className="user-role">Super Admin</span>
                                    </span>
                                </span>
                            </a>
                            <div className="dropdown-menu menu-drop-user">
                                <div className="profilename">
                                    <div className="profileset">
                                        <span className="user-img"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/avator1.jpg" alt="" />
                                            <span className="status online" /></span>
                                        <div className="profilesets">
                                            <h6>John Smilga</h6>
                                            <h5>Super Admin</h5>
                                        </div>
                                    </div>
                                    <hr className="m-0" />
                                    <a className="dropdown-item" href="https://dreamspos.dreamstechnologies.com/html/template/profile.html"> <i className="me-2" data-feather="user" /> My
                                        Profile</a>
                                    <a className="dropdown-item" href="https://dreamspos.dreamstechnologies.com/html/template/general-settings.html"><i className="me-2" data-feather="settings" />Settings</a>
                                    <hr className="m-0" />
                                    <a className="dropdown-item logout pb-0" href="https://dreamspos.dreamstechnologies.com/html/template/signin.html"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/log-out.svg" className="me-2" alt="img" />Logout</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="dropdown mobile-user-menu">
                        <a href="javascript:void(0);" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="https://dreamspos.dreamstechnologies.com/html/template/profile.html">My Profile</a>
                            <a className="dropdown-item" href="https://dreamspos.dreamstechnologies.com/html/template/general-settings.html">Settings</a>
                            <a className="dropdown-item" href="https://dreamspos.dreamstechnologies.com/html/template/signin.html">Logout</a>
                        </div>
                    </div>
                </div>
                <div className="sidebar" id="sidebar">
                    <div className="sidebar-inner slimscroll">
                        <div id="sidebar-menu" className="sidebar-menu">
                            <ul>
                                <li className="submenu-open">
                                    <h6 className="submenu-hdr">Main</h6>
                                    <ul>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="grid" /><span>Dashboard</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/index.html">Admin Dashboard</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sales-dashboard.html">Sales Dashboard</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);" className="active subdrop"><i data-feather="smartphone" /><span>Application</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chat.html">Chat</a></li>
                                                <li className="submenu submenu-two"><a href="javascript:void(0);">Call<span className="menu-arrow inside-submenu" /></a>
                                                    <ul>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/video-call.html">Video Call</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/audio-call.html">Audio Call</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/call-history.html">Call History</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/calendar.html">Calendar</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email.html">Email</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/todo.html">To Do</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/notes.html">Notes</a></li>
                                                <li><a href="file-manager.html" className="active">File Manager</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 className="submenu-hdr">Inventory</h6>
                                    <ul>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html"><i data-feather="box" /><span>Products</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/add-product.html"><i data-feather="plus-square" /><span>Create Product</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/expired-products.html"><i data-feather="codesandbox" /><span>Expired Products</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/low-stocks.html"><i data-feather="trending-down" /><span>Low Stocks</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/category-list.html"><i data-feather="codepen" /><span>Category</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sub-categories.html"><i data-feather="speaker" /><span>Sub Category</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/brand-list.html"><i data-feather="tag" /><span>Brands</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/units.html"><i data-feather="speaker" /><span>Units</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/varriant-attributes.html"><i data-feather="layers" /><span>Variant Attributes</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/warranty.html"><i data-feather="bookmark" /><span>Warranties</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/barcode.html"><i data-feather="align-justify" /><span>Print Barcode</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/qrcode.html"><i data-feather="maximize" /><span>Print QR Code</span></a></li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 className="submenu-hdr">Stock</h6>
                                    <ul>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/manage-stocks.html"><i data-feather="package" /><span>Manage Stock</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/stock-adjustment.html"><i data-feather="clipboard" /><span>Stock Adjustment</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/stock-transfer.html"><i data-feather="truck" /><span>Stock Transfer</span></a></li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 className="submenu-hdr">Sales</h6>
                                    <ul>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sales-list.html"><i data-feather="shopping-cart" /><span>Sales</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/invoice-report.html"><i data-feather="file-text" /><span>Invoices</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sales-returns.html"><i data-feather="copy" /><span>Sales Return</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/quotation-list.html"><i data-feather="save" /><span>Quotation</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/pos.html"><i data-feather="hard-drive" /><span>POS</span></a></li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 className="submenu-hdr">Promo</h6>
                                    <ul>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/coupons.html"><i data-feather="shopping-cart" /><span>Coupons</span></a></li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 className="submenu-hdr">Purchases</h6>
                                    <ul>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/purchase-list.html"><i data-feather="shopping-bag" /><span>Purchases</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/purchase-order-report.html"><i data-feather="file-minus" /><span>Purchase Order</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/purchase-returns.html"><i data-feather="refresh-cw" /><span>Purchase Return</span></a></li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 className="submenu-hdr">Finance &amp; Accounts</h6>
                                    <ul>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="file-text" /><span>Expenses</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/expense-list.html">Expenses</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/expense-category.html">Expense Category</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 className="submenu-hdr">Peoples</h6>
                                    <ul>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/customers.html"><i data-feather="user" /><span>Customers</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/suppliers.html"><i data-feather="users" /><span>Suppliers</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/store-list.html"><i data-feather="home" /><span>Stores</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/warehouse.html"><i data-feather="archive" /><span>Warehouses</span></a></li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 className="submenu-hdr">HRM</h6>
                                    <ul>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/employees-grid.html"><i data-feather="user" /><span>Employees</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/department-grid.html"><i data-feather="users" /><span>Departments</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/designation.html"><i data-feather="git-merge" /><span>Designation</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/shift.html"><i data-feather="shuffle" /><span>Shifts</span></a></li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="book-open" /><span>Attendence</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/attendance-employee.html">Employee</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/attendance-admin.html">Admin</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="calendar" /><span>Leaves</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/leaves-admin.html">Admin Leaves</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/leaves-employee.html">Employee Leaves</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/leave-types.html">Leave Types</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/holidays.html"><i data-feather="credit-card" /><span>Holidays</span></a></li>
                                        <li className="submenu">
                                            <a href="https://dreamspos.dreamstechnologies.com/html/template/payroll-list.html"><i data-feather="dollar-sign" /><span>Payroll</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/payroll-list.html">Employee Salary</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/payslip.html">Payslip</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 className="submenu-hdr">Reports</h6>
                                    <ul>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sales-report.html"><i data-feather="bar-chart-2" /><span>Sales Report</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/purchase-report.html"><i data-feather="pie-chart" /><span>Purchase report</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/inventory-report.html"><i data-feather="inbox" /><span>Inventory Report</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/invoice-report.html"><i data-feather="file" /><span>Invoice Report</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/supplier-report.html"><i data-feather="user-check" /><span>Supplier Report</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/customer-report.html"><i data-feather="user" /><span>Customer Report</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/expense-report.html"><i data-feather="file" /><span>Expense Report</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/income-report.html"><i data-feather="bar-chart" /><span>Income Report</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/tax-reports.html"><i data-feather="database" /><span>Tax Report</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/profit-and-loss.html"><i data-feather="pie-chart" /><span>Profit &amp; Loss</span></a></li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 className="submenu-hdr">User Management</h6>
                                    <ul>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/users.html"><i data-feather="user-check" /><span>Users</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/roles-permissions.html"><i data-feather="shield" /><span>Roles &amp; Permissions</span></a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/delete-account.html"><i data-feather="lock" /><span>Delete Account Request</span></a></li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 className="submenu-hdr">Pages</h6>
                                    <ul>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/profile.html"><i data-feather="user" /><span>Profile</span></a></li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="shield" /><span>Authentication</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li className="submenu submenu-two"><a href="javascript:void(0);">Login<span className="menu-arrow inside-submenu" /></a>
                                                    <ul>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/signin.html">Cover</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/signin-2.html">Illustration</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/signin-3.html">Basic</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu submenu-two"><a href="javascript:void(0);">Register<span className="menu-arrow inside-submenu" /></a>
                                                    <ul>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/register.html">Cover</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/register-2.html">Illustration</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/register-3.html">Basic</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu submenu-two"><a href="javascript:void(0);">Forgot Password<span className="menu-arrow inside-submenu" /></a>
                                                    <ul>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/forgot-password.html">Cover</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/forgot-password-2.html">Illustration</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/forgot-password-3.html">Basic</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu submenu-two"><a href="javascript:void(0);">Reset Password<span className="menu-arrow inside-submenu" /></a>
                                                    <ul>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/reset-password.html">Cover</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/reset-password-2.html">Illustration</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/reset-password-3.html">Basic</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu submenu-two"><a href="javascript:void(0);">Email Verification<span className="menu-arrow inside-submenu" /></a>
                                                    <ul>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email-verification.html">Cover</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email-verification-2.html">Illustration</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email-verification-3.html">Basic</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu submenu-two"><a href="javascript:void(0);">2 Step Verification<span className="menu-arrow inside-submenu" /></a>
                                                    <ul>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/two-step-verification.html">Cover</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/two-step-verification-2.html">Illustration</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/two-step-verification-3.html">Basic</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/lock-screen.html">Lock Screen</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="file-minus" /><span>Error Pages</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/error-404.html">404 Error </a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/error-500.html">500 Error </a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="map" /><span>Places</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/countries.html">Countries</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/states.html">States</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="https://dreamspos.dreamstechnologies.com/html/template/blank-page.html"><i data-feather="file" /><span>Blank Page</span> </a>
                                        </li>
                                        <li>
                                            <a href="https://dreamspos.dreamstechnologies.com/html/template/coming-soon.html"><i data-feather="send" /><span>Coming Soon</span> </a>
                                        </li>
                                        <li>
                                            <a href="https://dreamspos.dreamstechnologies.com/html/template/under-maintenance.html"><i data-feather="alert-triangle" /><span>Under Maintenance</span> </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 className="submenu-hdr">Settings</h6>
                                    <ul>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="settings" /><span>General Settings</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/general-settings.html">Profile</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/security-settings.html">Security</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/notification.html">Notifications</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/connected-apps.html">Connected Apps</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="globe" /><span>Website Settings</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/system-settings.html">System Settings</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/company-settings.html">Company Settings </a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/localization-settings.html">Localization</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/prefixes.html">Prefixes</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/preference.html">Preference</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/appearance.html">Appearance</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/social-authentication.html">Social Authentication</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/language-settings.html">Language</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="smartphone" /><span>App Settings</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/invoice-settings.html">Invoice</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/printer-settings.html">Printer</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/pos-settings.html">POS</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/custom-fields.html">Custom Fields</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="monitor" /><span>System Settings</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email-settings.html">Email</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sms-gateway.html">SMS Gateways</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/otp-settings.html">OTP</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/gdpr-settings.html">GDPR Cookies</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="dollar-sign" /><span>Financial Settings</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/payment-gateway-settings.html">Payment Gateway</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/bank-settings-grid.html">Bank Accounts</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/tax-rates.html">Tax Rates</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/currency-settings.html">Currencies</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="hexagon" /><span>Other Settings</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/storage-settings.html">Storage</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ban-ip-address.html">Ban IP Address</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="https://dreamspos.dreamstechnologies.com/html/template/signin.html"><i data-feather="log-out" /><span>Logout</span> </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 className="submenu-hdr">UI Interface</h6>
                                    <ul>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i data-feather="layers" /><span>Base UI</span><span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-alerts.html">Alerts</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-accordion.html">Accordion</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-avatar.html">Avatar</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-badges.html">Badges</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-borders.html">Border</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-buttons.html">Buttons</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-buttons-group.html">Button Group</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-breadcrumb.html">Breadcrumb</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-cards.html">Card</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-carousel.html">Carousel</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-colors.html">Colors</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-dropdowns.html">Dropdowns</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-grid.html">Grid</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-images.html">Images</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-lightbox.html">Lightbox</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-media.html">Media</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-modals.html">Modals</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-offcanvas.html">Offcanvas</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-pagination.html">Pagination</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-popovers.html">Popovers</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-progress.html">Progress</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-placeholders.html">Placeholders</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-rangeslider.html">Range Slider</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-spinner.html">Spinner</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-sweetalerts.html">Sweet Alerts</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-nav-tabs.html">Tabs</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-toasts.html">Toasts</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-tooltips.html">Tooltips</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-typography.html">Typography</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-video.html">Video</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i data-feather="layers" /><span>Advanced UI</span><span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-ribbon.html">Ribbon</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-clipboard.html">Clipboard</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-drag-drop.html">Drag &amp; Drop</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-rangeslider.html">Range Slider</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-rating.html">Rating</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-text-editor.html">Text Editor</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-counter.html">Counter</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-scrollbar.html">Scrollbar</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-stickynote.html">Sticky Note</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-timeline.html">Timeline</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="bar-chart-2" /><span>Charts</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-apex.html">Apex Charts</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-c3.html">Chart C3</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-js.html">Chart Js</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-morris.html">Morris Charts</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-flot.html">Flot Charts</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-peity.html">Peity Charts</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="database" /><span>Icons</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-fontawesome.html">Fontawesome Icons</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-feather.html">Feather Icons</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-ionic.html">Ionic Icons</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-material.html">Material Icons</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-pe7.html">Pe7 Icons</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-simpleline.html">Simpleline Icons</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-themify.html">Themify Icons</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-weather.html">Weather Icons</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-typicon.html">Typicon Icons</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-flag.html">Flag Icons</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);">
                                                <i data-feather="edit" /><span>Forms</span><span className="menu-arrow" />
                                            </a>
                                            <ul>
                                                <li className="submenu submenu-two">
                                                    <a href="javascript:void(0);">Form Elements<span className="menu-arrow inside-submenu" /></a>
                                                    <ul>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-basic-inputs.html">Basic Inputs</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-checkbox-radios.html">Checkbox &amp; Radios</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-input-groups.html">Input Groups</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-grid-gutters.html">Grid &amp; Gutters</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-select.html">Form Select</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-mask.html">Input Masks</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-fileupload.html">File Uploads</a></li>
                                                    </ul>
                                                </li>
                                                <li className="submenu submenu-two">
                                                    <a href="javascript:void(0);">Layouts<span className="menu-arrow inside-submenu" /></a>
                                                    <ul>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-horizontal.html">Horizontal Form</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-vertical.html">Vertical Form</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-floating-labels.html">Floating Labels</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-validation.html">Form Validation</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-select2.html">Select2</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-wizard.html">Form Wizard</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="columns" /><span>Tables</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/tables-basic.html">Basic Tables </a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/data-tables.html">Data Table </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="submenu-open">
                                    <h6 className="submenu-hdr">Help</h6>
                                    <ul>
                                        <li><a href="javascript:void(0);"><i data-feather="file-text" /><span>Documentation</span></a></li>
                                        <li><a href="javascript:void(0);"><i data-feather="lock" /><span>Changelog v2.0.7</span></a></li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);"><i data-feather="file-minus" /><span>Multi Level</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="javascript:void(0);">Level 1.1</a></li>
                                                <li className="submenu submenu-two"><a href="javascript:void(0);">Level 1.2<span className="menu-arrow inside-submenu" /></a>
                                                    <ul>
                                                        <li><a href="javascript:void(0);">Level 2.1</a></li>
                                                        <li className="submenu submenu-two submenu-three"><a href="javascript:void(0);">Level 2.2<span className="menu-arrow inside-submenu inside-submenu-two" /></a>
                                                            <ul>
                                                                <li><a href="javascript:void(0);">Level 3.1</a></li>
                                                                <li><a href="javascript:void(0);">Level 3.2</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sidebar collapsed-sidebar" id="collapsed-sidebar">
                    <div className="sidebar-inner slimscroll">
                        <div id="sidebar-menu-2" className="sidebar-menu sidebar-menu-three">
                            <aside id="aside" className="ui-aside ">
                                <ul className="tab nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link active" href="file-manager.html#home" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" role="tab" aria-selected="true">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/menu-icon.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="file-manager.html#messages" id="messages-tab" data-bs-toggle="tab" data-bs-target="#product" role="tab" aria-selected="false">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/product.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="file-manager.html#profile" id="profile-tab" data-bs-toggle="tab" data-bs-target="#sales" role="tab" aria-selected="false">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/sales1.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="file-manager.html#report" id="report-tab" data-bs-toggle="tab" data-bs-target="#purchase" role="tab" aria-selected="true">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/purchase1.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="file-manager.html#set" id="set-tab" data-bs-toggle="tab" data-bs-target="#user" role="tab" aria-selected="true">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/users1.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="file-manager.html#set2" id="set-tab2" data-bs-toggle="tab" data-bs-target="#employee" role="tab" aria-selected="true">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/calendars.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="file-manager.html#set3" id="set-tab3" data-bs-toggle="tab" data-bs-target="#report" role="tab" aria-selected="true">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/printer.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="file-manager.html#set4" id="set-tab4" data-bs-toggle="tab" data-bs-target="#document" role="tab" aria-selected="true">
                                            <i data-feather="user" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="file-manager.html#set5" id="set-tab6" data-bs-toggle="tab" data-bs-target="#permission" role="tab" aria-selected="true">
                                            <i data-feather="file-text" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="file-manager.html#set6" id="set-tab5" data-bs-toggle="tab" data-bs-target="#settings" role="tab" aria-selected="true">
                                            <i data-feather="settings" />
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                            <div className="tab-content tab-content-four pt-2">
                                <ul className="tab-pane active" id="home" aria-labelledby="home-tab">
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Dashboard</span> <span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/index.html">Admin Dashboard</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sales-dashboard.html">Sales Dashboard</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);" className="active subdrop"><span>Application</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chat.html">Chat</a></li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);"><span>Call</span><span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/video-call.html">Video Call</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/audio-call.html">Audio Call</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/call-history.html">Call History</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/calendar.html">Calendar</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email.html">Email</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/todo.html">To Do</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/notes.html">Notes</a></li>
                                            <li><a href="file-manager.html" className="active">File Manager</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="tab-pane" id="product" aria-labelledby="messages-tab">
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html"><span>Products</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/add-product.html"><span>Create Product</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/expired-products.html"><span>Expired Products</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/low-stocks.html"><span>Low Stocks</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/category-list.html"><span>Category</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sub-categories.html"><span>Sub Category</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/brand-list.html"><span>Brands</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/units.html"><span>Units</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/varriant-attributes.html"><span>Variant Attributes</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/warranty.html"><span>Warranties</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/barcode.html"><span>Print Barcode</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/qrcode.html"><span>Print QR Code</span></a></li>
                                </ul>
                                <ul className="tab-pane" id="sales" aria-labelledby="profile-tab">
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sales-list.html"><span>Sales</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/invoice-report.html"><span>Invoices</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sales-returns.html"><span>Sales Return</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/quotation-list.html"><span>Quotation</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/pos.html"><span>POS</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/coupons.html"><span>Coupons</span></a></li>
                                </ul>
                                <ul className="tab-pane" id="purchase" aria-labelledby="report-tab">
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/purchase-list.html"><span>Purchases</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/purchase-order-report.html"><span>Purchase Order</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/purchase-returns.html"><span>Purchase Return</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/manage-stocks.html"><span>Manage Stock</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/stock-adjustment.html"><span>Stock Adjustment</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/stock-transfer.html"><span>Stock Transfer</span></a></li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Expenses</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/expense-list.html">Expenses</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/expense-category.html">Expense Category</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="tab-pane" id="user" aria-labelledby="set-tab">
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/customers.html"><span>Customers</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/suppliers.html"><span>Suppliers</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/store-list.html"><span>Stores</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/warehouse.html"><span>Warehouses</span></a></li>
                                </ul>
                                <ul className="tab-pane" id="employee" aria-labelledby="set-tab2">
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/employees-grid.html"><span>Employees</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/department-grid.html"><span>Departments</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/designation.html"><span>Designation</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/shift.html"><span>Shifts</span></a></li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Attendence</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/attendance-employee.html">Employee Attendence</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/attendance-admin.html">Admin Attendence</a></li>
                                        </ul>
                                    </li><li className="submenu">
                                        <a href="javascript:void(0);"><span>Leaves</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/leaves-admin.html">Admin Leaves</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/leaves-employee.html">Employee Leaves</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/leave-types.html">Leave Types</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/holidays.html"><span>Holidays</span></a></li>
                                    <li className="submenu">
                                        <a href="https://dreamspos.dreamstechnologies.com/html/template/payroll-list.html"><span>Payroll</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/payroll-list.html">Employee Salary</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/payslip.html">Payslip</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="tab-pane" id="report" aria-labelledby="set-tab3">
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sales-report.html"><span>Sales Report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/purchase-report.html"><span>Purchase report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/inventory-report.html"><span>Inventory Report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/invoice-report.html"><span>Invoice Report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/supplier-report.html"><span>Supplier Report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/customer-report.html"><span>Customer Report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/expense-report.html"><span>Expense Report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/income-report.html"><span>Income Report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/tax-reports.html"><span>Tax Report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/profit-and-loss.html"><span>Profit &amp; Loss</span></a></li>
                                </ul>
                                <ul className="tab-pane" id="permission" aria-labelledby="set-tab4">
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/users.html"><span>Users</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/roles-permissions.html"><span>Roles &amp; Permissions</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/delete-account.html"><span>Delete Account Request</span></a></li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);">
                                            <span>Base UI</span><span className="menu-arrow" />
                                        </a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-alerts.html">Alerts</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-accordion.html">Accordion</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-avatar.html">Avatar</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-badges.html">Badges</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-borders.html">Border</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-buttons.html">Buttons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-buttons-group.html">Button Group</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-breadcrumb.html">Breadcrumb</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-cards.html">Card</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-carousel.html">Carousel</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-colors.html">Colors</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-dropdowns.html">Dropdowns</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-grid.html">Grid</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-images.html">Images</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-lightbox.html">Lightbox</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-media.html">Media</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-modals.html">Modals</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-offcanvas.html">Offcanvas</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-pagination.html">Pagination</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-popovers.html">Popovers</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-progress.html">Progress</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-placeholders.html">Placeholders</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-rangeslider.html">Range Slider</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-spinner.html">Spinner</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-sweetalerts.html">Sweet Alerts</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-nav-tabs.html">Tabs</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-toasts.html">Toasts</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-tooltips.html">Tooltips</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-typography.html">Typography</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-video.html">Video</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);">
                                            <span>Advanced UI</span><span className="menu-arrow" />
                                        </a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-ribbon.html">Ribbon</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-clipboard.html">Clipboard</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-drag-drop.html">Drag &amp; Drop</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-rangeslider.html">Range Slider</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-rating.html">Rating</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-text-editor.html">Text Editor</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-counter.html">Counter</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-scrollbar.html">Scrollbar</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-stickynote.html">Sticky Note</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-timeline.html">Timeline</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Charts</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-apex.html">Apex Charts</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-c3.html">Chart C3</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-js.html">Chart Js</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-morris.html">Morris Charts</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-flot.html">Flot Charts</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-peity.html">Peity Charts</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Icons</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-fontawesome.html">Fontawesome Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-feather.html">Feather Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-ionic.html">Ionic Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-material.html">Material Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-pe7.html">Pe7 Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-simpleline.html">Simpleline Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-themify.html">Themify Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-weather.html">Weather Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-typicon.html">Typicon Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-flag.html">Flag Icons</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);">
                                            <span>Forms</span><span className="menu-arrow" />
                                        </a>
                                        <ul>
                                            <li className="submenu submenu-two">
                                                <a href="javascript:void(0);">Form Elements<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-basic-inputs.html">Basic Inputs</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-checkbox-radios.html">Checkbox &amp; Radios</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-input-groups.html">Input Groups</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-grid-gutters.html">Grid &amp; Gutters</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-select.html">Form Select</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-mask.html">Input Masks</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-fileupload.html">File Uploads</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two">
                                                <a href="javascript:void(0);">Layouts<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-horizontal.html">Horizontal Form</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-vertical.html">Vertical Form</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-floating-labels.html">Floating Labels</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-validation.html">Form Validation</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-select2.html">Select2</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-wizard.html">Form Wizard</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Tables</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/tables-basic.html">Basic Tables </a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/data-tables.html">Data Table </a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="tab-pane" id="document" aria-labelledby="set-tab5">
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/profile.html"><span>Profile</span></a></li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Authentication</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">Login<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/signin.html">Cover</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/signin-2.html">Illustration</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/signin-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">Register<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/register.html">Cover</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/register-2.html">Illustration</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/register-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">Forgot Password<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/forgot-password.html">Cover</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/forgot-password-2.html">Illustration</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/forgot-password-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">Reset Password<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/reset-password.html">Cover</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/reset-password-2.html">Illustration</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/reset-password-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">Email Verification<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email-verification.html">Cover</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email-verification-2.html">Illustration</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email-verification-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">2 Step Verification<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/two-step-verification.html">Cover</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/two-step-verification-2.html">Illustration</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/two-step-verification-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/lock-screen.html">Lock Screen</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Error Pages</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/error-404.html">404 Error </a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/error-500.html">500 Error </a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Places</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/countries.html">Countries</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/states.html">States</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="https://dreamspos.dreamstechnologies.com/html/template/blank-page.html"><span>Blank Page</span> </a>
                                    </li>
                                    <li>
                                        <a href="https://dreamspos.dreamstechnologies.com/html/template/coming-soon.html"><span>Coming Soon</span> </a>
                                    </li>
                                    <li>
                                        <a href="https://dreamspos.dreamstechnologies.com/html/template/under-maintenance.html"><span>Under Maintenance</span> </a>
                                    </li>
                                </ul>
                                <ul className="tab-pane" id="settings" aria-labelledby="set-tab6">
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>General Settings</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/general-settings.html">Profile</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/security-settings.html">Security</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/notification.html">Notifications</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/connected-apps.html">Connected Apps</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Website Settings</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/system-settings.html">System Settings</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/company-settings.html">Company Settings </a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/localization-settings.html">Localization</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/prefixes.html">Prefixes</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/preference.html">Preference</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/appearance.html">Appearance</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/social-authentication.html">Social Authentication</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/language-settings.html">Language</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>App Settings</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/invoice-settings.html">Invoice</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/printer-settings.html">Printer</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/pos-settings.html">POS</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/custom-fields.html">Custom Fields</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>System Settings</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email-settings.html">Email</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sms-gateway.html">SMS Gateways</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/otp-settings.html">OTP</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/gdpr-settings.html">GDPR Cookies</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Financial Settings</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/payment-gateway-settings.html">Payment Gateway</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/bank-settings-grid.html">Bank Accounts</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/tax-rates.html">Tax Rates</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/currency-settings.html">Currencies</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Other Settings</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/storage-settings.html">Storage</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ban-ip-address.html">Ban IP Address</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0);"><span>Documentation</span></a></li>
                                    <li><a href="javascript:void(0);"><span>Changelog v2.0.7</span></a></li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Multi Level</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="javascript:void(0);">Level 1.1</a></li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">Level 1.2<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="javascript:void(0);">Level 2.1</a></li>
                                                    <li className="submenu submenu-two submenu-three"><a href="javascript:void(0);">Level 2.2<span className="menu-arrow inside-submenu inside-submenu-two" /></a>
                                                        <ul>
                                                            <li><a href="javascript:void(0);">Level 3.1</a></li>
                                                            <li><a href="javascript:void(0);">Level 3.2</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar horizontal-sidebar">
                    <div id="sidebar-menu-3" className="sidebar-menu">
                        <ul className="nav">
                            <li className="submenu">
                                <a href="https://dreamspos.dreamstechnologies.com/html/template/index.html" className="active subdrop"><i data-feather="grid" /><span> Main Menu</span> <span className="menu-arrow" /></a>
                                <ul>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Dashboard</span> <span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/index.html">Admin Dashboard</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sales-dashboard.html">Sales Dashboard</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);" className="active subdrop"><span>Application</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chat.html">Chat</a></li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);"><span>Call</span><span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/video-call.html">Video Call</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/audio-call.html">Audio Call</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/call-history.html">Call History</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/calendar.html">Calendar</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email.html">Email</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/todo.html">To Do</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/notes.html">Notes</a></li>
                                            <li><a href="file-manager.html" className="active">File Manager</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="javascript:void(0);"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/product.svg" alt="img" /><span> Inventory </span> <span className="menu-arrow" /></a>
                                <ul>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html"><span>Products</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/add-product.html"><span>Create Product</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/expired-products.html"><span>Expired Products</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/low-stocks.html"><span>Low Stocks</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/category-list.html"><span>Category</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sub-categories.html"><span>Sub Category</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/brand-list.html"><span>Brands</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/units.html"><span>Units</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/varriant-attributes.html"><span>Variant Attributes</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/warranty.html"><span>Warranties</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/barcode.html"><span>Print Barcode</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/qrcode.html"><span>Print QR Code</span></a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="javascript:void(0);"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/purchase1.svg" alt="img" /><span>Sales &amp; Purchase</span> <span className="menu-arrow" /></a>
                                <ul>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Sales</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sales-list.html"><span>Sales</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/invoice-report.html"><span>Invoices</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sales-returns.html"><span>Sales Return</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/quotation-list.html"><span>Quotation</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/pos.html"><span>POS</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/coupons.html"><span>Coupons</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Purchase</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/purchase-list.html"><span>Purchases</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/purchase-order-report.html"><span>Purchase Order</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/purchase-returns.html"><span>Purchase Return</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/manage-stocks.html"><span>Manage Stock</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/stock-adjustment.html"><span>Stock Adjustment</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/stock-transfer.html"><span>Stock Transfer</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Expenses</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/expense-list.html">Expenses</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/expense-category.html">Expense Category</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="javascript:void(0);"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/users1.svg" alt="img" /><span>User Management</span> <span className="menu-arrow" /></a>
                                <ul>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>People</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/customers.html"><span>Customers</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/suppliers.html"><span>Suppliers</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/store-list.html"><span>Stores</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/warehouse.html"><span>Warehouses</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Roles &amp; Permissions</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/roles-permissions.html"><span>Roles &amp; Permissions</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/delete-account.html"><span>Delete Account Request</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Base UI</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-alerts.html">Alerts</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-accordion.html">Accordion</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-avatar.html">Avatar</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-badges.html">Badges</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-borders.html">Border</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-buttons.html">Buttons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-buttons-group.html">Button Group</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-breadcrumb.html">Breadcrumb</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-cards.html">Card</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-carousel.html">Carousel</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-colors.html">Colors</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-dropdowns.html">Dropdowns</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-grid.html">Grid</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-images.html">Images</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-lightbox.html">Lightbox</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-media.html">Media</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-modals.html">Modals</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-offcanvas.html">Offcanvas</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-pagination.html">Pagination</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-popovers.html">Popovers</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-progress.html">Progress</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-placeholders.html">Placeholders</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-rangeslider.html">Range Slider</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-spinner.html">Spinner</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-sweetalerts.html">Sweet Alerts</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-nav-tabs.html">Tabs</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-toasts.html">Toasts</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-tooltips.html">Tooltips</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-typography.html">Typography</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-video.html">Video</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Advanced UI</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-ribbon.html">Ribbon</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-clipboard.html">Clipboard</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-drag-drop.html">Drag &amp; Drop</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-rangeslider.html">Range Slider</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-rating.html">Rating</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-text-editor.html">Text Editor</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-counter.html">Counter</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-scrollbar.html">Scrollbar</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-stickynote.html">Sticky Note</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ui-timeline.html">Timeline</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Charts</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-apex.html">Apex Charts</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-c3.html">Chart C3</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-js.html">Chart Js</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-morris.html">Morris Charts</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-flot.html">Flot Charts</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/chart-peity.html">Peity Charts</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Primary Icons</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-fontawesome.html">Fontawesome Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-feather.html">Feather Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-ionic.html">Ionic Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-material.html">Material Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-pe7.html">Pe7 Icons</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Secondary Icons</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-simpleline.html">Simpleline Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-themify.html">Themify Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-weather.html">Weather Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-typicon.html">Typicon Icons</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/icon-flag.html">Flag Icons</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span> Forms</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li className="submenu submenu-two">
                                                <a href="javascript:void(0);"><span>Form Elements</span><span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-basic-inputs.html">Basic Inputs</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-checkbox-radios.html">Checkbox &amp; Radios</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-input-groups.html">Input Groups</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-grid-gutters.html">Grid &amp; Gutters</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-select.html">Form Select</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-mask.html">Input Masks</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-fileupload.html">File Uploads</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two">
                                                <a href="javascript:void(0);"><span> Layouts</span><span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-horizontal.html">Horizontal Form</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-vertical.html">Vertical Form</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-floating-labels.html">Floating Labels</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-validation.html">Form Validation</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-select2.html">Select2</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/form-wizard.html">Form Wizard</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Tables</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/tables-basic.html">Basic Tables </a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/data-tables.html">Data Table </a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="javascript:void(0);"><i data-feather="user" /><span>Profile</span> <span className="menu-arrow" /></a>
                                <ul>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/profile.html"><span>Profile</span></a></li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Authentication</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">Login<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/signin.html">Cover</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/signin-2.html">Illustration</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/signin-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">Register<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/register.html">Cover</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/register-2.html">Illustration</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/register-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">Forgot Password<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/forgot-password.html">Cover</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/forgot-password-2.html">Illustration</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/forgot-password-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">Reset Password<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/reset-password.html">Cover</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/reset-password-2.html">Illustration</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/reset-password-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">Email Verification<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email-verification.html">Cover</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email-verification-2.html">Illustration</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email-verification-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">2 Step Verification<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/two-step-verification.html">Cover</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/two-step-verification-2.html">Illustration</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/two-step-verification-3.html">Basic</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/lock-screen.html">Lock Screen</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Pages</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/error-404.html">404 Error </a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/error-500.html">500 Error </a></li>
                                            <li>
                                                <a href="https://dreamspos.dreamstechnologies.com/html/template/blank-page.html"><span>Blank Page</span> </a>
                                            </li>
                                            <li>
                                                <a href="https://dreamspos.dreamstechnologies.com/html/template/coming-soon.html"><span>Coming Soon</span> </a>
                                            </li>
                                            <li>
                                                <a href="https://dreamspos.dreamstechnologies.com/html/template/under-maintenance.html"><span>Under Maintenance</span> </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Places</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/countries.html">Countries</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/states.html">States</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Employees</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/employees-grid.html"><span>Employees</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/department-grid.html"><span>Departments</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/designation.html"><span>Designation</span></a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/shift.html"><span>Shifts</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Attendence</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/attendance-employee.html">Employee Attendence</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/attendance-admin.html">Admin Attendence</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Leaves &amp; Holidays</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/leaves-admin.html">Admin Leaves</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/leaves-employee.html">Employee Leaves</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/leave-types.html">Leave Types</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/holidays.html"><span>Holidays</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="https://dreamspos.dreamstechnologies.com/html/template/payroll-list.html"><span>Payroll</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/payroll-list.html">Employee Salary</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/payslip.html">Payslip</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="javascript:void(0);"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/printer.svg" alt="img" /><span>Reports</span> <span className="menu-arrow" /></a>
                                <ul>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sales-report.html"><span>Sales Report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/purchase-report.html"><span>Purchase report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/inventory-report.html"><span>Inventory Report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/invoice-report.html"><span>Invoice Report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/supplier-report.html"><span>Supplier Report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/customer-report.html"><span>Customer Report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/expense-report.html"><span>Expense Report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/income-report.html"><span>Income Report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/tax-reports.html"><span>Tax Report</span></a></li>
                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/profit-and-loss.html"><span>Profit &amp; Loss</span></a></li>
                                </ul>
                            </li>
                            <li className="submenu">
                                <a href="javascript:void(0);"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/settings.svg" alt="img" /><span> Settings</span> <span className="menu-arrow" /></a>
                                <ul>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>General Settings</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/general-settings.html">Profile</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/security-settings.html">Security</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/notification.html">Notifications</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/connected-apps.html">Connected Apps</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Website Settings</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/system-settings.html">System Settings</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/company-settings.html">Company Settings </a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/localization-settings.html">Localization</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/prefixes.html">Prefixes</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/preference.html">Preference</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/appearance.html">Appearance</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/social-authentication.html">Social Authentication</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/language-settings.html">Language</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>App Settings</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/invoice-settings.html">Invoice</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/printer-settings.html">Printer</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/pos-settings.html">POS</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/custom-fields.html">Custom Fields</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>System Settings</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email-settings.html">Email</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sms-gateway.html">SMS Gateways</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/otp-settings.html">OTP</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/gdpr-settings.html">GDPR Cookies</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Financial Settings</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/payment-gateway-settings.html">Payment Gateway</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/bank-settings-grid.html">Bank Accounts</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/tax-rates.html">Tax Rates</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/currency-settings.html">Currencies</a></li>
                                        </ul>
                                    </li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Other Settings</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/storage-settings.html">Storage</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ban-ip-address.html">Ban IP Address</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0);"><span>Documentation</span></a></li>
                                    <li><a href="javascript:void(0);"><span>Changelog v2.0.7</span></a></li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"><span>Multi Level</span><span className="menu-arrow" /></a>
                                        <ul>
                                            <li><a href="javascript:void(0);">Level 1.1</a></li>
                                            <li className="submenu submenu-two"><a href="javascript:void(0);">Level 1.2<span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="javascript:void(0);">Level 2.1</a></li>
                                                    <li className="submenu submenu-two submenu-three"><a href="javascript:void(0);">Level 2.2<span className="menu-arrow inside-submenu inside-submenu-two" /></a>
                                                        <ul>
                                                            <li><a href="javascript:void(0);">Level 3.1</a></li>
                                                            <li><a href="javascript:void(0);">Level 3.2</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="page-wrapper notes-page-wrapper file-manager">
                    <div className="content">
                        <div className="page-header page-add-notes d-flex align-items-center justify-content-between">
                            <div className="add-item d-flex align-items-center">
                                <div className="page-title">
                                    <h4>File Manager</h4>
                                    <p>Manage your files</p>
                                </div>
                                <a id="toggle_btn2" className="notes-tog" href="javascript:void(0);">
                                    <i className="fas fa-chevron-left" />
                                </a>
                            </div>
                            <div className="d-sm-flex align-items-center">
                                <div className="form-sort owned-by w-auto">
                                    <span><i data-feather="sliders" className="info-img" /></span>
                                    <select className="select">
                                        <option>Owned By Me</option>
                                        <option>Owned by Anyone</option>
                                        <option>Not Owned by Me</option>
                                    </select>
                                </div>
                                <ul className="table-top-head">
                                    <li>
                                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="rotate"><i data-feather="rotate-ccw" className="feather-rotate-ccw" /></a>
                                    </li>
                                    <li className="full-height">
                                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header"><i data-feather="chevron-up" className="feather-chevron-up" /></a>
                                    </li>
                                </ul>
                                <a href="file-manager.html#" className="btn btn-primary btn-added" data-bs-toggle="modal" data-bs-target="#upload-file"><span className="me-1 d-flex align-items-center"><i data-feather="upload" className="feather-16" /></span>Upload Files</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-12 sidebars-right theiaStickySidebar section-bulk-widget">
                                <aside className="card file-manager-sidebar mb-0">
                                    <h5 className="d-flex align-items-center"><span className="me-2 d-flex align-items-center"><i data-feather="folder" className="feather-20" /></span>Files</h5>
                                    <div className="dropdown">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset btn btn-primary mb-3 btn-icon">
                                            <span className="me-1 btn-icon"><i data-feather="plus-circle" className="feather-16" /></span>New
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li data-bs-toggle="modal" data-bs-target="#upload-file"><a href="javascript:void(0);" className="dropdown-item"><i data-feather="upload-cloud" className="feather-16 me-2" />Upload File</a></li>
                                            <li data-bs-toggle="modal" data-bs-target="#upload-folder"><a href="javascript:void(0);" className="dropdown-item"><i data-feather="folder" className="feather-16 me-2" />Upload Folder</a></li>
                                            <li data-bs-toggle="modal" data-bs-target="#create-folder"><a href="javascript:void(0);" className="dropdown-item"><i data-feather="folder-minus" className="feather-16 me-2" />Create folder</a></li>
                                        </ul>
                                    </div>
                                    <ul className="mb-5">
                                        <li><a href="file-manager.html" className="active"><span className="me-2 btn-icon"><i data-feather="file-text" className="feather-16" /></span>My Files</a></li>
                                        <li><a href="javascript:void(0);"><span className="me-2 btn-icon"><i data-feather="star" className="feather-16" /></span>Google Drive</a></li>
                                        <li><a href="javascript:void(0);"><span className="me-2 btn-icon"><i data-feather="send" className="feather-16" /></span>Dropbox</a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/file-shared.html"><span className="me-2 btn-icon"><i data-feather="file" className="feather-16" /></span>Shared With Me</a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/file-document.html"><span className="me-2 btn-icon"><i data-feather="file" className="feather-16" /></span>Document</a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/file-recent.html"><span className="me-2 btn-icon"><i data-feather="clock" className="feather-16" /></span>Recent</a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/file-favourites.html"><span className="me-2 btn-icon"><i data-feather="star" className="feather-16" /></span>Favourites</a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/file-archived.html"><span className="me-2 btn-icon"><i data-feather="target" className="feather-16" /></span>Archived</a></li>
                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/file-manager-deleted.html"><span className="me-2 btn-icon"><i data-feather="trash-2" className="feather-16" /></span>Deleted</a></li>
                                        <li><a href="javascript:void(0);"><span className="me-2 btn-icon"><i data-feather="settings" className="feather-16" /></span>Settings</a></li>
                                    </ul>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 btn-icon"><i data-feather="hard-drive" className="feather-16" /></span>
                                            <h6>Storage</h6>
                                        </div>
                                        <span>70%</span>
                                    </div>
                                    <div className="progress my-2">
                                        <div className="progress-bar progress-bar bg-danger" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <span>78.5 GB of 1 TB Free Used</span>
                                    <div className="space-manager p-4">
                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/half-circle.svg" alt="Folder" />
                                        <h6><a href="javascript:void(0);">Need More Space?</a></h6>
                                        <p>Upgrade storage for 2TB for $60 per month</p>
                                        <a href="javascript:void(0);" className="btn btn-outline-primary">Upgrade<span className="ms-1 btn-icon"><i data-feather="repeat" className="feather-16" /></span></a>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-9 budget-role-notes">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-bulk-wrap">
                                            <div className="bulk-action-type col-lg-6 col-md-6">
                                                <div className="form-sort select-bluk">
                                                    <select className="select">
                                                        <option>Sort by Date</option>
                                                        <option>Sort By Relevance</option>
                                                        <option>Sort By Size</option>
                                                        <option>Order Ascending</option>
                                                        <option>Order Descending</option>
                                                        <option>Upload Time</option>
                                                    </select>
                                                </div>
                                                <div className="search-set me-2" id="dropdownSort" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                                    <div className="search-input">
                                                        <a href='' className="btn btn-searchset"><i data-feather="search" className="feather-search" /></a>
                                                        <div className="dataTables_filter">
                                                            <label> <input type="search" className="form-control form-control-sm width-auto" placeholder="Search" /></label>
                                                        </div></div>
                                                </div>
                                                <div className="dropdown-menu search-dropdown" aria-labelledby="dropdownMenuClickable">
                                                    <div className="search-info">
                                                        <h6><span><i data-feather="search" className="feather-16" /></span>Recent Searches</h6>
                                                        <ul className="search-tags">
                                                            <li><a href="javascript:void(0);">Filename</a></li>
                                                            <li><a href="javascript:void(0);">Excel Files</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="search-info">
                                                        <h6>Search Results</h6>
                                                        <p className="d-flex align-items-center justify-content-between">Sportsmodel.pdf <i data-feather="chevron-right" className="feather-16" /></p>
                                                        <p className="d-flex align-items-center justify-content-between">Projectdetails.xls<i data-feather="chevron-right" className="feather-16" /></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-sm-flex align-items-center col-lg-6 col-md-6 justify-content-end">
                                                <div className="form-sort me-3">
                                                    <i data-feather="filter" className="fa-filter" />
                                                    <select className="select">
                                                        <option>Recent</option>
                                                        <option>Last Week</option>
                                                        <option>Last Month</option>
                                                    </select>
                                                </div>
                                                <div className="form-sort">
                                                    <i data-feather="file-text" className="fa-filter" />
                                                    <select className="select">
                                                        <option>All File types</option>
                                                        <option>Folders</option>
                                                        <option>PDF</option>
                                                        <option>Images</option>
                                                        <option>Videos</option>
                                                        <option>Audios</option>
                                                        <option>Excel</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overview seprator-lg">
                                    <h4 className="mb-2">Overview</h4>
                                    <div className="row g-3">
                                        <div className="col-sm-6 col-md-3">
                                            <div className="detail">
                                                <a href="javascript:void(0);" className="d-flex align-items-center justify-content-center bg-light-orange bg p-4">
                                                    <span className="d-flex align-items-center justify-content-center"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/folder.svg" alt="Folder" /></span>
                                                </a>
                                                <div className="d-flex align-items-center justify-content-between info">
                                                    <h6><a href="javascript:void(0);">Folders</a></h6>
                                                    <span>300 Files</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="detail">
                                                <a href="javascript:void(0);" className="d-flex align-items-center justify-content-center bg-light-red bg p-4">
                                                    <span className="d-flex align-items-center justify-content-center"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/pdf-02.svg" alt="Folder" /></span>
                                                </a>
                                                <div className="d-flex align-items-center justify-content-between info">
                                                    <h6><a href="javascript:void(0);">PDF</a></h6>
                                                    <span>50 Files</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="detail">
                                                <a href="javascript:void(0);" className="d-flex align-items-center justify-content-center bg-light-green bg p-4">
                                                    <span className="d-flex align-items-center justify-content-center"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/image.svg" alt="Folder" /></span>
                                                </a>
                                                <div className="d-flex align-items-center justify-content-between info">
                                                    <h6><a href="javascript:void(0);">Images</a></h6>
                                                    <span>240 Files</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="detail">
                                                <a href="javascript:void(0);" className="d-flex align-items-center justify-content-center bg-light-red bg p-4">
                                                    <span className="d-flex align-items-center justify-content-center"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/video.svg" alt="Folder" /></span>
                                                </a>
                                                <div className="d-flex align-items-center justify-content-between info">
                                                    <h6><a href="javascript:void(0);">Videos</a></h6>
                                                    <span>30 Files</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="detail">
                                                <a href="javascript:void(0);" className="d-flex align-items-center justify-content-center bg-light-orange bg p-4">
                                                    <span className="d-flex align-items-center justify-content-center"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/audio.svg" alt="Folder" /></span>
                                                </a>
                                                <div className="d-flex align-items-center justify-content-between info">
                                                    <h6><a href="javascript:void(0);">Audios</a></h6>
                                                    <span>100 Files</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion" id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item seprator-lg">
                                        <h4 className="accordion-header d-flex align-items-center justify-content-between" id="panelsStayOpen-headingOne">Folders
                                            <a href="javascript:void(0);" className="accordion-button a-auto" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" />
                                        </h4>
                                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                            <div className="accordion-body">
                                                <div className="owl-carousel folders-carousel owl-theme">
                                                    <div className="folders p-3">
                                                        <div className="d-flex align-items-center justify-content-between head">
                                                            <div className="d-flex align-items-center">
                                                                <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/folder.svg" alt="Folder" className="me-2" />
                                                                <h6 className="popup-toggle"><a href="javascript:void(0);">Project Details</a></h6>
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                    <i className="fa fa-ellipsis-v" />
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Details</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Share</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Copy</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Move</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Download</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Rename</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Archeived</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Delete</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-start project-plan my-3">
                                                            <label>Project plan</label>
                                                            <ul className="d-flex">
                                                                <li className="d-flex align-items-center">154 KB</li>
                                                                <li className="d-flex align-items-center">8 Files</li>
                                                            </ul>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between avatar-wrap">
                                                            <div className="group-avatar">
                                                                <span className="avatar">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 1" data-bs-original-title="Member 1"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-2.jpg" alt="Avatar" /></a>
                                                                </span>
                                                                <span className="avatar">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 2" data-bs-original-title="Member 2"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-1.jpg" alt="Avatar" /></a>
                                                                </span>
                                                                <span className="count">
                                                                    <a href="javascript:void(0);">1 Members</a>
                                                                </span>
                                                            </div>
                                                            <a href="javascript:void(0);" className><i data-feather="star" className="feather-16" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="folders p-3">
                                                        <div className="d-flex align-items-center justify-content-between head">
                                                            <div className="d-flex align-items-center">
                                                                <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/folder.svg" alt="Folder" className="me-2" />
                                                                <h6 className="popup-toggle"><a href="javascript:void(0);">Project Details</a></h6>
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                    <i className="fa fa-ellipsis-v" />
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Details</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Share</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Copy</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Move</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Download</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Rename</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Archeived</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Delete</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-start project-plan my-3">
                                                            <label>Project plan</label>
                                                            <ul className="d-flex">
                                                                <li className="d-flex align-items-center">154 KB</li>
                                                                <li className="d-flex align-items-center">8 Files</li>
                                                            </ul>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between avatar-wrap">
                                                            <div className="group-avatar">
                                                                <span className="avatar">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 1" data-bs-original-title="Member 1"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-6.jpg" alt="Avatar" /></a>
                                                                </span>
                                                                <span className="avatar">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 2" data-bs-original-title="Member 2"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-14.jpg" alt="Avatar" /></a>
                                                                </span>
                                                                <span className="avatar">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 3" data-bs-original-title="Member 3"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-15.jpg" alt="Avatar" /></a>
                                                                </span>
                                                                <span className="avatar">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 4" data-bs-original-title="Member 4"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-16.jpg" alt="Avatar" /></a>
                                                                </span>
                                                                <span className="avatar">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 5" data-bs-original-title="Member 5"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-17.jpg" alt="Avatar" /></a>
                                                                </span>
                                                                <span className="count">
                                                                    <a href="javascript:void(0);">+9 Members</a>
                                                                </span>
                                                            </div>
                                                            <a href="javascript:void(0);" className><i data-feather="star" className="feather-16" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="folders p-3">
                                                        <div className="d-flex align-items-center justify-content-between head">
                                                            <div className="d-flex align-items-center">
                                                                <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/folder.svg" alt="Folder" className="me-2" />
                                                                <h6 className="popup-toggle"><a href="javascript:void(0);">Project Details</a></h6>
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                    <i className="fa fa-ellipsis-v" />
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Details</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Share</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Copy</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Move</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Download</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Rename</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Archeived</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Delete</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-start project-plan my-3">
                                                            <label>Project plan</label>
                                                            <ul className="d-flex">
                                                                <li className="d-flex align-items-center">154 KB</li>
                                                                <li className="d-flex align-items-center">8 Files</li>
                                                            </ul>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between avatar-wrap">
                                                            <div className="group-avatar">
                                                                <span className="avatar">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 1" data-bs-original-title="Member 1"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-18.jpg" alt="Avatar" /></a>
                                                                </span>
                                                                <span className="avatar">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 2" data-bs-original-title="Member 2"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-5.jpg" alt="Avatar" /></a>
                                                                </span>
                                                                <span className="count">
                                                                    <a href="javascript:void(0);">
                                                                        +2 Members</a>
                                                                </span>
                                                            </div>
                                                            <a href="javascript:void(0);" className><i data-feather="star" className="feather-16" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="folders p-3">
                                                        <div className="d-flex align-items-center justify-content-between head">
                                                            <div className="d-flex align-items-center">
                                                                <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/folder.svg" alt="Folder" className="me-2" />
                                                                <h6 className="popup-toggle"><a href="javascript:void(0);">Project Details</a></h6>
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                    <i className="fa fa-ellipsis-v" />
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Details</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Share</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Copy</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Move</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Download</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Rename</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Archeived</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item">Delete</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-start project-plan my-3">
                                                            <label>Project plan</label>
                                                            <ul className="d-flex">
                                                                <li className="d-flex align-items-center">154 KB</li>
                                                                <li className="d-flex align-items-center">8 Files</li>
                                                            </ul>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between avatar-wrap">
                                                            <div className="group-avatar">
                                                                <span className="avatar">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 1" data-bs-original-title="Member 1"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-1.jpg" alt="Avatar" /></a>
                                                                </span>
                                                                <span className="avatar">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 2" data-bs-original-title="Member 2"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-2.jpg" alt="Avatar" /></a>
                                                                </span>
                                                                <span className="avatar">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 3" data-bs-original-title="Member 3"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-3.jpg" alt="Avatar" /></a>
                                                                </span>
                                                                <span className="avatar">
                                                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 4" data-bs-original-title="Member 4"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-4.jpg" alt="Avatar" /></a>
                                                                </span>
                                                                <span className="count">
                                                                    <a href="javascript:void(0);">1 Members</a>
                                                                </span>
                                                            </div>
                                                            <a href="javascript:void(0);" className><i data-feather="star" className="feather-16" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item seprator-lg">
                                        <h4 className="accordion-header d-flex align-items-center justify-content-between" id="panelsStayOpen-headingTwo">Files
                                            <a href="javascript:void(0);" className="accordion-button w-auto" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            </a>
                                        </h4>
                                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                                            <div className="accordion-body">
                                                <div className="owl-carousel files-carousel owl-theme">
                                                    <div className="folders p-3">
                                                        <div className="d-flex align-items-center justify-content-between head">
                                                            <div className="d-flex align-items-center">
                                                                <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/pdf-02.svg" alt="File" className="me-2" />
                                                                <h6 className="popup-toggle"><a href="javascript:void(0);">hsa.pdf</a></h6>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <a href="javascript:void(0);" className><i className="fa fa-star me-2" /></a>
                                                                <div className="dropdown">
                                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                        <i className="fa fa-ellipsis-v" />
                                                                    </a>
                                                                    <ul className="dropdown-menu">
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Details</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Share</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Copy</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Move</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Download</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Rename</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Archeived</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Delete</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-start project-plan mt-3">
                                                            <label>12 Jul</label>
                                                            <ul className="d-flex">
                                                                <li className="d-flex align-items-center">85 MB</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="folders p-3">
                                                        <div className="d-flex align-items-center justify-content-between head">
                                                            <div className="d-flex align-items-center">
                                                                <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/pdf-02.svg" alt="File" className="me-2" />
                                                                <h6 className="popup-toggle"><a href="javascript:void(0);">Haird.pdf</a></h6>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <a href="javascript:void(0);" className><i className="fa fa-star me-2" /></a>
                                                                <div className="dropdown">
                                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                        <i className="fa fa-ellipsis-v" />
                                                                    </a>
                                                                    <ul className="dropdown-menu">
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Details</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Share</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Copy</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Move</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Download</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Rename</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Archeived</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Delete</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-start project-plan mt-3">
                                                            <label>14 Jul</label>
                                                            <ul className="d-flex">
                                                                <li className="d-flex align-items-center">4 MB</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="folders p-3">
                                                        <div className="d-flex align-items-center justify-content-between head">
                                                            <div className="d-flex align-items-center">
                                                                <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/xls.svg" alt="File" className="me-2" />
                                                                <h6 className="popup-toggle"><a href="javascript:void(0);">Estimation.xls</a></h6>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <a href="javascript:void(0);" className><i className="fa fa-star me-2" /></a>
                                                                <div className="dropdown">
                                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                        <i className="fa fa-ellipsis-v" />
                                                                    </a>
                                                                    <ul className="dropdown-menu">
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Details</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Share</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Copy</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Move</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Download</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Rename</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Archeived</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Delete</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-start project-plan mt-3">
                                                            <label>14 Jul</label>
                                                            <ul className="d-flex">
                                                                <li className="d-flex align-items-center">500 KB</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="folders p-3">
                                                        <div className="d-flex align-items-center justify-content-between head">
                                                            <div className="d-flex align-items-center">
                                                                <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/pdf-02.svg" alt="File" className="me-2" />
                                                                <h6 className="popup-toggle"><a href="javascript:void(0);">hsa.pdf</a></h6>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <a href="javascript:void(0);" className><i className="fa fa-star me-2" /></a>
                                                                <div className="dropdown">
                                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                        <i className="fa fa-ellipsis-v" />
                                                                    </a>
                                                                    <ul className="dropdown-menu">
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Details</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Share</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Copy</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Move</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Download</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Rename</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Archeived</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Delete</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-start project-plan mt-3">
                                                            <label>12 Jul</label>
                                                            <ul className="d-flex">
                                                                <li className="d-flex align-items-center">85 MB</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="folders p-3">
                                                        <div className="d-flex align-items-center justify-content-between head">
                                                            <div className="d-flex align-items-center">
                                                                <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/pdf-02.svg" alt="File" className="me-2" />
                                                                <h6 className="popup-toggle"><a href="javascript:void(0);">Haird.pdf</a></h6>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <a href="javascript:void(0);" className><i className="fa fa-star me-2" /></a>
                                                                <div className="dropdown">
                                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                        <i className="fa fa-ellipsis-v" />
                                                                    </a>
                                                                    <ul className="dropdown-menu">
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Details</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Share</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Copy</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Move</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Download</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Rename</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Archeived</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Delete</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-start project-plan mt-3">
                                                            <label>14 Jul</label>
                                                            <ul className="d-flex">
                                                                <li className="d-flex align-items-center">4 MB</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="folders p-3">
                                                        <div className="d-flex align-items-center justify-content-between head">
                                                            <div className="d-flex align-items-center">
                                                                <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/xls.svg" alt="File" className="me-2" />
                                                                <h6 className="popup-toggle"><a href="javascript:void(0);">Estimation.xls</a></h6>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <a href="javascript:void(0);" className><i className="fa fa-star me-2" /></a>
                                                                <div className="dropdown">
                                                                    <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                        <i className="fa fa-ellipsis-v" />
                                                                    </a>
                                                                    <ul className="dropdown-menu">
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Details</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Share</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Copy</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Move</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Download</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Rename</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Archeived</a></li>
                                                                        <li><a href="javascript:void(0);" className="dropdown-item">Delete</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-start project-plan mt-3">
                                                            <label>14 Jul</label>
                                                            <ul className="d-flex">
                                                                <li className="d-flex align-items-center">500 KB</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mb-4">
                                        <h4 className="accordion-header d-flex align-items-center justify-content-between" id="panelsStayOpen-headingThree">Videos
                                            <a href="javascript:void(0);" className="accordion-button w-auto" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" />
                                        </h4>
                                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                                            <div className="accordion-body">
                                                <div className="owl-carousel video-section">
                                                    <div className="item">
                                                        <div>
                                                            <video width={100} height={100} className="js-player" crossOrigin playsInline poster="https://dreamspos.dreamstechnologies.com/html/template/assets/img/file-manager/video1.jpg">
                                                                <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4" />
                                                            </video>
                                                        </div>
                                                        <div className="info">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <h6 className="popup-toggle"><a href="javascript:void(0);">Demo_dw</a></h6>
                                                                <div className="d-flex align-items-center">
                                                                    <a href="javascript:void(0);" className="d-flex align-items-center"><i data-feather="star" className="feather-16 me-2" /></a>
                                                                    <div className="dropdown">
                                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                            <i className="fa fa-ellipsis-v" />
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Details</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Share</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Copy</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Move</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Download</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Rename</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Archeived</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Delete</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-start project-plan">
                                                                <label>12 Jul</label>
                                                                <ul className="d-flex">
                                                                    <li className="d-flex align-items-center">5 MB</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div>
                                                            <video className="js-player" crossOrigin playsInline poster="https://dreamspos.dreamstechnologies.com/html/template/assets/img/file-manager/video2.jpg">
                                                                <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4" />
                                                            </video>
                                                        </div>
                                                        <div className="info">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <h6 className="popup-toggle"><a href="javascript:void(0);">Android_bike.mp4</a></h6>
                                                                <div className="d-flex align-items-center">
                                                                    <a href="javascript:void(0);" className="d-flex align-items-center"><i data-feather="star" className="feather-16 me-2" /></a>
                                                                    <div className="dropdown">
                                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                            <i className="fa fa-ellipsis-v" />
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Details</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Share</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Copy</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Move</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Download</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Rename</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Archeived</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Delete</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-start project-plan">
                                                                <label>14 Jul</label>
                                                                <ul className="d-flex">
                                                                    <li className="d-flex align-items-center">23 MB</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div>
                                                            <video className="js-player" crossOrigin playsInline poster="https://dreamspos.dreamstechnologies.com/html/template/assets/img/file-manager/video3.jpg">
                                                                <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4" />
                                                            </video>
                                                        </div>
                                                        <div className="info">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <h6 className="popup-toggle"><a href="javascript:void(0);">Demoparticles.mp4</a></h6>
                                                                <div className="d-flex align-items-center">
                                                                    <a href="javascript:void(0);" className="d-flex align-items-center"><i data-feather="star" className="feather-16 me-2" /></a>
                                                                    <div className="dropdown">
                                                                        <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                            <i className="fa fa-ellipsis-v" />
                                                                        </a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Details</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Share</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Copy</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Move</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Download</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Rename</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Archeived</a></li>
                                                                            <li><a href="javascript:void(0);" className="dropdown-item">Delete</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-start project-plan">
                                                                <label>14 Jul</label>
                                                                <ul className="d-flex">
                                                                    <li className="d-flex align-items-center">173 MB</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card p-4 bg-white all-files mb-0">
                                    <div className="seprator-lg d-lg-flex align-items-center justify-content-between">
                                        <h4>All Files</h4>
                                        <div className="d-sm-flex align-items-center btn-grp">
                                            <a href="javascript:void(0);" className="btn btn-primary me-2"><i data-feather="list" className="feather-20" /></a>
                                            <a href="javascript:void(0);" className="btn btn-outline-secondary me-2"><i data-feather="layout" className="feather-20" /></a>
                                            <a href="javascript:void(0);" className="btn btn-outline-secondary me-2"><i data-feather="grid" className="feather-20" /></a>
                                            <div className="icon-select">
                                                <span className="icon"><i data-feather="calendar" className="feather-16" /></span>
                                                <select className="select">
                                                    <option>Last Modified</option>
                                                    <option>Last Modified by Me</option>
                                                    <option>Last Opened by Me</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table datanew">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <label className="checkboxs">
                                                            <input type="checkbox" id="select-all" />
                                                            <span className="checkmarks" />
                                                        </label>
                                                    </th>
                                                    <th>Name</th>
                                                    <th>Last Modified</th>
                                                    <th>Size</th>
                                                    <th>Owned Memebr</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <label className="checkboxs">
                                                            <input type="checkbox" />
                                                            <span className="checkmarks" />
                                                        </label>
                                                    </td>
                                                    <td className="productimgname">
                                                        <a href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html" className="product-img d-flex align-items-center">
                                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/folder.svg" alt="Product" className="me-2" />
                                                            <span>Digimed</span>
                                                        </a>
                                                    </td>
                                                    <td>Today 08:30 AM <br />by Angel</td>
                                                    <td>200 MB</td>
                                                    <td>
                                                        <a href="javascript:void(0);" className="product-img d-flex align-items-center">
                                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-6.jpg" alt="Product" className="me-2 rounded-circle" />
                                                            <span>Nolan Christopher</span>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <a href="javascript:void(0);" className><i data-feather="star" className="feather-16 me-2 color-primary" /></a>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                    <i className="fa fa-ellipsis-v" />
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="javascript:void(0);" className="dropdown-item"><i data-feather="trash-2" className="feather-14 me-2" />Permanent Delete</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item"><i data-feather="edit" className="feather-14 me-2" />Restore File</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkboxs">
                                                            <input type="checkbox" />
                                                            <span className="checkmarks" />
                                                        </label>
                                                    </td>
                                                    <td className="productimgname">
                                                        <a href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html" className="product-img d-flex align-items-center">
                                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/xls.svg" alt="Product" className="me-2" />
                                                            <span>Estimation</span>
                                                        </a>
                                                    </td>
                                                    <td>Today 09:20 AM</td>
                                                    <td>140 MB</td>
                                                    <td>
                                                        <a href="javascript:void(0);" className="product-img d-flex align-items-center">
                                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-5.jpg" alt="Product" className="me-2 rounded-circle" />
                                                            <span>Nolan Harris</span>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <a href="javascript:void(0);" className><i data-feather="star" className="feather-16 me-2 color-primary" /></a>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                    <i className="fa fa-ellipsis-v" />
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="javascript:void(0);" className="dropdown-item"><i data-feather="trash-2" className="feather-14 me-2" />Permanent Delete</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item"><i data-feather="edit" className="feather-14 me-2" />Restore File</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkboxs">
                                                            <input type="checkbox" />
                                                            <span className="checkmarks" />
                                                        </label>
                                                    </td>
                                                    <td className="productimgname">
                                                        <a href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html" className="product-img d-flex align-items-center">
                                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/pdf-02.svg" alt="Product" className="me-2" />
                                                            <span>Intro.pdf</span>
                                                        </a>
                                                    </td>
                                                    <td>27 July 2023</td>
                                                    <td>70 MB</td>
                                                    <td>
                                                        <a href="javascript:void(0);" className="product-img d-flex align-items-center">
                                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-10.jpg" alt="Product" className="me-2 rounded-circle" />
                                                            <span>Me</span>
                                                        </a>
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="d-flex align-items-center">
                                                            <a href="javascript:void(0);" className><i data-feather="star" className="feather-16 me-2 color-primary" /></a>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                    <i className="fa fa-ellipsis-v" />
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="javascript:void(0);" className="dropdown-item"><i data-feather="trash-2" className="feather-14 me-2" />Permanent Delete</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item"><i data-feather="edit" className="feather-14 me-2" />Restore File</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkboxs">
                                                            <input type="checkbox" />
                                                            <span className="checkmarks" />
                                                        </label>
                                                    </td>
                                                    <td className="productimgname">
                                                        <a href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html" className="product-img d-flex align-items-center">
                                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/video.svg" alt="Product" className="me-2" />
                                                            <span>Demoworrking.mp4</span>
                                                        </a>
                                                    </td>
                                                    <td>24 July 2023<br />08:25 AM</td>
                                                    <td>180 MB</td>
                                                    <td>
                                                        <a href="javascript:void(0);" className="product-img d-flex align-items-center">
                                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-2.jpg" alt="Product" className="me-2 rounded-circle" />
                                                            <span>Daniel</span>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <a href="javascript:void(0);" className><i data-feather="star" className="feather-16 me-2 color-primary" /></a>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                    <i className="fa fa-ellipsis-v" />
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="javascript:void(0);" className="dropdown-item"><i data-feather="trash-2" className="feather-14 me-2" />Permanent Delete</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item"><i data-feather="edit" className="feather-14 me-2" />Restore File</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkboxs">
                                                            <input type="checkbox" />
                                                            <span className="checkmarks" />
                                                        </label>
                                                    </td>
                                                    <td className="productimgname">
                                                        <a href="https://dreamspos.dreamstechnologies.com/html/template/product-list.html" className="product-img d-flex align-items-center">
                                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/audio.svg" alt="Product" className="me-2" />
                                                            <span>voice.mp3</span>
                                                        </a>
                                                    </td>
                                                    <td>27 July 2023</td>
                                                    <td>80 MB</td>
                                                    <td>
                                                        <a href="javascript:void(0);" className="product-img d-flex align-items-center">
                                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-7.jpg" alt="Product" className="me-2 rounded-circle" />
                                                            <span>Henriques</span>
                                                        </a>
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="d-flex align-items-center">
                                                            <a href="javascript:void(0);" className><i data-feather="star" className="feather-16 me-2 color-primary" /></a>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false" className="dropset">
                                                                    <i className="fa fa-ellipsis-v" />
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a href="javascript:void(0);" className="dropdown-item"><i data-feather="trash-2" className="feather-14 me-2" />Permanent Delete</a></li>
                                                                    <li><a href="javascript:void(0);" className="dropdown-item"><i data-feather="edit" className="feather-14 me-2" />Restore File</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="toggle-sidebar">
                    <div className="d-flex align-items-center justify-content-between head">
                        <h4>File Preview</h4>
                        <div className="d-flex align-items-center">
                            <a href="javascript:void(0);" className="me-2 d-flex align-items-center"><i className="fa fa-star" /></a>
                            <a href="javascript:void(0);" className="me-2 d-flex align-items-center"><i data-feather="trash-2" className="feather-16 text-center text-danger" /></a>
                            <a href="javascript:void(0);" className="sidebar-closes d-flex align-items-center" aria-hidden="true"><i data-feather="x-circle" className="feather-26 color-primary" /></a>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="javascript:void(0);"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/file-manager/folder-lg.png" alt="Folder" /></a>
                        <h5>Website Backup for the Design team</h5>
                        <p>File Size : 616 MB</p>
                    </div>
                    <div className="nav nav-tabs d-flex align-items-center justify-content-between py-4 mb-4" id="nav-tab" role="tablist">
                        <a className="nav-link flex-fill active btn btn-light me-2 text-center" id="nav-home-tab" data-bs-toggle="tab" href="file-manager.html#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><i data-feather="list" className="feather-16 me-2 text-center" />Details</a>
                        <a className="nav-link flex-fill btn btn-light" id="nav-profile-tab" data-bs-toggle="tab" href="file-manager.html#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><i data-feather="clock" className="feather-16 me-2" />Activity</a>
                    </div>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <h5 className="mb-4 d-flex align-items-center"><i data-feather="edit" className="feather-20 me-2" />Properties</h5>
                            <ul className="seprator-lg">
                                <li className="mb-4">
                                    <h6>File Name</h6>
                                    <p>Website Backup for the Designteam</p>
                                </li>
                                <li className="mb-4">
                                    <h6>File Type</h6>
                                    <p>Folder</p>
                                </li>
                                <li className="mb-4">
                                    <h6>Size</h6>
                                    <p>616 MB</p>
                                </li>
                                <li className="mb-4">
                                    <h6>Created</h6>
                                    <p>22 July 2023, 08:30 PM</p>
                                </li>
                                <li className="mb-4">
                                    <h6>Location</h6>
                                    <p className="location d-inline-flex align-items-center"><i data-feather="hard-drive" className="feather-16 me-1" />Drive</p>
                                </li>
                                <li className="mb-4">
                                    <h6>File Name</h6>
                                    <p>23 July 2023, 08:30 PM</p>
                                </li>
                                <li className="mb-4">
                                    <h6>Opened On</h6>
                                    <p>28 July 2023, 06:40 PM</p>
                                </li>
                                <li>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="input-blocks summer-description-box transfer">
                                                <label>Description</label>
                                                <div id="summernote3">
                                                </div>
                                                <p>Maximum 60 Characters</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <h5 className="mb-4 d-flex align-items-center"><i data-feather="user" className="feather-20 me-2" />Who has access</h5>
                            <div className="d-flex align-items-center justify-content-between avatar-wrap">
                                <div className="avatar-access d-flex align-items-center mb-4">
                                    <span>
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 1" data-bs-original-title="Member 1"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-1.jpg" alt="Avatar" className="avatar-md" /></a>
                                    </span>
                                    <span>
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 2" data-bs-original-title="Member 2"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-2.jpg" alt="Avatar" className="avatar-md" /></a>
                                    </span>
                                    <span>
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 3" data-bs-original-title="Member 3"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-3.jpg" alt="Avatar" className="avatar-md" /></a>
                                    </span>
                                    <span>
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Member 4" data-bs-original-title="Member 4"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-4.jpg" alt="Avatar" className="avatar-md" /></a>
                                    </span>
                                    <span>
                                        <a href="javascript:void(0);" className="avatar-md add d-flex align-items-center justify-content-center"><i data-feather="plus" className="feather-16 me-1" /></a>
                                    </span>
                                </div>
                            </div>
                            <p>Owned by Andrew. Shared with James, Fin, Davis</p>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <h5 className="mb-4 d-flex align-items-center"><i data-feather="calendar" className="feather-20 me-2" />This Week</h5>
                            <ul className="mb-4">
                                <li className="mb-4">
                                    <div className="d-flex align-items-center mb-2">
                                        <a href="javascript:void(0);" className="me-3"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-1.jpg" alt="Avatar" className="avatar-md" /></a>
                                        <p>Andrew commented on 1 items <br />3:39 PM Jul 19</p>
                                    </div>
                                    <p className="d-flex align-items-center location border-0"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/folder.svg" alt="Folder" className="me-2" />Website Backup for the Design team</p>
                                </li>
                                <li className="mb-4">
                                    <div className="d-flex align-items-center mb-2">
                                        <a href="javascript:void(0);" className="me-3"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-2.jpg" alt="Avatar" className="avatar-md" /></a>
                                        <p>Drake shared an item<br />3:39 PM Jul 19</p>
                                    </div>
                                    <p className="d-flex align-items-center location border-0"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/folder.svg" alt="Folder" className="me-2" />Website Backup for the Design team</p>
                                </li>
                                <li className="mb-2">
                                    <div className="d-flex align-items-center mb-2">
                                        <a href="javascript:void(0);" className="me-3"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-3.jpg" alt="Avatar" className="avatar-md" /></a>
                                        <div><p className="mb-0 text-secondary">Melvin</p><p className="mb-0">Commentor</p></div>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="d-flex align-items-center mb-2">
                                        <a href="javascript:void(0);" className="me-3"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-4.jpg" alt="Avatar" className="avatar-md" /></a>
                                        <div><p className="mb-0 text-secondary">Drake</p><p className="mb-0">Editor</p></div>
                                    </div>
                                </li>
                            </ul>
                            <h5 className="mb-4 d-flex align-items-center"><i data-feather="calendar" className="feather-20 me-2" />Last Month</h5>
                            <ul className="mb-4">
                                <li className="mb-4">
                                    <div className="d-flex align-items-center mb-2">
                                        <a href="javascript:void(0);" className="me-3"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-1.jpg" alt="Avatar" className="avatar-md" /></a>
                                        <p>Andrew commented on 1 items <br />3:39 PM Jul 19</p>
                                    </div>
                                    <p className="d-flex align-items-center location border-0"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/folder.svg" alt="Folder" className="me-2" />Website Backup for the Design team</p>
                                </li>
                                <li className="mb-4">
                                    <div className="d-flex align-items-center mb-2">
                                        <a href="javascript:void(0);" className="me-3"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-2.jpg" alt="Avatar" className="avatar-md" /></a>
                                        <p>Drake shared an item<br />3:39 PM Jul 19</p>
                                    </div>
                                    <p className="d-flex align-items-center location border-0"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/folder.svg" alt="Folder" className="me-2" />Website Backup for the Design team</p>
                                </li>
                                <li className="mb-2">
                                    <div className="d-flex align-items-center mb-2">
                                        <a href="javascript:void(0);" className="me-3"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-3.jpg" alt="Avatar" className="avatar-md" /></a>
                                        <div><p className="mb-0 text-secondary">Melvin</p><p className="mb-0">Commentor</p></div>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="d-flex align-items-center mb-2">
                                        <a href="javascript:void(0);" className="me-3"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-4.jpg" alt="Avatar" className="avatar-md" /></a>
                                        <div><p className="mb-0 text-secondary">Drake</p><p className="mb-0">Editor</p></div>
                                    </div>
                                </li>
                            </ul>
                            <a href="javascript:void(0);" className="text-primary show-all"><i data-feather="plus-circle" className="feather-20 me-2" />Show All</a>
                        </div>
                    </div>
                </div>
                <div className="modal fade modal-default pos-modal upload-modal" id="upload-file" aria-labelledby="upload-file">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header p-4">
                                <h5>Upload File</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body p-4">
                                <div className="drag-drop text-center mb-4">
                                    <div className="upload">
                                        <a href="file-manager.html#"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/drag-drop.svg" alt="" /></a>
                                        <p>Drag and drop a <a href="file-manager.html#">file to upload</a></p>
                                    </div>
                                    <input type="file" multiple />
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>3 of 1 files Uploaded</p>
                                    <span>70%</span>
                                </div>
                                <div className="progress mt-2 mb-4">
                                    <div className="progress-bar progress-bar bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <ul>
                                    <li className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center w-85">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/folder.svg" alt="Folder" className="me-2" />
                                            <div className="flex-fill">
                                                <h6><a href="javascript:void(0);">latest-version.zip<i data-feather="check-circle" className="ms-2 feather-16" /></a></h6>
                                                <span>616 MB</span>
                                            </div>
                                        </div>
                                        <a href="javascript:void(0);" className="text-danger text-right"><i data-feather="trash-2" className="feather-16" /></a>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center w-85">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/xls.svg" alt="Folder" className="me-2" />
                                            <div className="flex-fill">
                                                <h6><a href="javascript:void(0);">Update work history.xls</a></h6>
                                                <span>616 MB</span>
                                                <div className="progress mt-2">
                                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <a href="javascript:void(0);" className="text-danger me-2 d-flex align-items-center"><i data-feather="trash-2" className="feather-16" /></a>
                                            <a href="javascript:void(0);" className="text-default d-flex align-items-center"><i data-feather="pause-circle" className="feather-16" /></a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center w-85">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/zip.svg" alt="Folder" className="me-2" />
                                            <div className="flex-fill">
                                                <h6><a href="javascript:void(0);">Updated Project.zip</a></h6>
                                                <span>616 MB</span>
                                                <div className="progress mt-2">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <a href="javascript:void(0);" className="text-danger me-2 d-flex align-items-center"><i data-feather="trash-2" className="feather-16" /></a>
                                            <a href="javascript:void(0);" className="text-default d-flex align-items-center"><i data-feather="play-circle" className="feather-16" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade modal-default pos-modal upload-modal" id="upload-folder" aria-labelledby="upload-folder">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header p-4">
                                <h5>Upload File</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body p-4">
                                <div className="drag-drop text-center mb-4">
                                    <div className="upload">
                                        <a href="file-manager.html#"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/drag-drop.svg" alt="" /></a>
                                        <p>Drag and drop a <a href="file-manager.html#">file to upload</a></p>
                                    </div>
                                    <input type="file" multiple />
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>3 of 3 files Uploaded</p>
                                    <span>100%</span>
                                </div>
                                <div className="progress mt-2 mb-4">
                                    <div className="progress-bar progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                                <ul>
                                    <li className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center w-85">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/folder.svg" alt="Folder" className="me-2" />
                                            <div className="flex-fill">
                                                <h6><a href="javascript:void(0);">latest-version<i data-feather="check-circle" className="ms-2 feather-16" /></a></h6>
                                                <span>616 MB</span>
                                            </div>
                                        </div>
                                        <a href="javascript:void(0);" className="text-danger text-right"><i data-feather="trash-2" className="feather-16" /></a>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center w-85">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/xls.svg" alt="Folder" className="me-2" />
                                            <div className="flex-fill">
                                                <h6><a href="javascript:void(0);">Update work history.xls<i data-feather="trash-2" className="feather-16" /></a></h6>
                                                <span>16 MB</span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <a href="javascript:void(0);" className="text-danger me-2"><i data-feather="trash-2" className="feather-16" /></a>
                                            <a href="javascript:void(0);" className="text-default"><i data-feather="pause-circle" className="feather-16" /></a>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center w-85">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/zip.svg" alt="Folder" className="me-2" />
                                            <div className="flex-fill">
                                                <h6><a href="javascript:void(0);">updated project.zip<i data-feather="trash-2" className="feather-16" /></a></h6>
                                                <span>14 MB</span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <a href="javascript:void(0);" className="text-danger me-2"><i data-feather="trash-2" className="feather-16" /></a>
                                            <a href="javascript:void(0);" className="text-default"><i data-feather="play-circle" className="feather-16" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="modal-footer d-sm-flex justify-content-end">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Clear</button>
                                <button type="button" className="btn btn-primary">Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade modal-default pos-modal upload-message" id="upload-message" aria-labelledby="upload-message">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header p-4">
                                <h5>Upload File</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body p-4">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p>3 of 3 files Uploaded</p>
                                    <span>100%</span>
                                </div>
                                <div className="progress mt-2 mb-4">
                                    <div className="progress-bar progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="modal-footer d-sm-flex justify-content-end">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Clear</button>
                                <button type="button" className="btn btn-primary">Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade modal-default pos-modal" id="create-folder" aria-labelledby="create-folder">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header p-4">
                                <h5>Create Folder</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body p-4">
                                <div className="row">
                                    <div className="col-12">
                                        <label className="form-label">Folder Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="modal-footer d-sm-flex justify-content-end">
                                    <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-primary">Create Folder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="customizer-links" id="setdata">
                    <ul className="sticky-sidebar">
                        <li className="sidebar-icons">
                            <a href="file-manager.html#" className="navigation-add" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Theme">
                                <i data-feather="settings" className="feather-five" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default File_Manager