# React Beautiful DnD Basics

A very simple drag-and-drop list that helps you getting started with React beautiful DnD. 
The goal is to allow you to implement the library in your projects as fast as possible, there is only the "standard" App component, and no additional files.
It covers: How to make the drag and drop visual animation appear, how to trigger actions during the drag and after the drop, and how to persist changes.  

I'm using Typescript and Tailwind CSS.

1. create-react-app with template typescript

2. Install and configure tailwind css (requires react-create-app v5+)

3. Install and configure eslint and prettier (with Airbnb plugin)

4. Install react-beautiful-dnd (using --force due to dep problems with react 18)

5. Wrap with DragDropContext
https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/drag-drop-context.md

6. Wrap with Droppable, add children function
https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md

7. Add Draggables, with their children functions
https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md

8. Should now have the minimum requirements for the drag to appear
(Does not work with React Strict Mode Wrappers)

9. Setting up responders
https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/responders.md

