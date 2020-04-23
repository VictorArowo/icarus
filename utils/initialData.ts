export interface Data {
  tasks: Tasks;
  columns: Columns;
  ColumnOrder: string[];
}
export interface Tasks {
  "task-1": Variants;
  "task-2": Variants;
  "task-3": Variants;
  "task-4": Variants;
}
export interface Variants {
  id: string;
  content: string;
}
export interface Columns {
  "column-1": Column;
  "column-2": Column;
}
export interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

const initialData: Data = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favourite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "Done",
      taskIds: [],
    },
  },
  ColumnOrder: ["column-1", "column-2"],
};

export default initialData;
