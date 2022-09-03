const URL = "http://localhost:3000/";

async function getTodolist() {
    const res = await fetch(URL, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    });
    if (res.ok) {
        return res.json();
    } else {
        throw new Error("Bad response");
    }
}

async function addTask(value) {
    const data = {description: value, done: false};

try {   
    
    const response = await fetch(URL, {
        method: 'POST',
        //mode: 'no-cors',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json",
        },
    });
    return await response.json();

  } catch (error) {
    console.log(error);
  }
}; 

async function deleteTask(id) {
    const res = await fetch(URL + id, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
        },
    });
    if (res.ok) {
        callTodolist();
        return;
    } else {
        throw new Error("Bad response");
    }
}  

async function doneTask(id) {
    const data = {done: true};

try {    
    const response = await fetch(URL + id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json",
        },
    });
    return await response.json();
        
  } catch (error) {
    console.log(error);
  }
}; 

async function changeTask(id, text) {
    const data = {description: text};

try {    
    const response = await fetch(URL + id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json",
        },
    });
    return await response.json();
            
  } catch (error) {
    console.log(error);
  }
}; 
 
