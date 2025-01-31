const DisplayPolls = ({ polls }) => {
  return (
    <div id="polls">
      {polls.map((poll) => {
        return (
          <div id="poll-container" key={poll.id}>
            <h2 id="poll-title">{poll.title}</h2>
            <p id="poll-poller">{poll.poller}</p>
            <p>
              {poll.options.map((option) => (
                <div id="options" key={option.optionNumber}>
                  <button id="option-button">{option.optionValue}</button>
                  <p id="option-votes">{option.optionVotes}</p>
                </div>
              ))}
            </p>
            <p id="poll-body">{poll.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPolls;
