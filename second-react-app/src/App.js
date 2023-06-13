function App(){
  let id ="id1"
  let str =`hello ravi`;
  let pi=3.14;
 

  return(
  <>
    <h1 id="id1">hello world</h1>
    <h1>PI={pi}</h1>
    <h1 id={id}>{str}</h1>
   

    <h1 id="id1">hello world</h1>
    <h1 id={"id1"}>hello world</h1>
    <h1 id={`id1`}>hello world</h1>
    <h1 id={id}>hello world</h1>

  
  </>
  )
}
export default App;