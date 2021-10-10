import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";


const initializeFirebaseApp = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebaseApp;



// steps for authentications
/*
Step-1: Initial setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. enable auth method

Step-2:
1. Create login and register component
2. create route for login and register

Step- 3:
1. set up sign in method
2. set up logout method
3. user state
4. special observer
5. retunr necessary methods and states

Step-4:
1. create a context api
2. create a context provider
3. set context provider and context value
4. use Auth provider
5. create useAuth hook

Step-5:
1. create private route
2. set private route

Step-6:
1. Redirect after login
*/
