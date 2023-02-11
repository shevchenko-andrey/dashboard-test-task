import { FC } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  ResponderProvided,
} from 'react-beautiful-dnd';

interface DashboardGridProps {
  draggable: boolean;
  children: JSX.Element[];
}

const DashboardGrid: FC<DashboardGridProps> = ({ children, draggable }) => {
  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {};

  if (!draggable) {
    return <ul>{children}</ul>;
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="dashboardWidgets">
        {({ innerRef, droppableProps }, snapshot) => (
          <ul ref={innerRef} {...droppableProps}>
            {children.map((child, index) => (
              <Draggable
                key={index}
                draggableId={index.toFixed(1)}
                index={index}
              >
                {({ draggableProps, dragHandleProps }, snapshot) => (
                  <li {...draggableProps} {...dragHandleProps}>
                    {child}
                  </li>
                )}
              </Draggable>
            ))}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DashboardGrid;
