function App(){
  let str =`hello ravi`;
  let pi=3.14;
  let active=true;
  let isUserLoggedIn = true;

  return(
  <>
    <h1>hello ravi</h1>
    <h1>PI={pi}</h1>
    <h1>{str}</h1>
    <h1>{active ? "GM" : "GN"}</h1>

    {active && <h1>GM</h1>}
    {active ? <h1>GM</h1> : <h1>GNight</h1>}

    {isUserLoggedIn && <h1>Welcome</h1>}

  
  </>
  )
}
export default App;