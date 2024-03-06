import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableItemProps {
  id: string|number;
  children: ReactNode;
}

const SortableItem: React.FC<SortableItemProps> = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="sortable-item"
    >
      {children}
    </div>
  );
};


export default SortableItem;
