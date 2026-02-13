# 📋 Kanban Task Board

A modern, fully-functional Kanban board built with React and Vite for task management.

## 🚀 Features

### Core Features
- ✅ **Three Columns**: To Do, In Progress, and Done
- ✅ **Add Tasks**: Input field with priority selection
- ✅ **Delete Tasks**: Remove tasks with the "X" button
- ✅ **Move Tasks**: Buttons to move tasks between columns

### Advanced Features
- ✏️ **Edit Tasks**: Click on any task text to edit it inline
- 🎨 **Priority System**: 
  - High Priority → Red border
  - Medium Priority → Yellow border
  - Low Priority → Green border
- 💾 **Local Storage**: Tasks persist even after page refresh

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Fast build tool
- **CSS3** - Styling
- **localStorage** - Data persistence

## 📦 Installation

1. Navigate to the project directory:
```bash
cd kanban-board
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## 🎯 How to Use

1. **Add a Task**: 
   - Enter task description in the input field
   - Select priority (Low, Medium, or High)
   - Click "Add Task" button

2. **Edit a Task**:
   - Click on the task text
   - Type your changes
   - Press Enter or click outside to save
   - Press Escape to cancel

3. **Delete a Task**:
   - Click the "✕" button on the top-right of any task card

4. **Move Tasks**:
   - Use the buttons at the bottom of each card:
     - "← To Do" - Move to To Do column
     - "→ In Progress" - Move to In Progress column
     - "✓ Done" - Move to Done column

## 📁 Project Structure

```
kanban-board/
├── src/
│   ├── components/
│   │   ├── TaskInput.jsx    # Input form for new tasks
│   │   ├── Column.jsx        # Column container component
│   │   └── TaskCard.jsx      # Individual task card
│   ├── App.jsx               # Main app component with state
│   ├── App.css               # Styling
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Component Overview

### App.jsx
- Main component that manages all state
- Handles localStorage operations
- Contains logic for add, delete, move, and edit operations

### TaskInput.jsx
- Form for creating new tasks
- Priority selection dropdown
- Input validation

### Column.jsx
- Displays a single column (To Do / In Progress / Done)
- Shows task count
- Renders TaskCard components

### TaskCard.jsx
- Individual task display
- Edit functionality (click to edit)
- Delete button
- Move buttons (context-aware)
- Priority visual indicators

## 💡 Key Concepts Demonstrated

- **React Hooks**: useState, useEffect
- **Props**: Data passing between components
- **State Management**: Centralized state in App component
- **Event Handling**: User interactions
- **Conditional Rendering**: Dynamic UI based on state
- **Local Storage**: Data persistence
- **Component Composition**: Modular, reusable components

## 🎓 Learning Points

1. **State Management**: All tasks are stored in a single state object in App.jsx
2. **Props Drilling**: Data and functions passed down to child components
3. **Controlled Components**: Form inputs controlled by React state
4. **Side Effects**: useEffect for localStorage synchronization
5. **Unique Keys**: Using timestamp-based IDs for list rendering

## 🚀 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 📝 Future Enhancements (Optional)

- Drag and drop functionality
- Due dates for tasks
- Task categories/tags
- Search and filter
- Dark mode
- User authentication
- Backend integration

---

## Link to see the functioning of the app

https://kanban-task-board-two.vercel.app/