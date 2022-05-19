import React from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function App() {
  const onBeforeCapture = () => { // useCallback(, []);
    console.log('Before Capture');
  };
  const onBeforeDragStart = () => { // useCallback(, []);
    console.log('Before Drag start');
  };
  const onDragStart = () => { // useCallback(, []);
    console.log('Drag started');
  };
  const onDragUpdate = () => { // useCallback(, []);
    console.log('Drag update');
  };
  const onDragEnd = () => { // useCallback(, []);
    console.log('Drag End');
  };

  return (

    <DragDropContext
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >

      <Droppable droppableId="droppable-1">
        {(provided, snapshot) => (

          <div ref={provided.innerRef} className="container mx-auto px-4 py-1.5 space-y-2 my-8 bg-zinc-100 rounded-md shadow" {...provided.droppableProps}>

            <Draggable draggableId="draggable-1" index={0}>
              {(provided, snapshot) => (

                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="p-6 rounded-sm shadow-sm cursor-move mb-2 bg-zinc-50"
                >
                  Item 1

                </div>
              )}
            </Draggable>

            <Draggable draggableId="draggable-2" index={1}>
              {(provided, snapshot) => (

                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="p-6 rounded-sm shadow-sm cursor-move mb-2 bg-zinc-50"
                >
                  Item 2

                </div>
              )}
            </Draggable>

            <Draggable draggableId="draggable-3" index={2}>
              {(provided, snapshot) => (

                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="p-6 rounded-sm shadow-sm cursor-move mb-2 bg-zinc-50"
                >
                  Item 3

                </div>
              )}
            </Draggable>

            {provided.placeholder}
          </div>

        )}

      </Droppable>

    </DragDropContext>
  );
}

export default App;
