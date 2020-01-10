import React from "react";
import "./ProfilePic.scss";
import logo from "../../assets/logo.png";
import { connect } from "react-redux";
const ProfilePic = ({ image }) => {
  return (
    <div
      className="picture"
      style={{
        backgroundImage: `url(${
          image
            ? `data:${image.mimeType};base64,${new Buffer(image.data).toString(
                "base64"
              )}`
            : logo
        })`
      }}
    ></div>
  );
};

const mapStateToProps = state => ({
  image: state.user.profile.image
});

export default connect(mapStateToProps, {})(ProfilePic);
