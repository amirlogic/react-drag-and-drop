/* eslint-disable */

import React, { useState } from 'react';

import { DragDropContext, Droppable, Draggable, DropResult, DragDropContextProps, DraggableDescriptor, DragStart, DragUpdate } from 'react-beautiful-dnd';


function App() {

  const [ listData, setListData ] = useState(["Item 1","Item 2","Item 3"]);

  const [ liveLog, setLiveLog ] = useState("");

  const [ dndStatus, setDndStatus ] = useState("");

  const onBeforeCapture = () => { 
    setDndStatus( "Before Capture" );
    setLiveLog("");
  };
  const onBeforeDragStart = () => { 
    setDndStatus( "Before Capture" );
    setLiveLog("");
  };
  const onDragStart = (startobj:DragStart) => { 
    setDndStatus( "Drag started, start object:" );
    setLiveLog(JSON.stringify(startobj,null,"\t"));
  };
  const onDragUpdate = (updateobj:DragUpdate) => {
    setDndStatus( "Drag update, update object:" );
    setLiveLog(JSON.stringify(updateobj,null,"\t"));
    
  };
  const onDragEnd = (result:DropResult) => {

    let { source, destination, draggableId } = result;

    setDndStatus( "Drag End, result object:" );

    if(!destination){
      setDndStatus("destination is not valid");
      setLiveLog("");
      return;
    }

    if(destination.droppableId===source.droppableId 
      && destination.index === source.index){
        setDndStatus("no change");
        setLiveLog("");
      return;
    }

    let [draggableText] = listData.splice(source.index,1);
    listData.splice(destination.index,0,draggableText);

    setLiveLog( JSON.stringify(result,null,"\t") );
    //console.log(result);
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
                            {gsnapshot.isDragging ? " dragging..." : ""}

                          </div>
                        )}
                      </Draggable>;

            })}

            {provided.placeholder}

          </div>

        )}

      </Droppable>

    </DragDropContext>

    <div className="container mx-auto px-4 py-1.5">{dndStatus}</div>
    <div className="container mx-auto px-4 py-1.5 font-mono text-slate-500"><pre>{liveLog}</pre></div>
   </>
  );
}

export default App;
