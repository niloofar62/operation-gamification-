import React, { useState, useRef } from "react";

const Form = () => {
  //  {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc295XLjnv-F6OploZBOjowc6QCXcPCf98wfrNpgjl2ghhrDQ/viewform?embedded=true" width="640" height="382" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}

  const formRef = useRef(null);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbx_BXbjXFqhDe8nzkrIS3_JdxCIsSTZc3MC3dytZ1rjoaceLTo2nKRDZTp7Ymyk_gGS/exec";
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container">
        <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
          <div className="input-style">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Housekeeper Name *"
            />
          </div>
          <div className="input-style">
            <label htmlFor="name">Score</label>
            <input
              type="number"
              name="score"
              placeholder="Housekeeper Score *"
            />
          </div>
          <div className="input-style">
            <input type="submit" value={loading ? "Loading..." : "Submit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
