import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {
  var [getInput, setInput] = useState("");

  var [getTasks, setTasks] = useState([]);

  var [toggleSubmit, setToggleSubmit] = useState(true);

  var [isEdit, setIsEdit] = useState(null);

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  function handleClick() {
    if (getInput.length === 0) {
    } else if (getInput && !toggleSubmit) {
      setTasks(
        getTasks.map((item) => {
          if (item.id === isEdit) {
            return { ...item, text: getInput };
          }
          return item;
        })
      );

      setToggleSubmit(true);
      setInput("");
      setIsEdit(null);
    } else {
      const newTodo = {
        id: new Date().getTime(),
        text: getInput,
        complete: false,
      };
      setTasks([...getTasks].concat(newTodo));

      setInput("");
    }
  }

  function clearIndex(id) {
    const updatedTodo = getTasks.filter((task) => task.id !== id);
    setTasks(updatedTodo);
  }

  function editTask(id) {
    const editval = getTasks.find((item) => item.id === id);

    setToggleSubmit(false);
    setInput(editval.text);
    setIsEdit(id);
  }

  function taskdone(id) {
    const update = [...getTasks].map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    setTasks(update);
  }

  return (
    <div className="comtainer mainContainer">
      <div className="container childContainer">
        <div className="col">
          <div className="heading">
            <h1>Today Tasks</h1>
          </div>
          <div className="form">
            <div>
              <label className="add">
                Add Tasks
                <br />
              </label>
            </div>
            <div className="inputFiled">
              <input
                type="text"
                name="tasks"
                className="inputTask"
                onChange={handleChange}
                value={getInput}
                autoComplete="off"
              />
            </div>

            <div className="button">
              <input
                type="button"
                value={toggleSubmit ? "Add" : "Edit"}
                id="click"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="listContainer">
        <ol>
          {getTasks.map((value, index) => {
            return (
              <li>
                <div className="row  list" key={value.id}>
                  <div className="col listValue">
                    {value.complete ? <s>{value.text}</s> : value.text}
                  </div>
                  <div className="col">
                    <button
                      className="clear"
                      onClick={() => {
                        clearIndex(value.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="col">
                    <button className="done" onClick={() => editTask(value.id)}>
                      Edit
                    </button>
                  </div>

                  <div className="col">
                    <button
                      className="done"
                      onClick={() => taskdone(value.id, index)}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
