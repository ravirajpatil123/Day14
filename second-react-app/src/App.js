function App(){
  let str =`hello ravi`;
  let pi=3.14;
  let user = { id:1 , name: "Ravi"};

  return(
  <>
    <h1>hello ravi</h1>
    <h1>PI={pi}</h1>
    <h1>{str}</h1>
    <h1>ID: {user.id}, Name: {user.name}</h1>

  
  </>
  )
}
export default App;