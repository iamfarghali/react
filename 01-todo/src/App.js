import { useState } from "react";

const tempTasks = [
  {
    id: 1,
    title: "Master JavaScript Fundamentals",
    description:
      "Deepen your understanding of JavaScript by mastering concepts such as closures, prototypal inheritance, asynchronous programming, and ES6+ features.",
  },
  {
    id: 2,
    title: "Learn React Basics",
    description:
      "Get familiar with React basics including components, state, props, lifecycle methods, and hooks.",
  },
  {
    id: 3,
    title: "Build a Simple React Application",
    description:
      "Create a simple React application to practice what you've learned. Focus on component structure, state management, and basic styling.",
  },
  {
    id: 4,
    title: "Understand Advanced React Concepts",
    description:
      "Dive into advanced React topics such as context API, higher-order components, render props, and performance optimization.",
  },
  {
    id: 5,
    title: "Get Comfortable with React Router",
    description:
      "Learn how to implement navigation in your React applications using React Router. Understand concepts like dynamic routing, nested routes, and route guards.",
  },
  {
    id: 6,
    title: "State Management with Redux",
    description:
      "Learn Redux for managing application state in larger applications. Understand actions, reducers, middleware, and the store.",
  },
  {
    id: 7,
    title: "Build a Complex React Application",
    description:
      "Create a more complex React application that involves multiple pages, state management with Redux, API integrations, and advanced styling.",
  },
  {
    id: 8,
    title: "Learn TypeScript",
    description:
      "Enhance your JavaScript skills by learning TypeScript. Focus on type annotations, interfaces, generics, and how to use TypeScript with React.",
  },
  {
    id: 9,
    title: "Test Your React Applications",
    description:
      "Learn to write tests for your React components using testing libraries like Jest and React Testing Library. Focus on unit tests, integration tests, and end-to-end tests.",
  },
  {
    id: 10,
    title: "Understand Webpack and Babel",
    description:
      "Get familiar with Webpack and Babel to optimize your build process. Learn how to configure them for a React project.",
  },
  {
    id: 11,
    title: "Get Proficient with Git",
    description:
      "Learn advanced Git concepts and workflows including branching, merging, rebasing, and pull requests.",
  },
  {
    id: 12,
    title: "Contribute to Open Source",
    description:
      "Start contributing to open-source projects. This will give you practical experience and improve your coding skills.",
  },
  {
    id: 13,
    title: "Build a Portfolio",
    description:
      "Create a portfolio showcasing your projects. Ensure that it highlights your skills and the technologies you are proficient in.",
  },
  {
    id: 14,
    title: "Prepare for Technical Interviews",
    description:
      "Practice common front-end interview questions and algorithms. Focus on coding challenges and system design problems.",
  },
  {
    id: 15,
    title: "Network with Industry Professionals",
    description:
      "Join online communities, attend meetups, and connect with professionals in the field to expand your network and learn from others.",
  },
];

export default function App() {
  const [tasks, setTasks] = useState(tempTasks);

  function handleAddTask(e) {
    e.preventDefault();

    // Validtion
    if (e.target.title.value === "" || e.target.description.value === "")
      return;

    const task = {
      id: Date.now(),
      title: e.target.title.value,
      description: e.target.description.value,
      isCompleted: false,
    };

    // Add a new task
    setTasks((tasks) => [task, ...tasks]);

    // Clear the form
    e.target.title.value = null;
    e.target.description.value = null;
  }

  function handleDeleteTask(id) {
    const areYouSure = window.confirm("Are you want to delete this task?");
    if (!areYouSure) return;
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleToggleCompletTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  return (
    <div className="container">
      <AddTask onAdding={handleAddTask} />
      {tasks.length ? (
        <TasksList
          tasks={tasks}
          onDelete={handleDeleteTask}
          onToggleComplete={handleToggleCompletTask}
        />
      ) : (
        <NoTasksYet />
      )}
    </div>
  );
}

// Components
function AddTask({ onAdding }) {
  return (
    <form onSubmit={onAdding} className="form">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" defaultValue="" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          defaultValue=""
          rows={8}
        ></textarea>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn--add">
          Add
        </button>
      </div>
    </form>
  );
}

function TasksList({ tasks, onDelete, onToggleComplete }) {
  return (
    <ul className="tasks-list">
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
}

function Task({ task, onDelete, onToggleComplete }) {
  return (
    <li className="task">
      <div className="task-content">
        <div className="task-title-box">
          <input
            type="checkbox"
            name="completed"
            value={task.isCompleted ? true : false}
            onChange={() => onToggleComplete(task.id)}
          />
          <h2 className={task.isCompleted ? "completed" : ""}>{task.title}</h2>
        </div>
        <p>{task.description}</p>
      </div>
      <button className="btn btn--delete" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
}

function NoTasksYet() {
  return (
    <div className="no-tasks">
      <p>Let's start and add your first task!</p>
    </div>
  );
}
