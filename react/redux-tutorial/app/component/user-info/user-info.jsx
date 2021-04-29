import React from "react";
import "./user-info.css";

export const UserContext = React.createContext();

const UserAvatar = ({ size }) => {
  return (
    <UserContext.Consumer>
      {(user) => (
        <img
          className={`user-avatar ${size || ""}`}
          alt="user avatar"
          src={user.avatar}
        />
      )}
    </UserContext.Consumer>
  );
};

const UserStats = () => {
  return (
    <UserContext.Consumer>
      {(user) => (
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
      )}
    </UserContext.Consumer>
  );
};

const SideBar = () => {
  return (
    <div className="sidebar">
      <UserStats />
    </div>
  );
};

const Content = () => {
  return <div className="content"> main content here</div>;
};

export const Body = () => {
  return (
    <div className="body">
      <SideBar />
      <Content />
    </div>
  );
};

export const Nav = () => {
  return (
    <div className="nav">
      <UserAvatar size="small" />
    </div>
  );
};
