# Todo List App with React, Redux Toolkit, Tailwind CSS, and Local Storage

A simple Todo list application built using React, Redux Toolkit, Tailwind CSS, and local storage for state persistence.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Redux Setup](#redux-setup)
3. [Local Storage Integration](#local-storage-integration)
4. [Create Todo Components](#create-todo-components)
5. [Connect Redux to React](#connect-redux-to-react)
6. [Implement Todo Functionality](#implement-todo-functionality)
7. [Styling with Tailwind CSS](#styling-with-tailwind-css)
8. [Testing](#testing)
9. [Deployment](#deployment)
10. [Clone Repository](#clone-repository)
11. [Folder Structure](#folder-structure)

## 1. Project Setup

- Create a new React application using Create React App.
- Install necessary dependencies, including Redux Toolkit, React-Redux, and Tailwind CSS.

## 2. Redux Setup

- Set up a Redux store using Redux Toolkit.
- Create a Redux slice to manage the state of the todos.
- Implement actions in the slice for adding, toggling, and removing todos.

## 3. Local Storage Integration

- Load the initial state from local storage when the application starts.
- Update local storage whenever the state changes (add, toggle, or remove a todo).

## 4. Create Todo Components

- Create a component for displaying a single todo (`Todo`).
- Implement a form component (`TodoForm`) for adding new todos.
- Develop a list component (`TodoList`) for displaying the collection of todos.

## 5. Connect Redux to React

- Integrate the Redux store with the React application using the `Provider` component from React-Redux.
- Use the `useDispatch` and `useSelector` hooks to dispatch actions and access the Redux state in components.

## 6. Implement Todo Functionality

- Allow users to add new todos through the `TodoForm` component.
- Display the list of todos using the `TodoList` component.
- Enable toggling of todo completion status and removal of todos through the `Todo` component.

## 7. Styling with Tailwind CSS

- Apply styles to the components using Tailwind CSS classes.

## 8. Testing

- Test the application to ensure that all functionalities work as expected.

## 9. Deployment

- If you wish to share your Todo app with others, consider deploying it.

## 10. Clone Repository

To clone the repository, run the following command in your terminal:

```bash
git clone https://github.com/Siddhant51/todo-app
cd todo-app
npm install
```

## 11. Folder Structure

```bash
todo-app/
├── src/
│ ├── components/
│ │ ├── Todo.js
│ │ ├── TodoForm.js
│ │ └── TodoList.js
│ ├── redux/
│ │ └── store.js
│ │ └── todoSlice.js
│ ├── index.css
│ ├── index.js
│ └── App.js
├── public/
│ └── index.html
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```
