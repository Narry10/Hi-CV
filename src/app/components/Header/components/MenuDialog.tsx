import React, { useState, useEffect, useRef } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import AddIcon from "@mui/icons-material/Add";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LinkIcon from "@mui/icons-material/Link";

const menuItems = [
  { href: "/", icon: <HomeIcon /> },
  { href: "/resume-builder", icon: <StickyNote2Icon /> },
  { href: "/resume-import", icon: <AddIcon /> },
  { href: "/", icon: <AccountCircleIcon /> },
  { href: "/", icon: <FormatListBulletedIcon /> },
  { href: "/", icon: <LinkIcon /> },
  // Add more items as needed
];

const MenuDialog = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (anchorEl && !anchorEl.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [anchorEl]);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div aria-describedby={id}>
      <IconButton onClick={handleClick}>
        <BlurOnIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="grid grid-cols-3 gap-8 p-4">
          {menuItems.map(({ href, icon }, index) => (
            <Link
              key={index}
              href={href}
              className="flex h-[40px]  w-[40px] items-center justify-center p-2 text-3xl transition-all  "
            >
              {icon}
            </Link>
          ))}
        </div>
      </Popover>
    </div>
  );
};

export default MenuDialog;
