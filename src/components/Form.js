import React, { useState } from "react";
function Form() {
  const [submitted, setSubmitted] = useState(false);
  const inputSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.location = "/";
    document.getElementById("form").reset();
  };
  return (
    <>
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
      />
      <form
        action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSc295XLjnv-F6OploZBOjowc6QCXcPCf98wfrNpgjl2ghhrDQ/formResponse"
        method="post"
        target="hidden_iframe"
        onSubmit={submitted}
      >
        <label>Name</label>
        <input name="entry.40310430" type="text" placeholder="Name" />
        <br />
        <label>Score</label>
        <input name="entry.2014535538" type="number" placeholder="Score" />
        <br />
        <input type="submit" value="Add" />
        <div>
          <input
            input
            type="reset"
            value="Update"
            onClick={() => window.location.reload()}
          />
        </div>
      </form>
    </>
  );
}
export default Form;
