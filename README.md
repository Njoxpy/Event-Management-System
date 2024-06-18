# Event Management System

![React](https://img.shields.io/badge/React-v17.0.2-blue)
![React Router](https://img.shields.io/badge/React%20Router-v6.4-brightgreen)
![JSON Server](https://img.shields.io/badge/JSON%20Server-v0.16.3-lightgrey)
![License](https://img.shields.io/badge/License-MIT-yellowgreen)
![Node](https://img.shields.io/badge/Node.js-v14.17.0-green)
![npm](https://img.shields.io/badge/npm-v6.14.13-red)
![Build](https://img.shields.io/badge/Build-passing-brightgreen)

## Overview

The Event Management System is a web application that allows users to create, manage, and view events. This project is built using React and React Router v6.4 to handle the navigation and routing between different pages. A JSON server is used to simulate a backend and handle data storage and retrieval.

## Features

- **Home Page**: View a list of upcoming events.
- **Event Detail Pages**: Access detailed information about each event.
- **Dashboard**: A protected area for authenticated users to manage events, including creating, editing, and deleting events.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **React Router v6.4**: For handling navigation and routing.
- **JSON Server**: To simulate a backend server for storing event data.

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Clone the Repository

```bash
git clone https://github.com/Njoxpy/Event-Management-System
cd event-management-system
```

## Install Dependencies

```sh
npm install
```

## Set Up JSON Server

- To simulate a backend server, we use JSON Server. The server should run on port 3003.

## Install JSON Server globally:

```bash
npm install -g json-server
```

## Start JSON Server:

```bash
npx json-server --watch data/event.json --port 3003
```

## Running the Application

- In a separate terminal window, start the React development server:

```bash
npm run dev
```

- Open your browser and navigate to http://localhost:5173 to see the application in action.

## Usage

- Home Page: Lists all upcoming events. Click on an event to view more details.
- Event Detail Page: Provides comprehensive information about a selected event.
- Dashboard: Accessible via the navigation menu. Allows authenticated users to manage events. Ensure you are authenticated to access this section.

## Contributing

- Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Acknowledgements

- Thanks to the developers of [React](https://react.dev/) and [React Router](https://reactrouter.com/) for their excellent libraries.
- Thanks to the [JSON Server](https://www.npmjs.com/package/json-server) team for providing a simple way to create mock APIs.
- Special thanks to The [Net Ninja](https://www.youtube.com/@NetNinja/) YouTube channel for their helpful tutorials and resources.
