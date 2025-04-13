import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserPost = () => {
  return (
    <div className="d-flex mb-3">
      <img
        src="https://storage.googleapis.com/a1aa/image/JAUU9ERGzAmftsNC6qbbTJd8UfA4l84Zgtfvj_f2PeM.jpg"
        alt="User profile picture"
        className="rounded-circle me-3"
        width="50"
        height="50"
      />
      <div>
        <p className="fw-bold mb-1">DevUser1</p>
        <p className="bg-light p-2 rounded">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt
          eget ante eget feugiat. Praesent adipiscing tortor eu tincidunt
          tempus. Sed convallis est in ante sodales, sit amet consectetur leo
          commodo.
        </p>
        <div className="text-muted small">
          <a href="#" className="me-2">
            Comment
          </a>
          -
          <a href="#" className="mx-2">
            Like
          </a>
          -
          <a href="#" className="mx-2">
            Follow
          </a>
          -
          <a href="#" className="ms-2">
            Share
          </a>
        </div>
        <p className="text-muted small mt-2">7 Likes</p>
        <div className="d-flex mt-2">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Enter Comment"
          />
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  );
};

const WallSection = () => {
  return (
    <div className="container py-4">
      <div className="row">
        {/* Main Content */}
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Wall</h2>
              <textarea
                className="form-control mb-3"
                placeholder="Write on the wall"
              ></textarea>
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              {/* Call UserPost function three times */}
              <UserPost />
              <UserPost />
              <UserPost />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallSection;