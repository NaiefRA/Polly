const DisplayPolls = ({ polls }) => {
  return (
    <div>
      {polls.map((poll) => {
        return (
          <div key={poll.id}>
            <h2>{poll.title}</h2>
            <p>{poll.poller}</p>
            <p>{poll.votes}</p>
            <p>{poll.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPolls;
