"use client";
import React, { ReactNode } from "react";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import Link from "next/link";
import { ResumeForm } from "components/ResumeForm";
import { Resume } from "components/Resume";
import RouterPath from "routes/routesContants";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useAppSelector, useSaveStateToLocalStorageOnChange, useSetInitialStore } from "lib/redux/hooks";
import { selectSettings } from "lib/redux/settingsSlice";
interface SideBarItemChild {
  icon: ReactNode;
  name: string;
  path: string;
}

interface SideBarItem {
  name: string;
  children: SideBarItemChild[];
}
const SideBarItems: SideBarItem[] = [
  {
    name: "CV",
    children:[
      {
        icon: <MenuBookIcon />,
        name: "Resume",
        path: RouterPath.MY_CV
      },
      {
        icon: <ChromeReaderModeIcon />,
        name: "Job Description",  
        path: '/'
      },
    ]
  },
  {
    name: "Settings",
    children:[
      {
        icon: <ColorLensIcon />,
        name: "Theme",
        path: RouterPath.MY_CV_THEME
      }
    ]
  }
  ,
  {
    name: "Export",
    children:[
      {
        icon: <PictureAsPdfIcon />,
        name: "PDF",
        path: "/your-item-path"
      }
    ]
  }
];

const MiniDrawerLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const setting = useAppSelector(selectSettings)
  useSetInitialStore();
  useSaveStateToLocalStorageOnChange();
  console.log(path);
  
  return (
    <div className="flex w-full">
      <div className="">
        <div className=" flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
          <div className="min-h-screen flex flex-col w-64 bg-white h-full border-r">
            <div className="flex items-center justify-center h-14 border-b">
              <div>Creater your CV</div>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
              <ul className="flex flex-col py-4 space-y-1">
                {SideBarItems.map((item, index) => (
                  <div className="" key={index}>
                    <li className="px-5">
                      <div className="flex flex-row items-center h-8">
                        <div className="text-sm font-light tracking-wide text-gray-500">{item.name}</div>
                      </div>
                    </li>
                    {item.children.map((child) => (
                      <Link href={child.path}  key={`${child.name}__item__index`}>
                        <div className={`transition-all relative cursor-pointer flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6
                          ${path === child.path ? "!border-indigo-500  text-gray-800 bg-gray-50" : ""}
                        `}>
                          <span className="inline-flex justify-center items-center ml-4">
                            {child.icon}
                          </span>
                          <span className="ml-2 text-sm tracking-wide truncate">{child.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
      <div className="relative h-full w-full overflow-hidden bg-gray-50">
        <div className="grid grid-cols-3 md:grid-cols-6 h-full">
          <div className="col-span-3 border-r">
            {children} 
          </div>
          <div className="col-span-3">
            <Resume />
          </div>
        </div>
      </div>
        
      </div>
    </div>
  );
  }
export default MiniDrawerLayout;
