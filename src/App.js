import DisplayPolls from "./DisplayPolls";
import useFetch from "./UseFetch";
import { useEffect } from "react";

function App() {
  const { data, err, isPending } = useFetch("http://localhost:8000/Polls");

  return (
    <div>
      <h2>Welcome to Polly</h2>
      {isPending && <div>Loading...</div>}
      {data && <DisplayPolls polls={data} />}
    </div>
  );
}

export default App;
