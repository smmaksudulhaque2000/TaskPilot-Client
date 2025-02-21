<div align="center">
  <img src="https://i.ibb.co.com/JWs3Hfwp/Screenshot-5.png" height="400" width="800" alt="TaskPailot"/>
</div>

# Task Management Application (TaskPailot)

## 📌 Overview

This is a **Task Management Application (TaskPailot)** that allows users to manage their tasks effectively using a **drag-and-drop interface**. Tasks are categorized into three sections: **To-Do, In Progress, and Done**. The application ensures real-time updates and persistence using **MongoDB** as the database. 

This project demonstrates frontend interactivity, backend data management, and **real-time synchronization** while maintaining a clean and responsive UI.

## 📖 Table of Contents

- [Task Management Application (TaskPailot)](#task-management-application-taskpailot)
  - [📌 Overview](#-overview)
  - [📖 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🌍 Live Demo](#-live-demo)
  - [🛠 Technologies Used](#-technologies-used)
  - [⚙️ Installation](#️-installation)
    - [Clone the Repository](#clone-the-repository)
    - [Install Dependencies](#install-dependencies)
      - [Frontend:](#frontend)
      - [Backend:](#backend)
    - [Configure Environment Variables](#configure-environment-variables)
  - [🚀 Usage](#-usage)
  - [🔌 API Endpoints](#-api-endpoints)
  - [🌟 Bonus Features](#-bonus-features)
  - [👥 Contributors](#-contributors)
  - [📝 License](#-license)

## ✨ Features

✅ **Authentication**
- Users must log in using **Google Authentication** via Firebase.
- User details (ID, email, display name) are stored in the database.

✅ **Task Management**
- Users can **add, edit, delete, and reorder** tasks.
- Tasks are categorized as:
  - 📝 To-Do
  - 🔄 In Progress
  - ✅ Done
- Drag and drop functionality to move tasks between categories.
- Instant database synchronization.

✅ **Database & Persistence**
- **MongoDB** stores tasks persistently.
- Real-time updates using **Change Streams / WebSockets**.
- Deleted tasks are permanently removed.

✅ **Frontend UI**
- Built with **Vite.js + React**.
- Uses a **drag-and-drop library** for smooth interactions.
- Modern, **minimalistic**, and **responsive** design.

✅ **Backend API**
- Developed using **Express.js**.
- Handles CRUD operations for tasks.

✅ **Mobile Responsiveness**
- Fully optimized for **both desktop and mobile users**.

## 🌍 Live Demo

🔗 **Live Application**: [Click here](https://taskpilot-e895c.web.app/)

🔗 **Frontend Repo**: [GitHub Link](https://github.com/smmaksudulhaque2000/TaskPilot-Client)  
🔗 **Backend Repo**: [GitHub Link](https://github.com/smmaksudulhaque2000/TaskPilot-Server)

## 🛠 Technologies Used

| Technology  | Purpose |
|-------------|---------|
| **React.js** | Frontend UI |
| **Vite.js** | React development environment |
| **Firebase** | Authentication (Google Sign-In) |
| **MongoDB** | Database for task storage |
| **Express.js** | Backend API |
| **Node.js** | Server-side logic |
| **react-beautiful-dnd** | Drag and drop functionality |

## ⚙️ Installation

### Clone the Repository
```sh
git clone https://github.com/smmaksudulhaque2000/TaskPilot-Client
cd your-repo
```

### Install Dependencies

#### Frontend:
```sh
cd frontend
npm install
npm run dev
```

#### Backend:
```sh
cd backend
npm install
npm start
```

### Configure Environment Variables
Create a `.env` file in the backend directory and add:
```env
MONGO_URI=your_mongodb_connection_string
FIREBASE_API_KEY=your_firebase_api_key
```

## 🚀 Usage

1. **Login** using Google Authentication.
2. **Create, Edit, Delete, or Drag tasks** between categories.
3. **Changes are saved instantly** in the database.
4. Refresh the page to see **persisted tasks**.

## 🔌 API Endpoints

| Method | Endpoint        | Description |
|--------|---------------|-------------|
| `POST` | `/tasks`       | Add a new task |
| `GET`  | `/tasks`       | Retrieve all tasks |
| `PUT`  | `/tasks/:id`   | Update task details |
| `DELETE` | `/tasks/:id` | Delete a task |

## 🌟 Bonus Features

- 🌙 **Dark Mode Toggle**
- 📆 **Task Due Dates with Color Indicators**
- 📜 **Activity Log** to track task changes

## 👥 Contributors

- **Maksudul Haque** – [GitHub](https://github.com/smmaksudulhaque2000)

## 📝 License

This project is licensed under the **MIT License**.
