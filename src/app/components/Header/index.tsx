import React from "react";
import CurrentTime from "./components/CurrentTime";
import UserAvatar from "./components/UserAvatar";
import MenuDialog from "./components/MenuDialog";
const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-primary pb-2  text-2xl font-bold">Hi-CV</h1>
      <div className="flex items-center gap-4">
        <CurrentTime />
        <MenuDialog />
        <UserAvatar />
      </div>
    </div>
  );
};

export default React.memo(Header);
