# Task Manager - Lab 3

## Overview

Creating a Task Management application that demonstrates dynamic list rendering, proper key usage, and conditional rendering. You will practice creating TypeScript React components that handle lists of data, implement filtering, and show different states based on task properties. This lab focuses on list rendering, key management, conditional rendering, and component composition using React and TypeScript.

## Features

1. Display list of tasks
2. Filter tasks by status and priority
3. Add new tasks
4. Change task status
5. Delete tasks

## Resources Used
- https://react.dev/ Main React Documentation
- https://www.typescriptlang.org/docs/ Typescript guide
- https://getbootstrap.com/docs/5.3/ Bootstrap CSS framework
- https://vitejs.dev/guide/ Vite build tool

## Reflection Questions

1. How did you ensure unique keys for your list items?
- I used task.id as the key for each task. Every task has a unique ID, so React can track each task properly when the list changes.
2. What considerations did you make when implementing the filtering functionality?
- I made sure both filters status and priority work together. When you change one filter, the other one stays active. I used state in TaskFilter to remember both filter values and pass them both to the parent component.
3. How did you handle state updates for task status changes?
- I used the map() method to create a new array with the updated task. This keeps React's immutable state pattern - I never change the original array, I create a new one.
4. What challenges did you face when implementing conditional rendering?
- The main challenge was deciding where to put the logic. I used:
     - Ternary operator (? :) for showing "No tasks" message vs task list
     - Logical AND (&&) for showing the add task form only when needed
     - Making sure the empty state was clear and helpful to users