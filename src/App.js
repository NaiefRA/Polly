import DisplayPolls from "./DisplayPolls";
import useFetch from "./UseFetch";
import { useEffect } from "react";

function App() {
  const { data, err, isPending } = useFetch("http://localhost:8000/Polls");

  return (
    <div>
      <h2 id="page-title">Welcome to Polly</h2>
      {!err && isPending && <div>Loading...</div>}
      {data && <DisplayPolls polls={data} />}
      {err && <div>{err}</div>}
    </div>
  );
}

export default App;
