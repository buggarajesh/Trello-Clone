// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// import { Plus, X } from "lucide-react";
// import clsx from "clsx";

// const initialData = {
//   todo: [
//     { id: "1", content: "This is a card! 👋 Select it to see its card back." },
//     { id: "2", content: "Hold and drag to move this card to another list 👉" },
//     { id: "3", content: "Invite collaborators to your board!" },
//   ],
//   doing: [
//     {
//       id: "4",
//       content: "This card has an attachment.",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzoT4PPdQhOTiw1ANOfEHo0ubcvwbhy6xXt1gdVaJ54Aa7EfnOTimPzsGOhCVPjr0qRs&usqp=CAU",
//     },
//     {
//       id: "5",
//       content: "This card has a label and a checklist.",
//       label: true,
//       checklist: "0/1 • Sep 1, 2023",
//     },
//   ],
//   done: [{ id: "6", content: "Signed up for Trello" }],
// };

// const Inbox = () => {
//   const [columns, setColumns] = useState(initialData);
//   const [newCardTitle, setNewCardTitle] = useState("");
//   const [showInput, setShowInput] = useState(false);

//   const handleDragEnd = (result) => {
//     const { source, destination } = result;
//     if (!destination) return;

//     const sourceCol = [...columns[source.droppableId]];
//     const [movedItem] = sourceCol.splice(source.index, 1);

//     const destCol = [...columns[destination.droppableId]];
//     destCol.splice(destination.index, 0, movedItem);

//     setColumns({
//       ...columns,
//       [source.droppableId]: sourceCol,
//       [destination.droppableId]: destCol,
//     });
//   };

//   const addCard = () => {
//     if (!newCardTitle.trim()) return;
//     const newCard = {
//       id: Date.now().toString(),
//       content: newCardTitle,
//     };
//     setColumns((prev) => ({
//       ...prev,
//       todo: [...prev.todo, newCard],
//     }));
//     setNewCardTitle("");
//     setShowInput(false);
//   };

//   const columnNames = {
//     todo: "To-Do",
//     doing: "Doing",
//     done: "✅ Done",
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen overflow-x-auto bg-gray-900 text-white">
//       <div className="bg-[#12203b] w-full md:w-64 p-4 flex-shrink-0">
//         <h2 className="text-lg font-semibold flex items-center gap-2">
//           <span className="mr-2">📥</span> Inbox
//         </h2>
//         <div className="mt-4">
//           {showInput ? (
//             <div>
//               <textarea
//                 className="w-full p-2 rounded bg-[#1e2b44] text-white"
//                 placeholder="Enter a title"
//                 value={newCardTitle}
//                 onChange={(e) => setNewCardTitle(e.target.value)}
//               />
//               <div className="flex mt-2 gap-2">
//                 <button
//                   onClick={addCard}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
//                 >
//                   Add card
//                 </button>
//                 <button
//                   onClick={() => setShowInput(false)}
//                   className="text-gray-300"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <button
//               onClick={() => setShowInput(true)}
//               className="flex items-center bg-[#1e2b44] text-white px-4 py-2 rounded hover:bg-[#27395a]"
//             >
//               <Plus size={16} className="mr-2" /> Add card
//             </button>
//           )}
//         </div>
//       </div>

//       <div className="flex-1 overflow-auto p-4 bg-[#005587]">
//         <DragDropContext onDragEnd={handleDragEnd}>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-w-[600px]">
//             {Object.keys(columns).map((columnId) => (
//               <Droppable droppableId={columnId} key={columnId}>
//                 {(provided) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.droppableProps}
//                     className="bg-black/80 p-3 rounded-lg space-y-3"
//                   >
//                     <h3 className="text-white font-semibold mb-2">
//                       {columnNames[columnId]}
//                     </h3>
//                     {columns[columnId].map((item, index) => (
//                       <Draggable
//                         draggableId={item.id}
//                         index={index}
//                         key={item.id}
//                       >
//                         {(provided) => (
//                           <div
//                             className="bg-[#2e2e2e] p-3 rounded shadow text-white"
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                           >
//                             {item.img && (
//                               <img
//                                 src={item.img}
//                                 alt="attachment"
//                                 className="rounded mb-2"
//                               />
//                             )}
//                             <p>{item.content}</p>
//                             {item.label && (
//                               <div className="flex justify-between mt-2 text-sm">
//                                 <span className="bg-green-600 h-2 w-6 rounded"></span>
//                                 <span className="text-red-400">
//                                   {item.checklist}
//                                 </span>
//                               </div>
//                             )}
//                           </div>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </div>
//                 )}
//               </Droppable>
//             ))}
//           </div>
//         </DragDropContext>
//       </div>
//     </div>
//   );
// };

// export default Inbox;


import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import { Plus, X } from "lucide-react";
import clsx from "clsx";
import Navbar from "./Navbar2";

const initialData = {
  todo: [
    { id: "1", content: "This is a card! 👋 Select it to see its card back." },
    { id: "2", content: "Hold and drag to move this card to another list 👉" },
    { id: "3", content: "Invite collaborators to your board!" },
  ],
  doing: [
    {
      id: "4",
      content: "This card has an attachment.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzoT4PPdQhOTiw1ANOfEHo0ubcvwbhy6xXt1gdVaJ54Aa7EfnOTimPzsGOhCVPjr0qRs&usqp=CAU",
    },
    {
      id: "5",
      content: "This card has a label and a checklist.",
      label: true,
      checklist: "0/1 • Sep 1, 2023",
    },
  ],
  done: [{ id: "6", content: "Signed up for Trello" }],
};

const Inbox = () => {
  const [columns, setColumns] = useState(initialData);
  const [newCardTitle, setNewCardTitle] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = [...columns[source.droppableId]];
    const [movedItem] = sourceCol.splice(source.index, 1);

    const destCol = [...columns[destination.droppableId]];
    destCol.splice(destination.index, 0, movedItem);

    setColumns({
      ...columns,
      [source.droppableId]: sourceCol,
      [destination.droppableId]: destCol,
    });
  };

  const addCard = () => {
    if (!newCardTitle.trim()) return;
    const newCard = {
      id: Date.now().toString(),
      content: newCardTitle,
    };
    setColumns((prev) => ({
      ...prev,
      todo: [...prev.todo, newCard],
    }));
    setNewCardTitle("");
    setShowInput(false);
  };

  const columnNames = {
    todo: "To-Do",
    doing: "Doing",
    done: "✅ Done",
  };

  return (
    <>
      <Navbar />
      <div className="">
      <div className="flex flex-col md:flex-row h-screen overflow-x-auto bg-gray-900 text-white">
      <div className="bg-[#12203b] w-full md:w-64 p-4 flex-shrink-0">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <span className="mr-2">📥</span> Inbox
        </h2>
        <div className="mt-4">
          {showInput ? (
            <div>
              <textarea
                className="w-full p-2 rounded bg-[#1e2b44] text-white"
                placeholder="Enter a title"
                value={newCardTitle}
                onChange={(e) => setNewCardTitle(e.target.value)}
              />
              <div className="flex mt-2 gap-2">
                <button
                  onClick={addCard}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                >
                  Add card
                </button>
                <button
                  onClick={() => setShowInput(false)}
                  className="text-gray-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowInput(true)}
              className="flex items-center bg-[#1e2b44] text-white px-4 py-2 rounded hover:bg-[#27395a]"
            >
              <Plus size={16} className="mr-2" /> Add card
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 bg-[#005587]">
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-w-[600px]">
            {Object.keys(columns).map((columnId) => (
              <Droppable droppableId={columnId} key={columnId}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="bg-black/80 p-3 rounded-lg space-y-3"
                  >
                    <h3 className="text-white font-semibold mb-2">
                      {columnNames[columnId]}
                    </h3>
                    {columns[columnId].map((item, index) => (
                      <Draggable
                        draggableId={item.id}
                        index={index}
                        key={item.id}
                      >
                        {(provided) => (
                          <div
                            className="bg-[#2e2e2e] p-3 rounded shadow text-white"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {item.img && (
                              <img
                                src={item.img}
                                alt="attachment"
                                className="rounded mb-2"
                              />
                            )}
                            <p>{item.content}</p>
                            {item.label && (
                              <div className="flex justify-between mt-2 text-sm">
                                <span className="bg-green-600 h-2 w-6 rounded"></span>
                                <span className="text-red-400">
                                  {item.checklist}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
      </div>
    </>
  );
};

export default Inbox;
