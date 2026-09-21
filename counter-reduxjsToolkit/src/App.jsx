import "bootstrap/dist/css/bootstrap.min.css";
import Control from "./components/Controls";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import "./App.css";
import PrivacyMessage from "./components/PrivacyMessage";
import { useSelector } from "react-redux";

function App() {
  const privacy = useSelector((store)=>(store.privacy));
  return (
    <Container>
      <div className="px-4 py-5 my-5 text-center">
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ?<PrivacyMessage /> :<DisplayCounter />}
          <Control />
        </div>
      </div>
    </Container>
  );
}

export default App;
