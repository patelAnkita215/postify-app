import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/MainComponent/HomeComponent";
import MessageComponent from "./component/MainComponent/MessageComponent";
import SettingComponent from "./component/MainComponent/SettingComponent";
import ExploreComponent from "./component/MainComponent/ExploreComponent";
import NotificationComponent from "./component/MainComponent/NotificationComponent";
import HeaderComponent from "./component/MainComponent/HeaderComponent";
import ProfileComponent from "./component/MainComponent/ProfileComponent";


// const App = () => {
//   return (
//     <>
//       <HeaderComponent />
//       <ExploreComponent />
//     </>
//   );
// }

const App = () => {
  return (
    <>
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<MessageComponent />} />
          <Route path="/setting" element={<SettingComponent />} />
          <Route path="/explore" element={<ExploreComponent />} />
          <Route path="/notification" element={<NotificationComponent />} />
          <Route path="/myprofile" element={<ProfileComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
