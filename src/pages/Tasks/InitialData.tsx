// const taskCount = 20;

// const getTaskIds = (taskCount:number) => {
//   const taskIds = [];
//   for (let i = 0; i < taskCount; i++) {
//     taskIds.push({ id: `task${i}`, index: i });
//   }
//   return taskIds;
// };

// const getTasks = (taskCount:number) => {
//   let taskIds:any = {};
//   for (let i = 0; i < taskCount; i++) {
//     taskIds[`task${i}`] = { id: `task${i}`, content: `Task ${i}` };
//   }
//   return taskIds;
// };

// const taskIds = getTaskIds(taskCount);
// const tasks = getTasks(taskCount);


const initialData = {
    tasks: {
      'task-1': { id: 'task-1', name:'Tamara B', content: 'Amending noxious weed seed rule' },
      'task-2': { id: 'task-2', name:'Afif B', content: 'JS hint implementation' },
      'task-3': { id: 'task-3', name:'Lauude P', content: 'Request custom feedback' },
      'task-4': { id: 'task-4', name:'Gita K', content: 'Amending noxious rule' },
      'task-5': { id: 'task-5', name:'Darrell S', content: 'Amending noxious weed seed rule' },
      'task-6': { id: 'task-6', name:'Arlena M', content: 'JS hint implementation' },
      'task-7': { id: 'task-7', name:'Wode W', content: 'Request custom feedback' },
      'task-8': { id: 'task-8', name:'Albert F', content: 'Amending noxious rule' },
      'task-9': { id: 'task-9', name:'Tamara B', content: 'Amending noxious weed seed rule' },
      'task-10': { id: 'task-10', name:'Afif B', content: 'JS hint implementation' },
      'task-11': { id: 'task-11', name:'Lauude P', content: 'Request custom feedback' },
      'task-12': { id: 'task-12', name:'Gita K', content: 'Amending noxious rule' },
      'task-13': { id: 'task-13', name:'Darrell S', content: 'Amending noxious weed seed rule' },
      'task-14': { id: 'task-14', name:'Arlena M', content: 'JS hint implementation' },
      'task-15': { id: 'task-15', name:'Wode W', content: 'Request custom feedback' },
      'task-16': { id: 'task-16', name:'Albert F', content: 'Amending noxious rule' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Planned',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6'],
      },
      'column-2': {
        id: 'column-2',
        title: 'In progress',
        taskIds: [ 'task-7', 'task-8', 'task-9', 'task-10', 'task-11'],
      },
      'column-3': {
        id: 'column-3',
        title: 'On Hold',
        taskIds: [ 'task-12', 'task-13', 'task-14'],
      },
      'column-4': {
        id: 'column-4',
        title: 'Done',
        taskIds: [ 'task-15', 'task-16'],
      },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
  };
  
  export default initialData;
  