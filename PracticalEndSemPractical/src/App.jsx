import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";

function App(){
  return(
    <>
    <div>
      <h1>Parent component</h1>
      <Child1 name={"Ankit"}/>
      <Child2 age={19}/>
    </div>
    </>
  )
}
export default App;