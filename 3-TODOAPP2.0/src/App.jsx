import Heading from "./Components/Heading-todo";
import Addtodo from "./Components/Addtodo";
import Mainitems from "./Components/Mainitems";
import './App.css'


function App() {

  let data = [{
    task : "Buy milk" ,
    date :'04/10/25',
  },{
    task : "Go to colleage" ,
    date :'26/10/25',
  },{
    task : "Fight" ,
    date :'right now',
  },]


  return (
    <center>
      <Heading />
      <Addtodo />
      <Mainitems datareact={data} /> 
    </center>
  );
}

export default App;
