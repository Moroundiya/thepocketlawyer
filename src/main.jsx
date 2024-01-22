import React from 'react';
import Homepage from './pages/Homepage';
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './pages/About';
import All_Transactions from './pages/All_Transactions';
import Banner from './pages/Banner';
import Blog_Category from './pages/Blog_Category';
import Blog_Single from './pages/Blog_Single';
import Change_Password from './pages/Change_Password';
import Change_Pin from './pages/Change_Pin';
import Contact_Us from './pages/Contact_Us';
import Deposit_History from './pages/Deposit_History';
import Deposit_List from './pages/Deposit_List';
import Echance_Money from './pages/Echance_Money';
import Email_Notification from './pages/Email_Notification';
import Exchange_History from './pages/Exchange_History';
import Faq from './pages/Faq';
import Investment from './pages/Investment';
import Login from './pages/Login';
import Make_Deposit from './pages/Make_Deposit';
import My_Account from './pages/My_Account';
import Payment_Request from './pages/Payment_Request';
import Pending_History from './pages/Pending_History';
import Referral_Earnings from './pages/Referral_Earnings';
import Referrals from './pages/Referrals';
import Register from './pages/Register';
import Tickets from './pages/Tickets';
import Transfer_Fund from './pages/Transfer_Fund';
import View_Profile from './pages/View_Profile';
import Earnings_History from './pages/Earnings_History';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "all-transactions",
    element: <All_Transactions />
  },
  {
    path: "banner",
    element: <Banner />
  },
  {
    path: "blog-category",
    element: <Blog_Category />
  },
  {
    path: "blog-single",
    element: <Blog_Single />
  },
  {
    path: "change-password",
    element: <Change_Password />
  },
  {
    path: "change-pin",
    element: <Change_Pin />
  },
  {
    path: "contact",
    element: <Contact_Us />
  },
  {
    path: "deposit-history",
    element: <Deposit_History />
  },
  {
    path: "deposit-list",
    element: <Deposit_List />
  },
  {
    path: "earnings-history",
    element: <Earnings_History />
  },
  {
    path: "echance-money",
    element: <Echance_Money />
  },
  {
    path: "email-notification",
    element: <Email_Notification />
  },
  {
    path: "exchange-history",
    element: <Exchange_History />
  },
  {
    path: "faq",
    element: <Faq />
  },
  {
    path: "investment",
    element: <Investment />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "make-deposit",
    element: <Make_Deposit />
  },
  {
    path: "my-account",
    element: <My_Account />
  },
  {
    path: "payment-request",
    element: <Payment_Request />
  },
  {
    path: "pending-history",
    element: <Pending_History />
  },
  {
    path: "referral_earnings",
    element: <Referral_Earnings />
  },
  {
    path: "referrals",
    element: <Referrals />
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "tickets",
    element: <Tickets />
  },
  {
    path: "transfer-fund",
    element: <Transfer_Fund />
  },
  {
    path: "view-profile",
    element: <View_Profile />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
