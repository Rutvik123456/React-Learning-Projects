import MainContextProvider  from "./store/todo-item-store";
import Heading from "./Components/Heading-todo";
import Addtodo from "./Components/Addtodo";
import WelacomeMesage from "./Components/WelacomeMesage";
import Mainitems from "./Components/Mainitems";
import "./App.css";

function App() {
  return (
    <MainContextProvider>
      <center>
        <Heading />
        <Addtodo />
        <WelacomeMesage />
        <Mainitems />
      </center>
    </MainContextProvider>
  );
}

export default App;
