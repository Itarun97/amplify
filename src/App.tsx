import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import React, { useState } from "react";
//import { useEffect, useState } from "react";
//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";

//const client = generateClient<Schema>();

function App() {
  
    const [emailid, setEmailid] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
  
    const handleEmailidChange = (event: {
      target: { value: React.SetStateAction<string> };
    }) => {
      setEmailid(event.target.value);
    };
  
    const handleSubjectChange = (event: {
      target: { value: React.SetStateAction<string> };
    }) => {
      setSubject(event.target.value);
    };
  
    const handleBodyChange = (event: {
      target: { value: React.SetStateAction<string> };
    }) => {
      setBody(event.target.value);
    };
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
      console.log(emailid);
      console.log(subject);
      console.log(body);
      try {
        const response = fetch(
          "https://owwg6axev9.execute-api.ap-south-1.amazonaws.com/testing",
          {
            method: "POST",
            body: JSON.stringify({
              emailid: emailid,
              subject: subject,
              body: body,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
  
        response
          .then((response) => response.json())
          .then((data) => { 
                    
           return data;
          })
          .catch((err) => {
            console.log(err);
            throw err;
          });
      } catch (error) {
        console.error("Error sending email:", error);
      }
    };
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
      
        <header className='App-header'>

        <title>Compose Email</title>
        <div className='text'>
        <form id="email-form" className="compose-form">
            <h2>Compose Email</h2>
            <div className='group'>
                <label htmlFor="to">To:</label>
                <input type="email" id="to" name="to" onChange={handleEmailidChange} required/>

            </div>
            <div className='group'>
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" onChange={handleSubjectChange} required/>
            </div>
            <div className='group'>
                  <label htmlFor="body">Body:</label>
                  <textarea id="body" name="body" onChange={handleBodyChange} required></textarea>
            </div>
            <button type="submit" onClick={handleSubmit}>Compose</button>
            </form>
            <div className="email-preview"></div>
        </div>


        </header>
      
  
  <button onClick={signOut}>Sign out</button>
      


      
    </main>
        
      )}
      </Authenticator>
  );
}

export default App;
