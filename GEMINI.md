# Project: Trello Clone

## Project Overview

This project is a simplified, Trello-like task board application. It allows users to manage tasks in different lists, such as "To Do", "In Progress", and "Done". The application is built using modern web technologies, providing a reactive and engaging user experience.

The core of the application is built with **Vue.js 3**, a progressive JavaScript framework for building user interfaces. State management is handled by **Pinia**, the official state management library for Vue.js, ensuring a centralized and predictable state container. The application utilizes **Vue Router** for client-side routing, though it currently has a single main board view.

The user interface is built with the **Vant** component library, which provides a set of reusable and customizable UI components. The application features drag-and-drop functionality for moving cards between lists, implemented using **vue-draggable-next**.

The application's state, including all lists and cards, is persisted in the browser's `localStorage`, allowing users to retain their board state across sessions. The project is set up with **Vite**, a modern and fast build tool, for development and production builds.

## Building and Running

To get the project up and running, follow these steps:

1.  **Install Dependencies:**

    ```sh
    npm install
    ```

2.  **Run in Development Mode:**
    This command will start a local development server with hot-reloading enabled.

    ```sh
    npm run dev
    ```

3.  **Build for Production:**
    This command will compile and minify the application for production.

    ```sh
    npm run build
    ```

4.  **Preview Production Build:**
    This command will start a local server to preview the production build.
    ```sh
    npm run preview
    ```

## Development Conventions

- **CSS Preprocessor:** The project uses **Less** for styling.
- **Module System:** The project uses ES modules.
- **Path Aliases:** The `@` alias is configured to point to the `src` directory for cleaner import paths.
- **State Management:** The application's state is managed in `src/store/board.js` using Pinia. The entire board state is persisted to `localStorage` on any change.
- **Routing:** The routing is defined in `src/router/index.js` and consists of a single route for the main board view.
- **Development Tools:** The project is configured with `vite-plugin-vue-devtools` for an enhanced debugging experience in the browser.

## 更多编程规则

- **使用 vant:** 尽量用 vant 作为组件库
