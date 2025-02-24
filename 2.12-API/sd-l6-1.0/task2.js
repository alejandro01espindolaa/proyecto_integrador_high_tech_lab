// Task 2: listUsers()

import { getServerURL } from "./task1.js";

export async function listUsers() {
   const response = await fetch( getServerURL() + "/users" );
   const users = await response.json();
   const firstFourUsers = users.slice(0, 4);
   console.log(firstFourUsers);
}