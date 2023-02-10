import React, { useState, useRef } from "react";

const Form = () => {
  //  {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc295XLjnv-F6OploZBOjowc6QCXcPCf98wfrNpgjl2ghhrDQ/viewform?embedded=true" width="640" height="382" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}

  return (
    <form
      class="form"
      action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSc295XLjnv-F6OploZBOjowc6QCXcPCf98wfrNpgjl2ghhrDQ/formResponse"
    >
      {/* <label>Name</label>
      <input name="entry.40310430" type="text" required /> */}
      <label>Name</label>
      <input name="entry.40310430" type="text" required />

      <label>Score</label>
      <input name="entry.2014535538" type="number" required />

      <input type="submit" value="Send" />
    </form>
  );
};

export default Form;