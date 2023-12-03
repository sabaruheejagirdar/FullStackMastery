function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Saba Ruhee!!!</h1>
      <h4>React- Function based code</h4>
      <p> <b>Date-</b> {currDate.toDateString()}</p>
      <p> <b>Time-</b> {currDate.toLocaleTimeString()}.</p> 
    </div>
  );
}

export default App;