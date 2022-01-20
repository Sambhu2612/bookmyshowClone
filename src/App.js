import './App.css';
import Header from './components/Header/Header';
import Carousel_1 from './components/Carousel_1/Carousel_1';
import Main from './components/Main/Main';
import Carousel_3 from './components/Carousel_3/Carousel_3';
import Premiere from './components/Premieres/Premiere';
import OnlineStreamingEvents from './components/OnlineStreamingEvents/OnlineStreamingEvents';
import Loader from './components/Loader/Loader';
import OutdoorEvents from './components/OutdoorEvents/OutdoorEvents';
import LaughterTherapy from './components/LaughterTherapy/LaughterTherapy';
import PopularEvents from './components/PopularEvents/PopularEvents';
import TopGames from './components/TopGames/TopGames';
import ExploreFun from './components/ExploreFun/ExploreFun';
import Privacy from './components/Privacy/Privacy';
import Footer from './components/Footer/Footer';
import Search_Screen from './components/Search_Screen/Search_Screen';
import Black_Overlay from './components/Black_Overlay/Black_Overlay';
import City_Selector from './components/City_Selector/City_Selector';
import Login_section from './components/login_section/login_section';
import Slide_Bar from './components/Slide_Bar/Slide_Bar';
import Stream_Carousel_1 from './components/Stream_Carousel_1/Stream_Carousel_1';
import All_Movies from './components/All_Movies/All_Movies';
import Single_Movies from './components/Single_Movies/Single_Movies';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Registration_Section from './components/Registration_Section/Registration_Section';


function App() {
  return (
    <Router>
        <section className="Laptop">
            <Header />
            <Search_Screen />
            <Black_Overlay />
            <City_Selector />
            <Login_section />
            <Slide_Bar />
            <Registration_Section />
            <Switch>
              <Route exact path="/">
                  <Carousel_1 />
                  <Main />
                  <Carousel_3 />
                  <Premiere />
                  <OnlineStreamingEvents />
                  <OutdoorEvents />
                  <LaughterTherapy />
                  <PopularEvents />
                  <TopGames />
                  <ExploreFun />
              </Route>
              <Route exact path="/Stream">
                  <Stream_Carousel_1 />
              </Route>
              <Route exact path="/Movies">
                  <Carousel_1 />
                  <All_Movies />
              </Route>
              <Route exact path="/Movies/:movid">
                  <Single_Movies />
              </Route>
            </Switch>
            <Loader />
            <Privacy />
            <Footer />
        </section>
    </Router>
  );
}

export default App;
