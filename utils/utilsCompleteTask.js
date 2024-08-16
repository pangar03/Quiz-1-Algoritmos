export const completeTask = (tasks, id) => {
    tasks.forEach(task => {
        if(task.id === id){
            task.completada = true;
        }
    });

    return tasks;
};