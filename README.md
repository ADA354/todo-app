# To-Do List Web Application

This project is a simple to-do list web app that I created while learning Node.js, Express, and PostgreSQL. It allows users to add, edit, and delete tasks from a PostgreSQL database, with a clean, minimalistic design. This project showcases my skills and knowledge in web development, database management, and server-side programming.

## Project Purpose

I developed this application as part of my learning journey. The goal was to build a full-stack web app that demonstrates key concepts like:

- Connecting Node.js to a PostgreSQL database.
- Creating RESTful routes for adding, editing, and deleting tasks.
- Rendering dynamic content using EJS templates.
- Designing a responsive and user-friendly interface with HTML and CSS.

This app is primarily for educational purposes, but it also serves as a portfolio piece to demonstrate my abilities to potential employers or collaborators.

## Features

- **Add tasks**: Users can add new tasks to their to-do list.
- **Edit tasks**: Existing tasks can be updated directly from the list.
- **Delete tasks**: Tasks can be deleted by checking them off.
- **Persistent storage**: Tasks are stored in a PostgreSQL database.
- **Responsive design**: The interface adapts to different screen sizes and devices.

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/todo-app.git
    cd todo-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the project root and add your PostgreSQL password:

    ```env
    db_pass=your_postgres_password
    ```

4. Set up the PostgreSQL database:

    ```sql
    CREATE DATABASE permalist;
    ```

5. Run the following SQL commands to create the `items` table:

    ```sql
    DROP TABLE IF EXISTS items;

    CREATE TABLE items (
      id SERIAL PRIMARY KEY,
      title VARCHAR(100) NOT NULL
    );

    INSERT INTO items (title) VALUES ('Buy milk'), ('Finish homework');
    ```

6. Start the server:

    ```bash
    npm start
    ```

7. Visit `http://localhost:3000` in your browser.

## How It Works

- **Homepage (`GET /`)**: Displays all tasks from the database.
- **Add a Task (`POST /add`)**: Adds a new task to the database.
- **Edit a Task (`POST /edit`)**: Edits an existing task.
- **Delete a Task (`POST /delete`)**: Deletes a task from the database.

## Future Improvements

This project was built while learning, and there’s potential for further enhancements:

- Add user authentication.
- Deploy the app to a cloud platform.
- Add due dates and task prioritization.

---

Thank You!