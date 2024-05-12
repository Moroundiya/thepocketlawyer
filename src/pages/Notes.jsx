import React from 'react'
import '../audio.css'

function Notes() {
    return (
        <div className='audio-main-parent-container'>
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
                    <a id="mobile_btn" className="mobile_btn" href="notes.html#sidebar">
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
                                <form action="notes.html#" className="dropdown">
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
                                    <a className="dropdown-item" href="https://dreamspos.dreamstechnologies.com/html/template/profile.html"> <i className="mr-2" data-feather="user" /> My
                                        Profile</a>
                                    <a className="dropdown-item" href="https://dreamspos.dreamstechnologies.com/html/template/general-settings.html"><i className="mr-2" data-feather="settings" />Settings</a>
                                    <hr className="m-0" />
                                    <a className="dropdown-item logout pb-0" href="https://dreamspos.dreamstechnologies.com/html/template/signin.html"><img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/log-out.svg" className="mr-2" alt="img" />Logout</a>
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
                                            <a href="javascript:void(0);" className="active subdrop"><i data-feather="grid" /><span>Dashboard</span><span className="menu-arrow" /></a>
                                            <ul>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/index.html">Admin Dashboard</a></li>
                                                <li><a href="https://dreamspos.dreamstechnologies.com/html/template/sales-dashboard.html">Sales Dashboard</a></li>
                                            </ul>
                                        </li>
                                        <li className="submenu">
                                            <a href="javascript:void(0);" className="subdrop active"><i data-feather="smartphone" /><span>Application</span><span className="menu-arrow" /></a>
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
                                                <li><a href="notes.html" className="active">Notes</a></li>
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
                                        <a className="tablinks nav-link active" href="notes.html#home" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" role="tab" aria-selected="true">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/menu-icon.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="notes.html#messages" id="messages-tab" data-bs-toggle="tab" data-bs-target="#product" role="tab" aria-selected="false">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/product.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="notes.html#profile" id="profile-tab" data-bs-toggle="tab" data-bs-target="#sales" role="tab" aria-selected="false">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/sales1.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="notes.html#report" id="report-tab" data-bs-toggle="tab" data-bs-target="#purchase" role="tab" aria-selected="true">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/purchase1.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="notes.html#set" id="set-tab" data-bs-toggle="tab" data-bs-target="#user" role="tab" aria-selected="true">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/users1.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="notes.html#set2" id="set-tab2" data-bs-toggle="tab" data-bs-target="#employee" role="tab" aria-selected="true">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/calendars.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="notes.html#set3" id="set-tab3" data-bs-toggle="tab" data-bs-target="#report" role="tab" aria-selected="true">
                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/printer.svg" alt="" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="notes.html#set4" id="set-tab4" data-bs-toggle="tab" data-bs-target="#document" role="tab" aria-selected="true">
                                            <i data-feather="user" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="notes.html#set5" id="set-tab6" data-bs-toggle="tab" data-bs-target="#permission" role="tab" aria-selected="true">
                                            <i data-feather="file-text" />
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="tablinks nav-link" href="notes.html#set6" id="set-tab5" data-bs-toggle="tab" data-bs-target="#settings" role="tab" aria-selected="true">
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
                                        <a href="javascript:void(0);"><span>Application</span><span className="menu-arrow" /></a>
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
                                            <li><a href="notes.html" className="active">Notes</a></li>
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
                                            <li><a href="notes.html" className="active">Notes</a></li>
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
                <div className="page-wrapper notes-page-wrapper">
                    <div className="content">
                        <div className="page-header page-add-notes  flex-sm-row flex-column">
                            <div className="add-item d-flex">
                                <div className="page-title">
                                    <h4>Notes</h4>
                                    <h6 className="mb-0">Manage your notes</h6>
                                </div>
                                <a id="toggle_btn2" className="notes-tog" href="javascript:void(0);">
                                    <i className="fas fa-chevron-left" />
                                </a>
                            </div>
                            <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-start">
                                <div className="form-sort mr-2 mb-sm-0 mb-3">
                                    {/* <i data-feather="sliders" className="info-img" /> */}
                                    <select className="select-customized">
                                        <option>Sort by Date</option>
                                        <option>Ascending </option>
                                        <option>Descending</option>
                                        <option>Recently Viewed </option>
                                        <option>Recently Added</option>
                                        <option>Creation Date </option>
                                    </select>
                                </div>
                                <ul className="table-top-head">
                                    <li>
                                        <a href="notes.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh"><i data-feather="rotate-ccw" className="feather-rotate-ccw" /></a>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Collapse" id="collapse-header"><i data-feather="chevron-up" className="feather-chevron-up" /></a>
                                    </li>
                                </ul>
                                <div className="page-btn">
                                    <a href="notes.html#" className="btn btn-added" data-bs-toggle="modal" data-bs-target="#note-units"><i data-feather="plus-circle" className="mr-2" /> Add Note</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-12 sidebars-right theiaStickySidebar section-bulk-widget">
                                <div className="notes-dash">
                                    <div className="notes-top-head">
                                        <h5> <i data-feather="file-text" className="feather-file-text" /> Notes</h5>
                                    </div>
                                    <div className="notes-top-head-submenu">
                                        <div className="nav flex-column nav-pills todo-inbox" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <button className="nav-link todo-tab todo-inbox active d-flex align-items-center" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true"> <i data-feather="inbox" className="feather-inbox" />All Notes
                                                <span className="ms-auto">
                                                    <span>2</span>
                                                </span>
                                            </button>
                                            <button className="nav-link todo-tab-btn todo-inbox" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"> <i data-feather="star" className="feather-star" /> Important</button>
                                            <button className="nav-link todo-tab todo-inbox mb-0" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"> <i data-feather="trash-2" className="feather-trash-2" />Trash</button>
                                        </div>
                                    </div>
                                    <div className="content-submenu-tag">
                                        <h6>Tags</h6>
                                        <ul className="tags-list">
                                            <li className="personal">
                                                <a href="javascript:void(0);">
                                                    <span><i className="fas fa-square" /></span>
                                                    Pending
                                                </a>
                                            </li>
                                            <li className="social">
                                                <a href="javascript:void(0);">
                                                    <span><i className="fas fa-square" /></span>
                                                    Onhold
                                                </a>
                                            </li>
                                            <li className="public">
                                                <a href="javascript:void(0);">
                                                    <span><i className="fas fa-square" /></span>
                                                    Inprogress
                                                </a>
                                            </li>
                                            <li className="work">
                                                <a href="javascript:void(0);">
                                                    <span><i className="fas fa-square" /></span>
                                                    Done
                                                </a>
                                            </li>
                                        </ul>
                                        <h6>Priority</h6>
                                        <ul className="priority-list">
                                            <li className="medium">
                                                <a href="javascript:void(0);">
                                                    <span><i className="fas fa-square" /></span>
                                                    Medium
                                                </a>
                                            </li>
                                            <li className="high">
                                                <a href="javascript:void(0);">
                                                    <span><i className="fas fa-square" /></span>
                                                    High
                                                </a>
                                            </li>
                                            <li className="low">
                                                <a href="javascript:void(0);">
                                                    <span><i className="fas fa-square" /></span>
                                                    Low
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 budget-role-notes">
                                <div className="section-bulk-wrap">
                                    <div className="bulk-action-type">
                                        <div className="form-sort select-bluk ">
                                            <select className="select-customized">
                                                <option>Bulk Actions</option>
                                                <option>Delete Marked</option>
                                                <option>Unmark All</option>
                                                <option>Mark All</option>
                                            </select>
                                        </div>
                                        <a href="javascript:void(0);" className="btn btn-added">Apply</a>
                                        <div className="search-set">
                                            <div className="search-input">
                                                <a href="javascript:void(0);" className="btn btn-searchset"><i data-feather="search" className="feather-search" /></a>
                                                <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                                    <label> <input type="search" className="form-control form-control-sm" placeholder="Search" /></label>
                                                </div></div>
                                        </div>
                                    </div>
                                    <div className="form-sort">
                                        {/* <i data-feather="filter" className="feather-filter" /> */}
                                        <select className="select-customized">
                                            <option>Recent</option>
                                            <option>Last Modified</option>
                                            <option>Last Modified by me</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade active show" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                        <div className="section-notes-slider">
                                            <div className="row" id='disable-notes-control'>
                                                <div className="notes-content">
                                                    <div className="notes-header">
                                                        <h3 className='mr-3'>Important Notes </h3>
                                                    </div>
                                                    {/* <div className="notes-close">
                                                        <a href="javascript:void(0);"><i className="fas fa-times" /> Close </a>
                                                    </div> */}
                                                </div>
                                                <div className="col-md-12" id="notes-important">
                                                    <div className="notes-slider owl-carousel">
                                                        <div className="notes-card">
                                                            <div className="notes-card-body">
                                                                <p className="badged"><i className="fas fa-circle" /> Low</p>
                                                                <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="fas fa-ellipsis-v" />
                                                                </a>
                                                                <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                    <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i data-feather="edit" /></span>Edit</a>
                                                                    <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="trash-2" /></span>Delete</a>
                                                                    <a href="javascript:void(0);" className="dropdown-item"><span><i data-feather="star" /></span>Not Important</a>
                                                                    <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i data-feather="eye" /></span>View</a>
                                                                </div>
                                                            </div>
                                                            <div className="notes-slider-content">
                                                                <h4>
                                                                    <a href="javascript:void(0);">
                                                                        Plan a trip to another country
                                                                    </a>
                                                                </h4>
                                                                <p>Space, the final frontier. These are the voyages of the Starship Enterprise.</p>
                                                            </div>
                                                            <div className="notes-slider-widget">
                                                                <div className="notes-logo">
                                                                    <a href="javascript:void(0);">
                                                                        <span>
                                                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/profile-01.png" alt="Profile" className="img-fluid" />
                                                                        </span>
                                                                    </a>
                                                                    <div className="d-flex">
                                                                        <span className="low-square"><i className="fas fa-square" /></span>
                                                                        <p> Personal</p>
                                                                    </div>
                                                                </div>
                                                                <div className="notes-star-delete">
                                                                    <a href="javascript:void(0);">
                                                                        <span><i className="fas fa-star" /></span>
                                                                    </a>
                                                                    <a href="javascript:void(0);">
                                                                        <span><i data-feather="trash-2" /></span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="notes-card medium">
                                                            <div className="notes-card-body">
                                                                <p className="badged medium"><i className="fas fa-circle" /> Medium</p>
                                                                <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="fas fa-ellipsis-v" />
                                                                </a>
                                                                <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                    <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i data-feather="edit" /></span>Edit</a>
                                                                    <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="trash-2" /></span>Delete</a>
                                                                    <a href="notes.html#" className="dropdown-item"><span><i data-feather="star" /></span>Not Important</a>
                                                                    <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i data-feather="eye" /></span>View</a>
                                                                </div>
                                                            </div>
                                                            <div className="notes-slider-content">
                                                                <h4>
                                                                    <a href="javascript:void(0);">
                                                                        Improve touch typing
                                                                    </a>
                                                                </h4>
                                                                <p>Well, the way they make shows is, they make one show.</p>
                                                            </div>
                                                            <div className="notes-slider-widget">
                                                                <div className="notes-logo">
                                                                    <a href="javascript:void(0);">
                                                                        <span>
                                                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/profile-02.png" alt="Profile" className="img-fluid" />
                                                                        </span>
                                                                    </a>
                                                                    <div className="d-flex">
                                                                        <span className="medium-square"><i className="fas fa-square" /></span>
                                                                        <p className="medium"> Work</p>
                                                                    </div>
                                                                </div>
                                                                <div className="notes-star-delete">
                                                                    <a href="javascript:void(0);">
                                                                        <span><i className="fas fa-star" /></span>
                                                                    </a>
                                                                    <a href="javascript:void(0);">
                                                                        <span><i data-feather="trash-2" /></span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="notes-card high">
                                                            <div className="notes-card-body">
                                                                <p className="badged high"><i className="fas fa-circle" /> High</p>
                                                                <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="fas fa-ellipsis-v" />
                                                                </a>
                                                                <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                    <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i data-feather="edit" /></span>Edit</a>
                                                                    <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="trash-2" /></span>Delete</a>
                                                                    <a href="notes.html#" className="dropdown-item"><span><i data-feather="star" /></span>Not Important</a>
                                                                    <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i data-feather="eye" /></span>View</a>
                                                                </div>
                                                            </div>
                                                            <div className="notes-slider-content">
                                                                <h4>
                                                                    <a href="javascript:void(0);">
                                                                        Learn calligraphy
                                                                    </a></h4>
                                                                <p>Calligraphy, the art of beautiful handwriting. The term may derive from the Greek words. </p>
                                                            </div>
                                                            <div className="notes-slider-widget">
                                                                <div className="notes-logo">
                                                                    <a href="javascript:void(0);">
                                                                        <span>
                                                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/profile-03.png" alt="Profile" className="img-fluid" />
                                                                        </span>
                                                                    </a>
                                                                    <div className="d-flex">
                                                                        <span className="high-square"><i className="fas fa-square" /></span>
                                                                        <p className="high"> Social</p>
                                                                    </div>
                                                                </div>
                                                                <div className="notes-star-delete">
                                                                    <a href="javascript:void(0);">
                                                                        <span><i className="fas fa-star" /></span>
                                                                    </a>
                                                                    <a href="javascript:void(0);">
                                                                        <span><i data-feather="trash-2" /></span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="notes-card medium">
                                                            <div className="notes-card-body">
                                                                <p className="badged medium"><i className="fas fa-circle" /> Medium</p>
                                                                <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="fas fa-ellipsis-v" />
                                                                </a>
                                                                <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                    <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i data-feather="edit" /></span>Edit</a>
                                                                    <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="trash-2" /></span>Delete</a>
                                                                    <a href="notes.html#" className="dropdown-item"><span><i data-feather="star" /></span>Not Important</a>
                                                                    <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i data-feather="eye" /></span>View</a>
                                                                </div>
                                                            </div>
                                                            <div className="notes-slider-content">
                                                                <h4>
                                                                    <a href="javascript:void(0);">
                                                                        Improve touch typing
                                                                    </a>
                                                                </h4>
                                                                <p>Well, the way they make shows is, they make one show.</p>
                                                            </div>
                                                            <div className="notes-slider-widget">
                                                                <div className="notes-logo">
                                                                    <a href="javascript:void(0);">
                                                                        <span>
                                                                            <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/profiles/profile-02.png" alt="Profile" className="img-fluid" />
                                                                        </span>
                                                                    </a>
                                                                    <div className="d-flex">
                                                                        <span className="medium-square"><i className="fas fa-square" /></span>
                                                                        <p className="medium"> Work</p>
                                                                    </div>
                                                                </div>
                                                                <div className="notes-star-delete">
                                                                    <a href="javascript:void(0);">
                                                                        <span><i className="fas fa-star" /></span>
                                                                    </a>
                                                                    <a href="javascript:void(0);">
                                                                        <span><i data-feather="trash-2" /></span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="section-card-body" id="notes-trash">
                                            <div className="row">
                                                <div className="col-md-4 d-flex">
                                                    <div className="notes-card notes-card-details w-100">
                                                        <div className="notes-card-body">
                                                            <p className="badged medium"><i className="fas fa-circle" /> Medium</p>
                                                            <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v" />
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i data-feather="edit" /></span>Edit</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="trash-2" /></span>Delete</a>
                                                                <a href="notes.html#" className="dropdown-item"><span><i data-feather="star" /></span>Not Important</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i data-feather="eye" /></span>View</a>
                                                            </div>
                                                        </div>
                                                        <div className="notes-wrap-content">
                                                            <h4>
                                                                <a href="javascript:void(0);">
                                                                    Backup Files EOD
                                                                </a>
                                                            </h4>
                                                            <p className="wrap-cal"><i data-feather="calendar" className="feather-calendar" /> 25 Jul 2023</p>
                                                            <p>Project files should be took backup before end of the day.</p>
                                                        </div>
                                                        <div className="notes-slider-widget notes-widget-profile">
                                                            <div className="notes-logo">
                                                                <a href="javascript:void(0);">
                                                                    <span>
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-26.jpg" alt="Profile" className="img-fluid" />
                                                                    </span>
                                                                </a>
                                                                <div className="d-flex">
                                                                    <span className="medium-square"><i className="fas fa-square" /></span>
                                                                    <p className="medium"> Work</p>
                                                                </div>
                                                            </div>
                                                            <div className="notes-star-delete">
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="star" /></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="trash-2" /></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div className="notes-card notes-card-details w-100">
                                                        <div className="notes-card-body">
                                                            <p className="badged high"><i className="fas fa-circle" /> High</p>
                                                            <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v" />
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i data-feather="edit" /></span>Edit</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="trash-2" /></span>Delete</a>
                                                                <a href="notes.html#" className="dropdown-item"><span><i data-feather="star" /></span>Not Important</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i data-feather="eye" /></span>View</a>
                                                            </div>
                                                        </div>
                                                        <div className="notes-wrap-content">
                                                            <h4>
                                                                <a href="javascript:void(0);">
                                                                    Download Server Logs
                                                                </a>
                                                            </h4>
                                                            <p className="wrap-cal"><i data-feather="calendar" className="feather-calendar" /> 27 Jul 2023</p>
                                                            <p>Server log is a text document that contains a record of all activity.</p>
                                                        </div>
                                                        <div className="notes-slider-widget notes-widget-profile">
                                                            <div className="notes-logo">
                                                                <a href="javascript:void(0);">
                                                                    <span>
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-27.jpg" alt="Profile" className="img-fluid" />
                                                                    </span>
                                                                </a>
                                                                <div className="d-flex">
                                                                    <span className="high-square"><i className="fas fa-square" /></span>
                                                                    <p className="high"> Social</p>
                                                                </div>
                                                            </div>
                                                            <div className="notes-star-delete">
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="star" /></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="trash-2" /></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div className="notes-card notes-card-details w-100">
                                                        <div className="notes-card-body">
                                                            <p className="badged low"><i className="fas fa-circle" /> Low</p>
                                                            <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v" />
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i data-feather="edit" /></span>Edit</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="trash-2" /></span>Delete</a>
                                                                <a href="notes.html#" className="dropdown-item"><span><i data-feather="star" /></span>Not Important</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i data-feather="eye" /></span>View</a>
                                                            </div>
                                                        </div>
                                                        <div className="notes-wrap-content">
                                                            <h4>
                                                                <a href="javascript:void(0);">
                                                                    Team meet at Starbucks
                                                                </a>
                                                            </h4>
                                                            <p className="wrap-cal"><i data-feather="calendar" className="feather-calendar" /> 13 Aug 2023</p>
                                                            <p>Meeting all teamets at Starbucks for identifying them all.</p>
                                                        </div>
                                                        <div className="notes-slider-widget notes-widget-profile">
                                                            <div className="notes-logo">
                                                                <a href="javascript:void(0);">
                                                                    <span>
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-28.jpg" alt="Profile" className="img-fluid" />
                                                                    </span>
                                                                </a>
                                                                <div className="d-flex">
                                                                    <span className="low-square"><i className="fas fa-square" /></span>
                                                                    <p className="low"> Personal</p>
                                                                </div>
                                                            </div>
                                                            <div className="notes-star-delete">
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="star" /></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="trash-2" /></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div className="notes-card notes-card-details w-100">
                                                        <div className="notes-card-body">
                                                            <p className="badged high"><i className="fas fa-circle" /> High</p>
                                                            <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v" />
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i data-feather="edit" /></span>Edit</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="trash-2" /></span>Delete</a>
                                                                <a href="notes.html#" className="dropdown-item"><span><i data-feather="star" /></span>Not Important</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i data-feather="eye" /></span>View</a>
                                                            </div>
                                                        </div>
                                                        <div className="notes-wrap-content">
                                                            <h4>
                                                                <a href="javascript:void(0);">
                                                                    Create a compost pile
                                                                </a>
                                                            </h4>
                                                            <p className="wrap-cal"><i data-feather="calendar" className="feather-calendar" /> 23 Aug 2023</p>
                                                            <p>Compost pile refers to fruit and vegetable scraps, used tea, coffee grounds etc..</p>
                                                        </div>
                                                        <div className="notes-slider-widget notes-widget-profile">
                                                            <div className="notes-logo">
                                                                <a href="javascript:void(0);">
                                                                    <span>
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-29.jpg" alt="Profile" className="img-fluid" />
                                                                    </span>
                                                                </a>
                                                                <div className="d-flex">
                                                                    <span className="high-square"><i className="fas fa-square" /></span>
                                                                    <p className="high"> Social</p>
                                                                </div>
                                                            </div>
                                                            <div className="notes-star-delete">
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="star" /></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="trash-2" /></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div className="notes-card notes-card-details w-100">
                                                        <div className="notes-card-body">
                                                            <p className="badged low"><i className="fas fa-circle" /> Low</p>
                                                            <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v" />
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i data-feather="edit" /></span>Edit</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="trash-2" /></span>Delete</a>
                                                                <a href="notes.html#" className="dropdown-item"><span><i data-feather="star" /></span>Not Important</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i data-feather="eye" /></span>View</a>
                                                            </div>
                                                        </div>
                                                        <div className="notes-wrap-content">
                                                            <h4>
                                                                <a href="javascript:void(0);">
                                                                    Take a hike at a local park
                                                                </a>
                                                            </h4>
                                                            <p className="wrap-cal"><i data-feather="calendar" className="feather-calendar" /> 04 Sep 2023</p>
                                                            <p>Hiking involves a long energetic walk in a natural environment.</p>
                                                        </div>
                                                        <div className="notes-slider-widget notes-widget-profile">
                                                            <div className="notes-logo">
                                                                <a href="javascript:void(0);">
                                                                    <span>
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-30.jpg" alt="Profile" className="img-fluid" />
                                                                    </span>
                                                                </a>
                                                                <div className="d-flex">
                                                                    <span className="low-square"><i className="fas fa-square" /></span>
                                                                    <p className="low"> Personal</p>
                                                                </div>
                                                            </div>
                                                            <div className="notes-star-delete">
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="star" /></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="trash-2" /></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div className="notes-card notes-card-details w-100">
                                                        <div className="notes-card-body">
                                                            <p className="badged medium"><i className="fas fa-circle" /> Medium</p>
                                                            <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v" />
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i data-feather="edit" /></span>Edit</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="trash-2" /></span>Delete</a>
                                                                <a href="notes.html#" className="dropdown-item"><span><i data-feather="star" /></span>Not Important</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i data-feather="eye" /></span>View</a>
                                                            </div>
                                                        </div>
                                                        <div className="notes-wrap-content">
                                                            <h4>
                                                                <a href="javascript:void(0);">
                                                                    Research a topic interested
                                                                </a>
                                                            </h4>
                                                            <p className="wrap-cal"><i data-feather="calendar" className="feather-calendar" /> 17 Sep 2023</p>
                                                            <p>Research a topic interested by listen actively and attentively.</p>
                                                        </div>
                                                        <div className="notes-slider-widget notes-widget-profile">
                                                            <div className="notes-logo">
                                                                <a href="javascript:void(0);">
                                                                    <span>
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-31.jpg" alt="Profile" className="img-fluid" />
                                                                    </span>
                                                                </a>
                                                                <div className="d-flex">
                                                                    <span className="medium-square"><i className="fas fa-square" /></span>
                                                                    <p className="medium"> Work</p>
                                                                </div>
                                                            </div>
                                                            <div className="notes-star-delete">
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="star" /></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="trash-2" /></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                        <div className="section-card-body pt-0" id="notes-trash2">
                                            <div className="row">
                                                <div className="col-md-4 d-flex">
                                                    <div className="notes-card notes-card-details w-100">
                                                        <div className="notes-card-body">
                                                            <p className="badged medium"><i className="fas fa-circle" /> Medium</p>
                                                            <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v" />
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i data-feather="edit" /></span>Edit</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="trash-2" /></span>Delete</a>
                                                                <a href="notes.html#" className="dropdown-item"><span><i data-feather="star" /></span>Not Important</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i data-feather="eye" /></span>View</a>
                                                            </div>
                                                        </div>
                                                        <div className="notes-wrap-content">
                                                            <h4>
                                                                <a href="javascript:void(0);">
                                                                    Backup Files EOD
                                                                </a>
                                                            </h4>
                                                            <p className="wrap-cal"><i data-feather="calendar" className="feather-calendar" /> 25 Jul 2023</p>
                                                            <p>Project files should be took backup before end of the day.</p>
                                                        </div>
                                                        <div className="notes-slider-widget notes-widget-profile">
                                                            <div className="notes-logo">
                                                                <a href="javascript:void(0);">
                                                                    <span>
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-26.jpg" alt="Profile" className="img-fluid" />
                                                                    </span>
                                                                </a>
                                                                <div className="d-flex">
                                                                    <span className="medium-square"><i className="fas fa-square" /></span>
                                                                    <p className="medium"> Work</p>
                                                                </div>
                                                            </div>
                                                            <div className="notes-star-delete">
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="star" /></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="trash-2" /></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div className="notes-card notes-card-details w-100">
                                                        <div className="notes-card-body">
                                                            <p className="badged high"><i className="fas fa-circle" /> High</p>
                                                            <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v" />
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i data-feather="edit" /></span>Edit</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="trash-2" /></span>Delete</a>
                                                                <a href="notes.html#" className="dropdown-item"><span><i data-feather="star" /></span>Not Important</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i data-feather="eye" /></span>View</a>
                                                            </div>
                                                        </div>
                                                        <div className="notes-wrap-content">
                                                            <h4>
                                                                <a href="javascript:void(0);">
                                                                    Download Server Logs
                                                                </a>
                                                            </h4>
                                                            <p className="wrap-cal"><i data-feather="calendar" className="feather-calendar" /> 27 Jul 2023</p>
                                                            <p>Server log is a text document that contains a record of all activity.</p>
                                                        </div>
                                                        <div className="notes-slider-widget notes-widget-profile">
                                                            <div className="notes-logo">
                                                                <a href="javascript:void(0);">
                                                                    <span>
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-27.jpg" alt="Profile" className="img-fluid" />
                                                                    </span>
                                                                </a>
                                                                <div className="d-flex">
                                                                    <span className="high-square"><i className="fas fa-square" /></span>
                                                                    <p className="high"> Social</p>
                                                                </div>
                                                            </div>
                                                            <div className="notes-star-delete">
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="star" /></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="trash-2" /></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div className="notes-card notes-card-details w-100">
                                                        <div className="notes-card-body">
                                                            <p className="badged low"><i className="fas fa-circle" /> Low</p>
                                                            <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v" />
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i data-feather="edit" /></span>Edit</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="trash-2" /></span>Delete</a>
                                                                <a href="notes.html#" className="dropdown-item"><span><i data-feather="star" /></span>Not Important</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i data-feather="eye" /></span>View</a>
                                                            </div>
                                                        </div>
                                                        <div className="notes-wrap-content">
                                                            <h4>
                                                                <a href="javascript:void(0);">
                                                                    Team meet at Starbucks
                                                                </a>
                                                            </h4>
                                                            <p className="wrap-cal"><i data-feather="calendar" className="feather-calendar" /> 13 Aug 2023</p>
                                                            <p>Meeting all teamets at Starbucks for identifying them all.</p>
                                                        </div>
                                                        <div className="notes-slider-widget notes-widget-profile">
                                                            <div className="notes-logo">
                                                                <a href="javascript:void(0);">
                                                                    <span>
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-28.jpg" alt="Profile" className="img-fluid" />
                                                                    </span>
                                                                </a>
                                                                <div className="d-flex">
                                                                    <span className="low-square"><i className="fas fa-square" /></span>
                                                                    <p className="low"> Personal</p>
                                                                </div>
                                                            </div>
                                                            <div className="notes-star-delete">
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="star" /></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="trash-2" /></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div className="notes-card notes-card-details w-100">
                                                        <div className="notes-card-body">
                                                            <p className="badged high"><i className="fas fa-circle" /> High</p>
                                                            <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v" />
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i data-feather="edit" /></span>Edit</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="trash-2" /></span>Delete</a>
                                                                <a href="notes.html#" className="dropdown-item"><span><i data-feather="star" /></span>Not Important</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i data-feather="eye" /></span>View</a>
                                                            </div>
                                                        </div>
                                                        <div className="notes-wrap-content">
                                                            <h4>
                                                                <a href="javascript:void(0);">
                                                                    Create a compost pile
                                                                </a>
                                                            </h4>
                                                            <p className="wrap-cal"><i data-feather="calendar" className="feather-calendar" /> 23 Aug 2023</p>
                                                            <p>Compost pile refers to fruit and vegetable scraps, used tea, coffee grounds etc..</p>
                                                        </div>
                                                        <div className="notes-slider-widget notes-widget-profile">
                                                            <div className="notes-logo">
                                                                <a href="javascript:void(0);">
                                                                    <span>
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-29.jpg" alt="Profile" className="img-fluid" />
                                                                    </span>
                                                                </a>
                                                                <div className="d-flex">
                                                                    <span className="high-square"><i className="fas fa-square" /></span>
                                                                    <p className="high"> Social</p>
                                                                </div>
                                                            </div>
                                                            <div className="notes-star-delete">
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="star" /></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="trash-2" /></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div className="notes-card notes-card-details w-100">
                                                        <div className="notes-card-body">
                                                            <p className="badged low"><i className="fas fa-circle" /> Low</p>
                                                            <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v" />
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i data-feather="edit" /></span>Edit</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="trash-2" /></span>Delete</a>
                                                                <a href="notes.html#" className="dropdown-item"><span><i data-feather="star" /></span>Not Important</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i data-feather="eye" /></span>View</a>
                                                            </div>
                                                        </div>
                                                        <div className="notes-wrap-content">
                                                            <h4>
                                                                <a href="javascript:void(0);">
                                                                    Take a hike at a local park
                                                                </a>
                                                            </h4>
                                                            <p className="wrap-cal"><i data-feather="calendar" className="feather-calendar" /> 04 Sep 2023</p>
                                                            <p>Hiking involves a long energetic walk in a natural environment.</p>
                                                        </div>
                                                        <div className="notes-slider-widget notes-widget-profile">
                                                            <div className="notes-logo">
                                                                <a href="javascript:void(0);">
                                                                    <span>
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-30.jpg" alt="Profile" className="img-fluid" />
                                                                    </span>
                                                                </a>
                                                                <div className="d-flex">
                                                                    <span className="low-square"><i className="fas fa-square" /></span>
                                                                    <p className="low"> Personal</p>
                                                                </div>
                                                            </div>
                                                            <div className="notes-star-delete">
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="star" /></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="trash-2" /></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div className="notes-card notes-card-details w-100">
                                                        <div className="notes-card-body">
                                                            <p className="badged medium"><i className="fas fa-circle" /> Medium</p>
                                                            <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v" />
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-note-units"><span><i data-feather="edit" /></span>Edit</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="trash-2" /></span>Delete</a>
                                                                <a href="notes.html#" className="dropdown-item"><span><i data-feather="star" /></span>Not Important</a>
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#view-note-units"><span><i data-feather="eye" /></span>View</a>
                                                            </div>
                                                        </div>
                                                        <div className="notes-wrap-content">
                                                            <h4>
                                                                <a href="javascript:void(0);">
                                                                    Research a topic interested
                                                                </a>
                                                            </h4>
                                                            <p className="wrap-cal"><i data-feather="calendar" className="feather-calendar" /> 17 Sep 2023</p>
                                                            <p>Research a topic interested by listen actively and attentively.</p>
                                                        </div>
                                                        <div className="notes-slider-widget notes-widget-profile">
                                                            <div className="notes-logo">
                                                                <a href="javascript:void(0);">
                                                                    <span>
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-31.jpg" alt="Profile" className="img-fluid" />
                                                                    </span>
                                                                </a>
                                                                <div className="d-flex">
                                                                    <span className="medium-square"><i className="fas fa-square" /></span>
                                                                    <p className="medium"> Work</p>
                                                                </div>
                                                            </div>
                                                            <div className="notes-star-delete">
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="star" /></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="trash-2" /></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                        <div className="row">
                                            <div className="col-12 d-flex align-items-center justify-content-end">
                                                <a href="notes.html#" className="btn btn-cancel notes-trash-btn">
                                                    <span> <i data-feather="trash-2" className="feather-trash-2" /> </span>
                                                    Restore all
                                                </a>
                                            </div>
                                        </div>
                                        <div className="section-card-body pt-0" id="notes-trash3">
                                            <div className="row">
                                                <div className="col-md-4 d-flex">
                                                    <div className="notes-card notes-card-details w-100">
                                                        <div className="notes-card-body">
                                                            <p className="badged medium"><i className="fas fa-circle" /> Medium</p>
                                                            <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v" />
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="edit" /></span>Permanent Delete</a>
                                                                <a href="javascript:void(0);" className="dropdown-item"><span><i data-feather="trash-2" /></span>Restore Task</a>
                                                            </div>
                                                        </div>
                                                        <div className="notes-wrap-content">
                                                            <h4>
                                                                <a href="javascript:void(0);">
                                                                    Backup Files EOD
                                                                </a>
                                                            </h4>
                                                            <p className="wrap-cal"><i data-feather="calendar" className="feather-calendar" /> 25 Jul 2023</p>
                                                            <p>Project files should be took backup before end of the day.</p>
                                                        </div>
                                                        <div className="notes-slider-widget notes-widget-profile">
                                                            <div className="notes-logo">
                                                                <a href="javascript:void(0);">
                                                                    <span>
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-31.jpg" alt="Profile" className="img-fluid" />
                                                                    </span>
                                                                </a>
                                                                <div className="d-flex">
                                                                    <span className="medium-square"><i className="fas fa-square" /></span>
                                                                    <p className="medium"> Work</p>
                                                                </div>
                                                            </div>
                                                            <div className="notes-star-delete">
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="star" /></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="trash-2" /></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div className="notes-card notes-card-details w-100">
                                                        <div className="notes-card-body">
                                                            <p className="badged high"><i className="fas fa-circle" /> High</p>
                                                            <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v" />
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="edit" /></span>Permanent Delete</a>
                                                                <a href="javascript:void(0);" className="dropdown-item"><span><i data-feather="trash-2" /></span>Restore Task</a>
                                                            </div>
                                                        </div>
                                                        <div className="notes-wrap-content">
                                                            <h4>
                                                                <a href="javascript:void(0);">
                                                                    Download Server Logs
                                                                </a>
                                                            </h4>
                                                            <p className="wrap-cal"><i data-feather="calendar" className="feather-calendar" /> 27 Jul 2023</p>
                                                            <p>Server log is a text document that contains a record of all activity.</p>
                                                        </div>
                                                        <div className="notes-slider-widget notes-widget-profile">
                                                            <div className="notes-logo">
                                                                <a href="javascript:void(0);">
                                                                    <span>
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-29.jpg" alt="Profile" className="img-fluid" />
                                                                    </span>
                                                                </a>
                                                                <div className="d-flex">
                                                                    <span className="high-square"><i className="fas fa-square" /></span>
                                                                    <p className="high"> Social</p>
                                                                </div>
                                                            </div>
                                                            <div className="notes-star-delete">
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="star" /></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="trash-2" /></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 d-flex">
                                                    <div className="notes-card notes-card-details w-100">
                                                        <div className="notes-card-body">
                                                            <p className="badged low"><i className="fas fa-circle" /> Low</p>
                                                            <a href="notes.html#" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v" />
                                                            </a>
                                                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                                                                <a href="notes.html#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete-note-units"><span><i data-feather="edit" /></span>Permanent Delete</a>
                                                                <a href="javascript:void(0);" className="dropdown-item"><span><i data-feather="trash-2" /></span>Restore Task</a>
                                                            </div>
                                                        </div>
                                                        <div className="notes-wrap-content">
                                                            <h4>
                                                                <a href="javascript:void(0);">
                                                                    Team meet at Starbucks
                                                                </a>
                                                            </h4>
                                                            <p className="wrap-cal"><i data-feather="calendar" className="feather-calendar" /> 13 Aug 2023</p>
                                                            <p>Meeting all teamets at Starbucks for identifying them all.</p>
                                                        </div>
                                                        <div className="notes-slider-widget notes-widget-profile">
                                                            <div className="notes-logo">
                                                                <a href="javascript:void(0);">
                                                                    <span>
                                                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/users/user-30.jpg" alt="Profile" className="img-fluid" />
                                                                    </span>
                                                                </a>
                                                                <div className="d-flex">
                                                                    <span className="low-square"><i className="fas fa-square" /></span>
                                                                    <p className="low"> Personal</p>
                                                                </div>
                                                            </div>
                                                            <div className="notes-star-delete">
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="star" /></span>
                                                                </a>
                                                                <a href="javascript:void(0);">
                                                                    <span><i data-feather="trash-2" /></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row custom-pagination">
                                    <div className="col-md-12">
                                        <div className="paginations d-flex justify-content-end">
                                            <span><i className="fas fa-chevron-left" /></span>
                                            <ul className="d-flex align-items-center page-wrap">
                                                <li>
                                                    <a href="javascript:void(0);" className="active">
                                                        1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        3
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);">
                                                        4
                                                    </a>
                                                </li>
                                            </ul>
                                            <span><i className="fas fa-chevron-right" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="note-units">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="page-wrapper-new p-0">
                            <div className="content">
                                <div className="modal-header border-0 custom-modal-header">
                                    <div className="page-title">
                                        <h4>Add New Note</h4>
                                    </div>
                                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body custom-modal-body">
                                    <form action="notes.html">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Note Title</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label className="form-label">User</label>
                                                    <select className="select-customized">
                                                        <option>Choose</option>
                                                        <option>Recent1</option>
                                                        <option>Recent2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Tag</label>
                                                    <select className="select-customized">
                                                        <option>Select</option>
                                                        <option>Recent1</option>
                                                        <option>Recent2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Priority</label>
                                                    <select className="select-customized">
                                                        <option>Select</option>
                                                        <option>Recent1</option>
                                                        <option>Recent2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="mb-3 summer-description-box notes-summernote">
                                                    <label className="form-label">Descriptions</label>
                                                    <div id="summernote" />
                                                    <p>Maximum 60 Characters</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer-btn">
                                            <button type="button" className="btn btn-cancel mr-2" data-bs-dismiss="modal">Cancel</button>
                                            <button type="submit" className="btn btn-submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="edit-note-units">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="page-wrapper-new p-0">
                            <div className="content">
                                <div className="modal-header border-0 custom-modal-header">
                                    <div className="page-title">
                                        <h4>Edit Note</h4>
                                    </div>
                                    <div className=" edit-note-head d-flex align-items-center">
                                        <a href="notes.html#" className="mr-2">
                                            <span>
                                                <i data-feather="trash-2" />
                                            </span>
                                        </a>
                                        <a href="notes.html#" className="mr-2">
                                            <span>
                                                <i data-feather="star" />
                                            </span>
                                        </a>
                                        <a href="notes.html#" className="mr-2">
                                            <span>
                                                <i data-feather="eye" />
                                            </span>
                                        </a>
                                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="modal-body custom-modal-body">
                                    <form action="notes.html">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label>Note Title</label>
                                                    <input type="text" className="form-control" placeholder="Meet Lisa to discuss project details" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Assignee</label>
                                                    <select className="select-customized">
                                                        <option>Choose</option>
                                                        <option>Recent1</option>
                                                        <option>Recent2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Tag</label>
                                                    <select className="select-customized">
                                                        <option>Onhold</option>
                                                        <option>Onhold</option>
                                                        <option>Onhold</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Priority</label>
                                                    <select className="select-customized">
                                                        <option>High</option>
                                                        <option>Medium</option>
                                                        <option>Low</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="mb-3 summer-description-box notes-summernote">
                                                    <label className="form-label">Descriptions</label>
                                                    <div id="summernote2" />
                                                    <p>Maximum 60 Characters</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer-btn">
                                            <button type="button" className="btn btn-cancel mr-2" data-bs-dismiss="modal">Cancel</button>
                                            <button type="submit" className="btn btn-submit">Save Changes</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="delete-note-units">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="page-wrapper-new p-0">
                            <div className="content">
                                <div className="delete-popup">
                                    <div className="delete-image text-center mx-auto">
                                        <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/close-circle.png" alt="Img" className="img-fluid" />
                                    </div>
                                    <div className="delete-heads">
                                        <h4>Are You Sure?</h4>
                                        <p>Do you really want to delete this item, This process cannot be undone.</p>
                                    </div>
                                    <div className="modal-footer-btn delete-footer">
                                        <a href='' className="btn btn-cancel mr-2" data-bs-dismiss="modal">Cancel</a>
                                        <a href='' className="btn btn-submit">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="view-note-units">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="page-wrapper-new p-0">
                                <div className="content">
                                    <div className="modal-header border-0 custom-modal-header">
                                        <div className="page-title edit-page-title">
                                            <h4>Notes</h4>
                                            <p>Personal</p>
                                        </div>
                                        <div className=" edit-noted-head d-flex align-items-center">
                                            <a href="javascript:void(0);">
                                                <span>
                                                    <i data-feather="trash-2" />
                                                </span>
                                            </a>
                                            <a href="notes.html#" className="mr-2">
                                                <span>
                                                    <i data-feather="star" />
                                                </span>
                                            </a>
                                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="modal-body custom-modal-body">
                                        <form action="notes.html">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="edit-head-view">
                                                        <h6>Take a hike at a local park</h6>
                                                        <p>Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside.
                                                            Walking for pleasure developed in Europe during the eighteenth century.
                                                            Religious pilgrimages have existed much longer but they involve walking long
                                                            distances for a spiritual purpose associated with specific religions and also
                                                            we achieve inner peace while we hike at a local park.</p>
                                                        <p className="badged low"><i className="fas fa-circle" /> Low</p>
                                                    </div>
                                                    <div className="modal-footer-btn edit-footer-menu">
                                                        <button type="button" className="btn btn-cancel mr-2" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="customizer-links" id="setdata">
                    <ul className="sticky-sidebar">
                        <li className="sidebar-icons">
                            <a href="notes.html#" className="navigation-add" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-original-title="Theme">
                                <i data-feather="settings" className="feather-five" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div >
        </div>
    )
}

export default Notes