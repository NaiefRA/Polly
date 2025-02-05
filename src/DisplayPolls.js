import React from "react";

const DisplayPolls = ({ polls }) => {
  return (
    <div className="polls-grid">
      {polls.map((poll) => (
        <div className="poll-card" key={poll.id}>
          <div className="poll-header">
            <h2 className="poll-title">{poll.title}</h2>
            <p className="poll-poller">Created by: {poll.poller}</p>
          </div>

          <div className="poll-options">
            {poll.options.map((option) => (
              <div className="poll-option" key={option.optionNumber}>
                <button className="option-button">{option.optionValue}</button>
                <span className="option-votes">{option.optionVotes} votes</span>
              </div>
            ))}
          </div>

          <p className="poll-body">{poll.body}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayPolls;
