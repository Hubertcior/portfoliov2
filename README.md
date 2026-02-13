# Interactive Portfolio Terminal

This project is a full-stack, interactive personal portfolio designed to resemble a developer's terminal or a system diagnostics screen. It showcases my projects, skills, and professional background in a unique, engaging way.

***

## ✨ Features

*   **Interactive UI:** A dynamic, terminal-like interface built with React.
*   **Animated Background:** A "Matrix"-style falling text effect.
*   **API-driven Content:** A .NET backend serves data to the frontend, mimicking a real-world application architecture.
*   **Project Showcase:** A dedicated section to display and watch videos of my work.
*   **Interactive API Console:** A section that allows users to "test" the backend API endpoints directly from the UI.
*   **Professional Bio:** A summary of my experience and skills.
*   **Downloadable CV:** A direct link to download my resume.

***

## 🛠️ Tech Stack

### Frontend

*   **Framework:** React with Vite
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Animations:** Framer Motion
*   **Icons:** React Icons

### Backend

*   **Framework:** .NET 10
*   **Language:** C#
*   **API:** RESTful API

***

## 🚀 Getting Started

### Prerequisites

*   Node.js (LTS version recommended)
*   .NET SDK 10 or later

### 1. Backend Setup

```bash
# Navigate to the server directory
cd server

# Restore dependencies
dotnet restore

# Run the application
dotnet run
```
The backend API will be running on `http://localhost:5000` (or as specified in `launchSettings.json`).

### 2. Frontend Setup

```bash
# Navigate to the client directory
cd client

# Install dependencies
npm install

# Run the development server
npm run dev
```
The frontend will be available at `http://localhost:5173`.

***

## 📂 Project Structure

The project is organized into two main parts in a monorepo-like structure:

```
/
├── client/         # Contains the React frontend application
│   ├── src/
│   └── ...
├── server/         # Contains the .NET backend API
│   ├── Controllers/
│   └── ...
└── portfolio.sln   # Visual Studio solution file
```


