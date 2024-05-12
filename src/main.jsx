import React from 'react';
import Homepage from './pages/Homepage';
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
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
import Make_Deposit from './pages/Make_Deposit';
import My_Account from './pages/My_Account';
import Payment_Request from './pages/Payment_Request';
import Pending_History from './pages/Pending_History';
import Referral_Earnings from './pages/Referral_Earnings';
import Referrals from './pages/Referrals';
import Tickets from './pages/Tickets';
import Transfer_Fund from './pages/Transfer_Fund';
import View_Profile from './pages/View_Profile';
import Earnings_History from './pages/Earnings_History';
import Integrations from './pages/Integrations';
import Forget_Password from './pages/Forget_Password';
// import Plans from './pages/Plans';
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
import Career from './pages/Career';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import About_Us from './pages/About_Us';
import Solutions from './pages/Solutions';
import Merchant_Products from './pages/Merchant_Products';
import View_Details from './pages/View_Details';
import Coming_Soon from './pages/Coming_Soon';
import Training_Sessions from './pages/Training_Sessions';
import Availability from './pages/Availability';
import Estore from './pages/Estore';
import Pricing_Plans from './pages/Pricing_Plans';
import Audio_call from './pages/Audio_call';
import Call_History from './pages/Call_History';
import Email from './pages/Email';
import File_Manager from './pages/File_Manager';
import Chat from './pages/Chat';
import Todo from './pages/Todo';
import Notes from './pages/Notes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "about-us",
    element: <About_Us />
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
    path: "signin",
    element: <Signin />
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
    path: "signup",
    element: <Signup />
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
    path: "pricing-plans",
    element: <Pricing_Plans />
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
  },
  {
    path: "career",
    element: <Career />
  },
  {
    path: "solutions",
    element: <Solutions />
  },
  {
    path: "merchant-products",
    element: <Merchant_Products />
  },
  {
    path: "view-details",
    element: <View_Details />
  },
  {
    path: "404",
    element: <Coming_Soon />
  },
  {
    path: "training-sessions",
    element: <Training_Sessions />
  },
  {
    path: "availability",
    element: <Availability />
  },
  {
    path: "e-store",
    element: <Estore />
  },
  {
    path: "audio-call",
    element: <Audio_call />
  },
  {
    path: "call-history",
    element: <Call_History />
  },
  {
    path: "email",
    element: <Email />
  },
  {
    path: "file-manager",
    element: <File_Manager />
  },
  {
    path: "chat",
    element: <Chat />
  },
  {
    path: "todo",
    element: <Todo />
  },
  {
    path: "notes",
    element: <Notes />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
