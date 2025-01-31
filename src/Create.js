const Create = () => {
  return (
    <div id="create-container">
      <form id="create-form">
        <label id="create-title-label">Title</label>
        <input id="create-title-input" type="text" />

        <label id="create-name-label">Name</label>
        <input id="create-name-input" type="text" />

        <label id="create-body-label">Body</label>
        <textarea id="create-body-textarea" />

        <button id="create-submit-button" type="submit">
          Create Poll
        </button>
      </form>
    </div>
  );
};

export default Create;
