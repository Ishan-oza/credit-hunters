// File: src/user-management.js (Your logic file)

// 1. IMPORT the initialized 'db' object from your config file.
//    (This is how you get access to the database connection)
import { db } from './firebase-config'; 

// 2. Import the Firestore functions you need
import { collection, addDoc } from "firebase/firestore";

// 3. Define your data function (Step 7)
async function addNewUser(userData) {
  try {
    // Use the imported 'db' reference here to make the call
    const docRef = await addDoc(collection(db, "users"), userData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// 4. Run the function when needed (e.g., in a submit handler)
// addNewUser({ first: "Sachu", last: "User", role: "Developer" });

export { addNewUser }; // Export the function if needed elsewhere