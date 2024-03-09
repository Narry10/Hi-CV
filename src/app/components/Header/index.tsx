import React from "react";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import Link from "next/link";
import CurrentTime from "./components/CurrentTime";
const Header = () => {
  return (
    <div className="flex items-center justify-between p-2">
      <h1 className="text-primary pb-2  text-2xl font-bold">Hi-CV</h1>
      <div className="flex items-center gap-4">
        <CurrentTime />
        <Link href={"/sign"}>
          <AppsRoundedIcon
            sx={{
              color: "rgb(75 85 99 / var(--tw-text-opacity))",
            }}
          />
        </Link>

        <Link href={"/sign"}>
          <Person2RoundedIcon
            sx={{
              color: "rgb(75 85 99 / var(--tw-text-opacity))",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
