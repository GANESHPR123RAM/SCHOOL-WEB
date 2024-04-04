import IndexHome from './component/HomePage/indexHome';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/FooterPage'
import Teachers from './component/AboutUsPage/Teachers'
import Event from './component/EventPage/Event'
import TermsConditions from './component/Footer/TermsConditions'

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import ContactUs from './component/ContactUsPage/ContactUs';
import OverPastResult from './component/OverPastResults/OverPastResult';
import Alumni from './component/Alumni/AlumniPage';
import Admissions from './component/Admissions/Admissions';
import About from './component/AboutUsPage/About';
import Gallery from './component/Gallery/Gallery';

function App() {
  return (
    <>
      <Router>

        <React.Fragment>
          <Navbar />
        </React.Fragment>
        <Routes>
          <Route path='/Home' element={<IndexHome />}>
          </Route>
          <Route path='/' element={< Navigate to='Home' />}>
          </Route>
          <Route path='/About' element={<About />}>
          </Route>
          <Route path='/Event' element={<Event />}>
          </Route>
          <Route path='/Contact' element={<ContactUs />}>
          </Route>
          <Route path='/TermsConditions' element={<TermsConditions />}>
          </Route>
          <Route path='/PastYear' element={<OverPastResult />}>
          </Route>
          <Route path='/Alumni' element={<Alumni />}>
          </Route>
          <Route path='/Admissions' element={<Admissions />}>
          </Route>
          <Route path='/MeetTheTeam' element={<Teachers />}>
          </Route>
          <Route path='/Gallery' element={<Gallery />}>
          </Route>
        </Routes>
        <React.Fragment>
          <Footer />
        </React.Fragment>
      </Router>

    </>
  );
}

export default App;
