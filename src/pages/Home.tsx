import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);

    function handleAddTask(newTaskTitle: string) {
        const task = {
            id: new Date().getTime(),
            title: newTaskTitle,
            done: false,
        };
        setTasks((oldTasks) => [...oldTasks, task]);
    }

    function handleToggleTaskDone(id: number) {
        const unchangedTasks = tasks.filter((task) => task.id !== id);
        const [task] = tasks.filter((task) => task.id === id);

        const changeTaskDoneStatus = {
            id: task.id,
            title: task.title,
            done: !task.done,
        };

        setTasks([...unchangedTasks, changeTaskDoneStatus]);
    }

    function handleRemoveTask(id: number) {
        setTasks((oldState) => oldState.filter((task) => task.id !== id));
    }

    return (
        <View style={styles.container}>
            <Header tasksCounter={tasks.length} />

            <TodoInput addTask={handleAddTask} />

            <TasksList tasks={tasks} toggleTaskDone={handleToggleTaskDone} removeTask={handleRemoveTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F9',
    },
});
