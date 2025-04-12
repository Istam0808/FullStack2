import "./home_style.scss"
import LeftScreen from "./components/LeftScreen";
import Left from "./components/LeftScreen";
import RightScreen from "./components/RightScreen";

function Home() {
  return ( 
    <div className="home">
      <LeftScreen />
      <RightScreen></RightScreen>
    </div>
   );
}

export default Home;