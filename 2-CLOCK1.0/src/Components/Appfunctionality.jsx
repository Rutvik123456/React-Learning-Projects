function AppFunction() {
  let time = new Date();

  return (
    <div>
      This is the current time: {time.toDateString()}-
      {time.toLocaleTimeString()}
    </div>
  );
}

export default AppFunction;
