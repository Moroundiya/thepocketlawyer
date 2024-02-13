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
import Integrations from './pages/Integrations';
import Forget_Password from './pages/Forget_Password';
import Plans from './pages/Plans';
import Help from './pages/Help';
import Privacy_Policy from './pages/Privacy_Policy';
import Delivery_Policy from './pages/Delivery_Policy';
import Security_Policy from './pages/Security_Policy';
import Refund_Policy from './pages/Refund_Policy';
import Grievance_Policy from './pages/Grievance_Policy';
import Search_Lawyer from './pages/Search_Lawyer';
import Search_Merchant from './pages/Search_Merchant';
import TermsAndCondition from './pages/TermsAndCondition';
import Why_Choose_Us from './pages/Why_Choose_Us';
import Support from './pages/Support';


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
    path: "referral-earnings",
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
    path: "forget-password",
    element: <Forget_Password />
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
  },
  {
    path: "integrations",
    element: <Integrations />
  },
  {
    path: "plans",
    element: <Plans />
  },
  {
    path: "help",
    element: <Help />
  },
  {
    path: "privacy-policy",
    element: <Privacy_Policy />
  },
  {
    path: "delivery-policy",
    element: <Delivery_Policy />
  },
  {
    path: "security-policy",
    element: <Security_Policy />
  },
  {
    path: "refund-policy",
    element: <Refund_Policy />
  },
  {
    path: "grievance-policy",
    element: <Grievance_Policy />
  },
  {
    path: "search-lawyer",
    element: <Search_Lawyer />
  },
  {
    path: "search-merchant",
    element: <Search_Merchant />
  },
  {
    path: "terms-and-conditions",
    element: <TermsAndCondition />
  },
  {
    path: "why-choose-us",
    element: <Why_Choose_Us />
  },
  {
    path: "support",
    element: <Support />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
