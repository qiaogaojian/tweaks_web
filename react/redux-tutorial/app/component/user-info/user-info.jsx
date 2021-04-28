import React from "react";
import "./user-info.css"

const UserAvatar = ({ user, size }) => {
  return (
    <img
      className={`user-avatar ${size || ""}`}
      alt="user avatar"
      src={user.avatar}
    />
  );
};

const UserStats = ({ user }) => {
  return (
    <div className="user-stats">
      <div>
        <UserAvatar user={user} />
        {user.name}
      </div>
      <div className="stats">
        <div>{user.followers} Followers</div>
        <div>Following {user.following}</div>
      </div>
    </div>
  );
};

const SideBar = ({ user }) => {
  return (
    <div className="sidebar">
      <UserStats user={user} />
    </div>
  );
};

const Content = ({ user }) => {
  return <div className="content"> main content here</div>;
};

export const Body = ({ user }) => {
  return (
    <div className="body">
      <SideBar user={user} />
      <Content user={user} />
    </div>
  );
};

export const Nav = ({ user }) => {
  return (
    <div className="nav">
      <UserAvatar user={user} size="small" />
    </div>
  );
};
