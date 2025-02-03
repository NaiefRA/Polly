const DisplayPolls = ({ polls }) => {
  const handleClick = (optionNo) => {
    async function updateVotes(pollId, optionNumber) {
      try {
        const response = await fetch(`http://localhost:3000/Polls/${pollId}`);
        const poll = await response.json();

        const updatedOptions = poll.options.map((option) => {
          if (option.optionNumber === optionNumber) {
            return {
              ...option,
              optionVotes: option.optionVotes + 1,
            };
          }
          return option;
        });

        const updateResponse = await fetch(
          `http://localhost:3000/Polls/${pollId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              options: updatedOptions,
            }),
          }
        );

        if (!updateResponse.ok) {
          throw new Error("Failed to update votes");
        }

        return await updateResponse.json();
      } catch (error) {
        console.error("Error updating votes:", error);
        throw error;
      }
    }
  };

  return (
    <div id="polls">
      {polls.map((poll) => {
        return (
          <div id="poll-container" key={poll.id}>
            <h2 id="poll-title">{poll.title}</h2>
            <p id="poll-poller">{poll.poller}</p>
            <div>
              {poll.options.map((option) => (
                <div id="options" key={option.optionNumber}>
                  <button
                    id="option-button"
                    onClick={() => {
                      handleClick(option.optionNumber);
                    }}
                  >
                    {option.optionValue}
                  </button>
                  <p id="option-votes">{option.optionVotes}</p>
                </div>
              ))}
            </div>
            <p id="poll-body">{poll.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPolls;
