# React Todo App (Frontend Trial Task)

A simple and clean Todo application built using **React**, **React Router**, and **SCSS Modules**.  
This project demonstrates CRUD operations, client-side routing, and UI state handling without a backend, with local storage acting as an mock storage.

---

## Features

- Create, edit, and delete todos
- Upload images (stored as Base64 in localStorage)
- Todo statuses: **Pending**, **Ongoing**, **Completed**
- Deadline support with visual warnings for near/overdue tasks
- Status badges with icons
- Placeholder image for todos without images
- Confirmation before delete
- Loading and basic error handling
- Responsive and clean UI

---

## Tech Stack

- React (Vite)
- React Router DOM
- SCSS Modules for styling
- Lucide Icons 
- localStorage (mock storage)

---

##  Setup Instructions

### 1. Clone the repository
```bash
git clone git@github.com:hasana0123/To-do-app.git
cd react-todo-app
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run the development server
```bash
npm run dev
```
### 4. Open in browser
```bash
http://localhost:5173
```


##  Brief Explanation of Approach

This project is built using React functional components, and React hooks are used to manage state, side effects, and routing logic.

### React Hooks Used

- **useState**
  - Used to manage local component state such as form inputs, loading states, error messages, and todo lists.
  - For example, in the Todo form it stores values like title, description, status, image, and deadline.
  - In the Todo list page, it is used to store the list of todos and loading state.

- **useEffect**
  - Used to perform side effects such as fetching todos from localStorage or loading an existing todo when editing.
  - It runs when the component mounts or when the route parameter (todo id) changes.
  - This ensures data is loaded at the right time without unnecessary re-renders.

- **useNavigate**
  - Provided by React Router and used for programmatic navigation.
  - After creating or editing a todo, the user is redirected back to the Todo list page.

- **useParams**
  - Used in the Edit Todo page to read the `id` from the URL.
  - This id is then used to fetch the correct todo from localStorage.

### Async Logic & Promises

- Even though localStorage is synchronous, asynchronous behavior is simulated using Promises.
- This is done to reflect real-world API calls and to properly show loading states.
- `async/await` is used to make the code more readable and easier to reason about.

### Routing

- React Router is used to manage navigation between pages.
- Routes are defined in `App.jsx`:
  - `/todos` displays the list of todos
  - `/todos/create` opens the create form
  - `/todos/:id/edit` opens the edit form
- Each route renders a page component from the `pages` folder.

### Data Handling

- All CRUD operations are handled inside `todoService.js`.
- This file acts like a small service layer and keeps data logic separate from UI logic.
- Todos are stored in browser localStorage so data persists even after refresh.

### Component Reuse & Structure

- `TodoForm` is reused for both creating and editing todos.
- `TodoCard` handles displaying todo information in a clean card layout.
- `Status` visually represents the todo status using icons and colors.
- This separation keeps components small, readable, and easier to maintain.

### Styling Approach

- SCSS Modules are used to scope styles to individual components.
- This prevents global CSS conflicts and makes styles easier to manage as the app grows.