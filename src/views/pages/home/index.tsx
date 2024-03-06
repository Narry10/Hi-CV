import React, { useEffect, useState } from "react";

import DagPage from "../DagPage";
import {
  useSensors,
  useSensor,
  DndContext,
  closestCorners,
} from "@dnd-kit/core";
import { PointerSensor, KeyboardSensor } from "@dnd-kit/core";
import {
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";
import { Edit, Save } from "@mui/icons-material";
import { MinimalViable } from "../DagPage/text";
import { useAppDispatch } from "contexts/hooks";
import { authLoginWithEmail, authSinUpWithEmail } from "contexts/auth";

interface Position {
  x: number;
  y: number;
}

interface IItem {
  id: number;
  x: number;
  y: number;
  text: string;
  width: number;
  height: number;
  content?: string;
}

interface SkillContent {
  id: number;
  content: string;
}

interface DivItem {
  id: number;
  type: string;
  content: SkillContent[] | string;
}

const Home: React.FC = () => {
  const [divs, setDivs] = useState<DivItem[]>([
    {
      id: 2,
      type: "profile",
      content: [
        { id: 1, content: "Skill 1" },
        {
          id: 2,
          content:
            "Skill 2dădawdawd ưadawdawd<div>adwawda</div><div>minh nha ne</div>",
        },
      ],
    },
  ]);
  const dispatch = useAppDispatch();

  const [cv, setCV] = useState([
    {
      id: 2,
      key: "skill",
      html: [
        {
          id: 1,
          title: "hi cv",
        },
        {
          id: 1,
          title: "hi cv",
        },
      ],
    },
  ]);
  useEffect(() => {
    console.log("here");

    dispatch(
      authLoginWithEmail({
        email: "dominhnhat.dlc@gmail.com",
        password: "dominhnhat.dlc@gmail.com",
      })
    );
  }, []);

  return (
    <div className="flex justify-between h-[100vh] w-full bg-gray-100">
      <div className="w-[50%]">
        {/* <DagPage /> */}
        {/* <Test/> */}
      </div>
      <div className="w-[50%] bg-white">
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          <MinimalViable />
        </div>
      </div>
    </div>
  );
};

export default Home;
