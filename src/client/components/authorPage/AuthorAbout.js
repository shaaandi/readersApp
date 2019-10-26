import React from "react";

function AuthorAbout({
  author: {
    id: authorId,
    username,
    profileImg,
    fName,
    lName,
    phoneNumber,
    email,
    address
  }
}) {
  return (
    <div id="authorAboutWrapper" className="container">
      <div id="authorAbout" className="row">
        <div id="authorAboutProfileImg" className="col s12 m12 l3 center-align">
          <img className="materialboxed" width={100} src={profileImg} />
        </div>
        <div id="authorAboutInfo" className="col s12 m12 l9">
          <div className="authorAboutInfo-info">
            <span className="authorAboutInfo-label">Username</span>
            <span className="authorAboutInfo-data">{username}</span>
          </div>
          <div className="authorAboutInfo-info">
            <span className="authorAboutInfo-label">First Name</span>
            <span className="authorAboutInfo-data">{fName}</span>
          </div>
          <div className="authorAboutInfo-info">
            <span className="authorAboutInfo-label">Last Name</span>
            <span className="authorAboutInfo-data">{lName}</span>
          </div>
          <div className="authorAboutInfo-info">
            <span className="authorAboutInfo-label">Phone Number </span>
            <span className="authorAboutInfo-data">{phoneNumber}</span>
          </div>
          <div className="authorAboutInfo-info">
            <span className="authorAboutInfo-label">Email</span>
            <span className="authorAboutInfo-data">{email}</span>
          </div>

          <div className="authorAboutInfo-info">
            <span className="authorAboutInfo-label">Address</span>
            <span className="authorAboutInfo-data">{`Street : ${address.street}, City : ${address.city}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorAbout;
