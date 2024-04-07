# Assignment: Redux II - Todo App using Redux + JSON Server

## Live Presentation - <a target="_blank" href='https://www.linkedin.com/feed/update/urn:li:activity:7182628286231961601/'>Watch Now</a>


## Assignment Description:

- You are tasked with creating a Todo application using Redux for state management and JSON Server to store the todos. The application should allow users to add a todo, update it (toggle its status and edit the title), and delete it. All changes should be reflected in the db.json file used by JSON Server.

## Features:

- Users can add, update (toggle status and edit title), and delete todos, reflecting changes in the db.json file used by JSON Server.

- Todo actions are managed by Redux.

- Redux-thunk is used to handle functions dispatched using the dispatcher function.

- Minimal functions are used inside components, with action.js files for writing and dispatching functions.

- Chakra UI is used for the app's design.

- Theme toggle functionality is included, with the theme maintained by Redux in a separate reducer.

- Loading and error indicators are added, with a separate reducer if required.

## Additional Functionality from my side to assignment:

- Logout functionality is implemented.

- Users can filter todos based on their status (completed or pending).

## How to Use:

### To run the application, follow these steps:

1. Clone this repository.

2. Run npm install to install dependencies.

3. Start JSON Server: json-server --watch db.json --port 8080

4. Start the app: npm run dev

## Usage:

- Add a new todo: Enter the todo title in the input field and press Enter.

- Update a todo: Click on the todo title to edit it, then press Enter to save the changes.

- Toggle a todo's status: Click on the checkbox next to the todo title.

- Delete a todo: Click on the delete button next to the todo.

## Theme Toggle:

- To toggle between light and dark themes, click on the theme toggle button located in the app header.

## Filtering Todos:

- To filter todos based on their status, use the filter buttons located above the todo list.
- Click on 'All', 'Completed', or 'Pending' to filter the todos accordingly.

## Technologies Used:

- React

- Redux

- JSON Server

- Chakra UI

- Redux-thunk

## Now Future Tasks/Developer's Task who will gonna use this repo!

- ### Responsiveness: Ensure the application is responsive and works well on various devices and screen sizes.

- ### Real Backend Implementation: Replace the JSON Server with a real backend solution for deployment, such as Node.js with Express and MongoDB.

- ### Additional Input Fields: Add more input fields for the user, such as a description field for each todo, to provide more context or details.
