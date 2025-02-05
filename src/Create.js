import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [poller, setPoller] = useState("");
  const [body, setBody] = useState("");
  const [options, setOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState("");

  const addOption = (e) => {
    e.preventDefault();

    const newOption = { optionValue: currentOption, optionVotes: 0 };

    setOptions([...options, newOption]);
    setCurrentOption("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const poll = { body, title, poller, options };
    fetch("http://localhost:8000/Polls", {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(poll),
    }).then(() => {
      console.log("Works?");
      setTitle("");
      setPoller("");
      setBody("");
      setOptions([]);
    });
  };

  return (
    <div id="create-container">
      <form id="create-form" onSubmit={handleSubmit}>
        {/* title */}
        <label className="create-label">Question</label>
        <input
          className="create-text"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* author */}
        <label className="create-label">Name</label>
        <input
          className="create-text"
          type="text"
          value={poller}
          onChange={(e) => setPoller(e.target.value)}
        />
        {/* body */}
        <label className="create-label">Body</label>
        <textarea
          id="create-body-textarea"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        {/* options */}

        <h3>Options</h3>
        <div>
          {options.map((option) => {
            return (
              <div>
                <label>{option.optionValue}</label>
                <button>remove</button>
              </div>
            );
          })}
        </div>
        <div>
          <input
            className="create-text"
            type="text"
            value={currentOption}
            onChange={(e) => setCurrentOption(e.target.value)}
          />

          <button id="create-option-button" onClick={addOption}>
            Add Option
          </button>
        </div>
        <button id="create-submit-button" type="submit">
          Create Poll
        </button>
      </form>
    </div>
  );
};

export default Create;
