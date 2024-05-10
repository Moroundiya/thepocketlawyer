import React from 'react';
import '../audio.css';
import '../audio-feather.css';
// import '../audio-jquery';
// import '../audio-script'
// import '../audio-boot'
// import '../sticky-sidebar'
// import '../rocket'
// import '../slimscroll'
// import '../history'
// import '../select2'
// import '../feather-pro'
// import '../datatable'


function Audio_call() {
    return (
        <div>
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
                    <a id="mobile_btn" className="mobile_btn" href="audio-call.html#sidebar">
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
                                <form action="audio-call.html#" className="dropdown">
                                    <div className="searchinputs dropdown-toggle" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false">
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
                                                <li className="submenu submenu-two"><a href="javascript:void(0);" className="active subdrop">Call<span className="menu-arrow inside-submenu" /></a>
                                                    <ul>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/video-call.html">Video Call</a></li>
                                                        <li><a href="audio-call.html" className="active">Audio Call</a></li>
                                                        <li><a href="https://dreamspos.dreamstechnologies.com/html/template/call-history.html">Call History</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/calendar.html">Calendar</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email.html">Email</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/todo.html">To Do</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/notes.html">Notes</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/file-manager.html">File Manager</a></li>
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
                            <aside id="aside" className="ui-aside">
                                <ul className="tab nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link active" href="audio-call.html#home" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" role="tab" aria-selected="true">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/menu-icon.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="audio-call.html#messages" id="messages-tab" data-bs-toggle="tab" data-bs-target="#product" role="tab" aria-selected="false">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/product.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="audio-call.html#profile" id="profile-tab" data-bs-toggle="tab" data-bs-target="#sales" role="tab" aria-selected="false">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/sales1.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="audio-call.html#report" id="report-tab" data-bs-toggle="tab" data-bs-target="#purchase" role="tab" aria-selected="true">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/purchase1.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="audio-call.html#set" id="set-tab" data-bs-toggle="tab" data-bs-target="#user" role="tab" aria-selected="true">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/users1.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="audio-call.html#set2" id="set-tab2" data-bs-toggle="tab" data-bs-target="#employee" role="tab" aria-selected="true">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/calendars.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="audio-call.html#set3" id="set-tab3" data-bs-toggle="tab" data-bs-target="#report" role="tab" aria-selected="true">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/printer.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="audio-call.html#set4" id="set-tab4" data-bs-toggle="tab" data-bs-target="#document" role="tab" aria-selected="true">
                                            <i data-feather="user" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="audio-call.html#set5" id="set-tab6" data-bs-toggle="tab" data-bs-target="#permission" role="tab" aria-selected="true">
                                            <i data-feather="file-text" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="audio-call.html#set6" id="set-tab5" data-bs-toggle="tab" data-bs-target="#settings" role="tab" aria-selected="true">
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
                                            <li className="submenu submenu-two"><a href="javascript:void(0);" className="active subdrop"><span>Call</span><span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/video-call.html">Video Call</a></li>
                                                    <li><a href="audio-call.html" className="active">Audio Call</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/call-history.html">Call History</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/calendar.html">Calendar</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email.html">Email</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/todo.html">To Do</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/notes.html">Notes</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/file-manager.html">File Manager</a></li>
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
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/ribbon.html">Ribbon</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/clipboard.html">Clipboard</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/drag-drop.html">Drag &amp; Drop</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/rangeslider.html">Range Slider</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/rating.html">Rating</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/text-editor.html">Text Editor</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/counter.html">Counter</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/scrollbar.html">Scrollbar</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/stickynote.html">Sticky Note</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/timeline.html">Timeline</a></li>
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
                                            <li className="submenu submenu-two"><a href="javascript:void(0);" className="active subdrop"><span>Call</span><span className="menu-arrow inside-submenu" /></a>
                                                <ul>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/video-call.html">Video Call</a></li>
                                                    <li><a href="audio-call.html" className="active">Audio Call</a></li>
                                                    <li><a href="https://dreamspos.dreamstechnologies.com/html/template/call-history.html">Call History</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/calendar.html">Calendar</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/email.html">Email</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/todo.html">To Do</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/notes.html">Notes</a></li>
                                            <li><a href="https://dreamspos.dreamstechnologies.com/html/template/file-manager.html">File Manager</a></li>
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
                <div className="page-wrapper">
                    <div className="content">
                        <div className="page-header d-flex justify-content-end">
                            <div>
                                <ul className="table-top-head">
                                    <li>
                                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="rotate"><i data-feather="rotate-ccw" className="feather-rotate-ccw" /></a>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header"><i data-feather="chevron-up" className="feather-chevron-up" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="conference-meet-group">
                                            <div className="meeting-list">
                                                <div className="join-contents horizontal-view fade-whiteboard">
                                                    <div className="join-video audio-calls user-active">
                                                        <div className="audio-call-group">
                                                            <ul>
                                                                <li className="active">
                                                                    <div className="avatar ">
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/avatar/avatar-2.jpg" className="rounded-circle" alt="image" />
                                                                        <div className="more-icon">
                                                                            <a href="javascript:void(0);">
                                                                                <i className="feather feather-radio" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="user-audio-call">
                                                                        <h5>Mark Villiams</h5>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="avatar ">
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-16.jpg" className="rounded-circle" alt="image" />
                                                                        <div className="more-icon audio-more-icon">
                                                                            <a href="javascript:void(0);" className="other-mic-off">
                                                                                <i className="bx bx-microphone" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="user-audio-call">
                                                                        <h5>Benjamin</h5>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="record-time">
                                                            <span>40:12</span>
                                                        </div>
                                                        <div className="meet-drop meet-mutes-bottom">
                                                            <ul>
                                                                <li><a href="javascript:void(0);" id="show-message"><i className="bx bx-message-alt-dots" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="right-user-side chat-rooms theiaStickySidebar mb-2" id="chat-room">
                                                <div className=" slime-grp">
                                                    <div className="left-chat-title">
                                                        <div className="chat-title">
                                                            <h4>Message</h4>
                                                        </div>
                                                        <div className="contact-close_call">
                                                            <a href="audio-call.html#" className="close_profile close_profile4">
                                                                <i data-feather="x" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="card-body-blk slimscroll  p-0">
                                                        <div className="chat-msg-blk ">
                                                            <div className="chats">
                                                                <div className="chat-avatar">
                                                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-01.jpg" className="dreams_chat" alt="image" />
                                                                </div>
                                                                <div className="chat-content">
                                                                    <div className="message-content">
                                                                        <h4>Hi Everyone.!</h4>
                                                                    </div>
                                                                    <div className="chat-profile-name d-flex justify-content-end">
                                                                        <h6>10:00 AM</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="chats chats-right">
                                                                <div className="chat-content">
                                                                    <div className="message-content">
                                                                        <h4>Good Morning..! Today we have meeting about the new product.</h4>
                                                                    </div>
                                                                    <div className="chat-profile-name text-end">
                                                                        <h6><i className="bx bx-check-double" /> 10:00</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="chat-avatar">
                                                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-02.jpg" className=" dreams_chat" alt="image" />
                                                                </div>
                                                            </div>
                                                            <div className="chats">
                                                                <div className="chat-avatar">
                                                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-01.jpg" className=" dreams_chat" alt="image" />
                                                                </div>
                                                                <div className="chat-content">
                                                                    <div className="message-content">
                                                                        <h4>Hi.! Good Morning all.</h4>
                                                                    </div>
                                                                    <div className="chat-profile-name d-flex justify-content-end">
                                                                        <h6>10:00 AM</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="chats">
                                                                <div className="chat-avatar">
                                                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-01.jpg" className=" dreams_chat" alt="image" />
                                                                </div>
                                                                <div className="chat-content">
                                                                    <div className="message-content">
                                                                        <h4>Nice..which category it belongs to?</h4>
                                                                    </div>
                                                                    <div className="chat-profile-name d-flex justify-content-end">
                                                                        <h6>10:00 AM</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="chats">
                                                                <div className="chat-avatar">
                                                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-01.jpg" className=" dreams_chat" alt="image" />
                                                                </div>
                                                                <div className="chat-content">
                                                                    <div className="message-content">
                                                                        <h4>Great.! This is the second new product that comes in this week.</h4>
                                                                    </div>
                                                                    <div className="chat-profile-name d-flex justify-content-end">
                                                                        <h6>10:00 AM</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="chats">
                                                                <div className="chat-avatar">
                                                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-01.jpg" className=" dreams_chat" alt="image" />
                                                                </div>
                                                                <div className="chat-content">
                                                                    <div className="message-content">
                                                                        <h4>Hi.! Good Morning all.</h4>
                                                                    </div>
                                                                    <div className="chat-profile-name d-flex justify-content-end">
                                                                        <h6>10:00 AM</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="chats">
                                                                <div className="chat-avatar">
                                                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-01.jpg" className=" dreams_chat" alt="image" />
                                                                </div>
                                                                <div className="chat-content">
                                                                    <div className="message-content">
                                                                        <h4>Nice..which category it belongs to?</h4>
                                                                    </div>
                                                                    <div className="chat-profile-name d-flex justify-content-end">
                                                                        <h6>10:00 AM</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="chats chats-right">
                                                                <div className="chat-content">
                                                                    <div className="message-content">
                                                                        <h4>Good Morning..! Today we have meeting about the new product.</h4>
                                                                    </div>
                                                                    <div className="chat-profile-name text-end">
                                                                        <h6><i className="bx bx-check-double" /> 10:00</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="chat-avatar">
                                                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-02.jpg" className="dreams_chat" alt="image" />
                                                                </div>
                                                            </div>
                                                            <div className="chats">
                                                                <div className="chat-avatar">
                                                                    <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-01.jpg" className=" dreams_chat" alt="image" />
                                                                </div>
                                                                <div className="chat-content">
                                                                    <div className="message-content">
                                                                        <h4>Great.! This is the second new product that comes in this week.</h4>
                                                                    </div>
                                                                    <div className="chat-profile-name d-flex justify-content-end">
                                                                        <h6>10:00 AM</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat-footer">
                                                            <form>
                                                                <div className="smile-col comman-icon">
                                                                    <a href="audio-call.html#"><i className="far fa-smile" /></a>
                                                                </div>
                                                                <div className="attach-col comman-icon">
                                                                    <a href="audio-call.html#"><i className="fas fa-paperclip" /></a>
                                                                </div>
                                                                <div className="micro-col comman-icon">
                                                                    <a href="audio-call.html#"><i className="bx bx-microphone" /></a>
                                                                </div>
                                                                <input type="text" className="form-control chat_form" placeholder="Enter Message....." />
                                                                <div className="send-chat comman-icon">
                                                                    <a href="audio-call.html#"><i data-feather="send" /></a>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="meet-call-menu-blk">
                                            <div className="video-call-action">
                                                <ul className="nav">
                                                    <li><a href="javascript:void(0);" className="mute-bt "><i className="bx bx-microphone" /></a></li>
                                                    <li><a href="javascript:void(0);" className="call-end"><i data-feather="phone" /></a></li>
                                                    <li><a href="javascript:void(0);"><i className="bx bx-video-off" /></a></li>
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
            <div className="customizer-links" id="setdata">
                <ul className="sticky-sidebar">
                    <li className="sidebar-icons">
                        <a href="audio-call.html#" className="navigation-add" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Theme">
                            <i data-feather="settings" className="feather-five" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Audio_call