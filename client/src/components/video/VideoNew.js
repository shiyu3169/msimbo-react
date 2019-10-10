import React, { useState } from "react";
import { connect } from "react-redux";
import InputGroup from "../layout/InputGroup";
import { addVideo, createVideo } from "../../actions/videoActions";

const VideoNew = ({ createVideo, addVideo }) => {
  const [form, setForm] = useState({ name: "" });

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addVideo(form);
  };

  return (
    <form className="row" onSubmit={onSubmit}>
      <div className="col-3">
        <InputGroup name="name" placeholder="Video Name" onChange={onChange} />
      </div>
      <div className="col-7">
        <InputGroup name="src" placeholder="Playlist Id" onChange={onChange} />
      </div>
      <div className="col-2">
        <button className="btn btn-outline-success">Submit</button>
        <button
          onClick={createVideo}
          type="button"
          className="btn btn-outline-dark"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default connect(
  null,
  { addVideo, createVideo }
)(VideoNew);
