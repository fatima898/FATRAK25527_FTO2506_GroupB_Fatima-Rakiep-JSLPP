# JSL Portfolio Piece: Kanban App Deployment & Features Implementation

## 🚀 Kanban Board App Overview

This project involves **deploying a Kanban app to Netlify**, ensuring the app's functionality and persistence through local storage, and implementing dynamic features such as task editing, deletion, sidebar interaction, and a theme toggle. The goal is to deliver a fully interactive, deployable application that is responsive across devices and maintains data consistency. 

## 🔗 Links 
- Live App on Netlify: 
- Presentation: [Watch Presentation]()

## 🗝️ Key Features

**1. Initial Data Fetching from API**

- The app fetches tasks dynamically from the following API on first load:  (https://jsl-kanban-api.vercel.app/)  
- A **loading message** is displayed while the data is being fetched.
- If the API fails to respond, an **error message** is shown to inform the user.
- Onced fetched, data is stored in the `localStorage` to persist it across page reloads.

**2. Local Storage Persistence**

- All task data is saved in the browser's `localStorage`.
- When the app starts, it first checks `localStorage`:

    - If the tasks exist, it will load them.
    - If not, it fetches from the API.

- Any changes (modification) are immediately reflected in the localStorage.

**3. Task Editing and Deletion**

- Clicking a task, opens a moal with editable fields for **title, description and status (todo, doing and done)**
- Users can update the task and save the changes, which are reflected in the UI and localStorage.
- A `delete` button in the ,odal allows users to delete/remove a task. 
- A **confirmation prompt** appears before deletion (deleted tasks are removed from UI and localStorage.)

**4. Responsive Sidebar (Desktop and Mobile)**

- The sidebar (board navigation, theme toggle switch)
- Desktop view: Sidebar is fixed and toggleable 
- Mobile View: Sidebar is accessible via the app logo and can be closed for a clean/clear view.

**5. Dark and Light Theme Toggle**

- A toggle switch allows users to switch between **dark mode** and **light mode**.
- Available in both the desktop sidebar and mobile menu.
- The app adjusts to the selected theme.

## 📌 Optional Stretch Feature 

**Task Priority System**

- If implemented, tasks can be assigned a priotity (low, medium and high).
- Priority is clearly displayed on each task card and editable through thr task modal. (svaed to `localStorage`)
- Tasks are automatically sorted in to each column and sorting is persistent on reload.

## 🌍 User Experience Highlights 

- Fully responsive design.
- Clean, intuitive interface modeled on the provided [Figma Reference File](https://www.figma.com/design/y7bFCUYL5ZHfPeojACBXg2/Challenges-%7C-JSL?node-id=6033-11092&t=XbQhBWPYxXDAqp3x-1)
- Real-time feedback for loading, editing and erroe handling.
- Modular and maintainable codebase with clear function responsibilities and JSDoc documentation.

## 🛠️ Technologies Used

- HTML: stuctural backbone with semantic elements.
- CSS: handles the styling and responsive design.
- JavaScript: powers all dynamic behaviour. 

## 💻 User Interaction 

**Adding a New Task**
- Click the `+ Add New Task` button in the top right corner of the header.
- Fill in the required fields (title, description) and select a status and priority.
- Click `Create Task` button to add it to the board.

**Edit Task**
- Click on a task card to open the `edit task` modal.
- Modify the title, description, status and priority.
- Clik the `Save` purple button to update the task board.

**Delete Task**
- Click on the task card you want to delete, to open the `edit task` modal.
- Click the `Delete` red button to confirm.

**Close Modal**
- Click the red `x` in the right hand corner of the modal to close it.

## ⚙️ Set up Instructions 

1. Clone the repository: 
(git clone https://github.com/fatima898/FATRAK25527_FTO2506_GroupB_Fatima-Rakiep_JSLPP)

2. Navigate to the project directory:
cd FATRAK25527_FTO2506_GroupB_Fatima-Rakiep_JSLPP -> **replace with your project folder name**

3. Open the file: Locate the folder and double click index.html in the root directory to open the application in your browser. (Firefox, Chrome)



