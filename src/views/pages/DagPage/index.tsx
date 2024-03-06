import React, { Children, useEffect, useRef, useState } from "react";
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
import { SimpleTreeItemWrapper, SortableTree, TreeItemComponentProps, TreeItems } from "dnd-kit-sortable-tree";


interface IBlock {
  id: number;
  title: string;
}

interface BlockProps {
  block: IBlock;
  setContent?: (content: string) => void;
}

const Block: React.FC<BlockProps> = ({ block, setContent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const divRef = useRef<HTMLPreElement>(null);

  const handleToggleEdit = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    console.log(divRef.current?.innerText);

    const text = divRef.current?.innerText || "";
    setContent && setContent(text);
  };

  useEffect(() => {
    // Focus on the editable div when editing starts
    if (isEditing && divRef.current) {
      divRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div
      style={{
        border: "2px solid black",
        marginBottom: 5,
        marginTop: 5,
        display: "block",
        opacity: isEditing ? 0.5 : 1,
      }}
    >
      <pre
        className="block"
        onClick={handleToggleEdit}
        contentEditable={isEditing}
        onBlur={handleBlur}
        suppressContentEditableWarning
        ref={divRef}
        style={{
          whiteSpace: "pre-wrap", // Tự xuống dòng
          wordWrap: "break-word", // Tự ngắt dòng
        }}
        dangerouslySetInnerHTML={{ __html: block.title }}
      />
    </div>
  );
};

interface DagBlockProps {
  id: number;
  children?: React.ReactNode;
}

export const DagBlock: React.FC<DagBlockProps> = ({ id, children }) => {
  const [isEdit, setEdit] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
      disabled: isEdit,
      resizeObserverConfig: { disabled: false },
    });

  const style = {
    transition,
    transform: CSS?.Translate?.toString(transform),
  };

  return (
    <div className="relative z-1" style={style}>
      <div
        className="absolute right-0  translate-x-[100%] z-30"
        onClick={() => {
          setEdit(!isEdit);
        }}
      >
        {isEdit ? <Save /> : <Edit />}
      </div>
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        // className="relative z-1" // Use your desired class name
      >
        {children}
        {/* <Block key={1} block={{ id: 1, title: "hiii" }} /> */}
      </div>
    </div>
  );
};

const DagPage: React.FC = () => {
  const [tasks, setTasks] = useState<IBlock[]>([
    { id: 1, title: "Learn how to center a div \nfwefwef\nrgergeg\nêffff" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);

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
  console.log(tasks);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleUpdateContent = (value: IBlock) => {
    const index = tasks.findIndex((item) => value.id === item.id);
    if (index < 0) return;

    const updatedTasks = [...tasks];
    updatedTasks[index].title = value.title;
    setTasks(updatedTasks);
  };

  const getTaskPos = (id: number) => tasks.findIndex((task) => task.id === id);
  // const getPos = (id:number) => cv.findIndex(item=>)

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    console.log(event);
    
    if (active.id === over.id) return;
    console.log(active);
    console.log( over);
    

    console.log("POS", getTaskPos(active.id));
    console.log("New POS", getTaskPos(getTaskPos(over.id)));

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  const handleDragEndCV = (result: any) => {
    const { destination, source } = result;
  
    // Di chuyển mục trong cùng phần
    if (destination.droppableId === source.droppableId) {
      const cvCopy = [...cv];
      const section = cvCopy[destination.droppableId];
      const [removed] = section.html.splice(source.index, 1);
      section.html.splice(destination.index, 0, removed);
      setCV(cvCopy);
    }
  
    // Di chuyển mục sang phần khác
    if (destination.droppableId !== source.droppableId) {
      const cvCopy = [...cv];
      const sourceSection = cvCopy[source.droppableId];
      const [removed] = sourceSection.html.splice(source.index, 1);
      const destinationSection = cvCopy[destination.droppableId];
      destinationSection.html.push(removed);
      setCV(cvCopy);
    }
  };

  return (
    <div>
      <div>DagPage</div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={tasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task, index) => (
            <DagBlock id={task.id} key={index}>
              <Block
                key={task.id}
                block={task}
                setContent={(e: string) => {
                  console.log("hi e", e.toString());

                  const text: string = e;
                  handleUpdateContent({
                    id: task.id,
                    title: text,
                  });
                }}
              />
            </DagBlock>
          ))}
        </SortableContext>
      </DndContext>
      <div className="">---------------------</div>
      <>

      </>
    </div>
  );
};

export default  DagPage;