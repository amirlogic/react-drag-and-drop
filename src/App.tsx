/* eslint-disable */

import React, { useState } from 'react';

import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';


function App() {

  const [ listData, setListData ] = useState(["Item 1","Item 2","Item 3"]);

  const [ liveLog, setLiveLog ] = useState("");

  /* const addToLog = (nwtxt:string)=>{

    setLiveLog( liveLog[liveLog.length] )
  } */

  const onBeforeCapture = () => { // useCallback(, []);
    setLiveLog( "Before Capture" );
    console.log('Before Capture');
  };
  const onBeforeDragStart = () => { // useCallback(, []);
    setLiveLog( "Before Capture" );
    console.log('Before Capture');
  };
  const onDragStart = () => { // useCallback(, []);
    setLiveLog( "Drag started" )
    console.log('Drag started');
  };
  const onDragUpdate = () => { // useCallback(, []);
    setLiveLog( "Drag update" );
    console.log('Drag update');
  };
  const onDragEnd = (result:DropResult) => { // useCallback(, []);
    setLiveLog( JSON.stringify(result) );
    console.log('result');
  };

  return (

   <>
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

            { listData.map( (row,indx) =>{
              
              return <Draggable draggableId={`draggable-${indx}`} index={indx}>
                        {(gprovided, gsnapshot) => (

                          <div
                            ref={gprovided.innerRef}
                            {...gprovided.draggableProps}
                            {...gprovided.dragHandleProps}
                            className="p-6 rounded-sm shadow-sm cursor-move mb-2 bg-zinc-50"
                          >
                            {row}

                          </div>
                        )}
                      </Draggable>;

            })}

            {provided.placeholder}

          </div>

        )}

      </Droppable>

    </DragDropContext>

    <div className="container mx-auto px-4 py-1.5">{liveLog}</div>
   </>
  );
}

export default App;
