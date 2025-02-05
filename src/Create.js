import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [poller, setPoller] = useState("");
  const [body, setBody] = useState("");
  const [options, setOptions] = useState();

  const addOption = (e) => {
    e.preventDefault();
    console.log("Hello");

    return (
      <>
        <label>Option</label>
        <input type="text" required></input>
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const poll = { body, title, poller };
    fetch("http://localhost:8000/Polls", {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    });
  };

  return (
    <div id="create-container">
      <form id="create-form">
        <label className="create-label">Question</label>
        <input
          className="create-text"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="create-label">Name</label>
        <input
          className="create-text"
          type="text"
          value={poller}
          onChange={(e) => setPoller(e.target.value)}
        />

        <label className="create-label">Body</label>
        <textarea
          id="create-body-textarea"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button id="create-option-button" onClick={addOption}>
          Add Option
        </button>

        <button id="create-submit-button" type="submit">
          Create Poll
        </button>
      </form>
    </div>
  );
};

export default Create;
