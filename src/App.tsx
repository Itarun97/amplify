import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
//import { useEffect, useState } from "react";
//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";

//const client = generateClient<Schema>();

function App() {
 /* const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }*/

  return (
        
    <Authenticator>
      {({ signOut }) => (
    <main>
      <div>
      <title>Compose Email</title>
      <div>
            <form id="email-form" className="compose-form">
            <h2>Compose Email</h2>
            <div>
                <label htmlFor="to">To:</label>
                <input type="email" id="to" name="to" required/>
            </div>
            <div>
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required/>
            </div>
            <div>
                  <label htmlFor="body">Body:</label>
                  <textarea id="body" name="body" required></textarea>
            </div>
            <button type="submit">Compose</button>
            </form>
      </div>
      </div>
      
  <div id="email-preview"></div>
  <button onClick={signOut}>Sign out</button>
      


      
    </main>
        
      )}
      </Authenticator>
  );
}

export default App;
