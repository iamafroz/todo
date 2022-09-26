import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./todo.css"


function todos(props){

    return(
        <div>

      <div className="col list">
        <div className="row">
          <div className="col-8">
            <div id="taskName">
              <p>{props.task}</p>
            </div>
          </div>
          <div className="col-4">
            <div className="buttons">
              <input type="button" className="doneButton" value="Done"/>
              <input type="button" className="removeButton" value="Remove" />
            </div>
          </div>
        </div>
      </div>

      <div className="col list">
        <div className="row">
          <div className="col-8">
            <div className="taskName">Task Name</div>
          </div>
          <div className="col-4">
            <div id="buttons">
              <input type="button" className="doneButton" value="Done" />
              <input type="button" className="removeButton" value="Remove" />
            </div>
          </div>
        </div>
      </div>

      <div className="col list">
        <div className="row">
          <div className="col-8">
            <div id="taskName">Task Name</div>
          </div>
          <div className="col-4">
            <div className="buttons">
              <input type="button" className="doneButton" value="Done" />
              <input type="button" className="removeButton" value="Remove" />
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default todos;