"use strict";
let list = [{}];

function addToList(title, description) {
  list.push({
    title: `${title}`,
    description: `${description}`,
    status: "To-Do",
  });
}

function addMass() {
  addToList(
    "Website Redesign",
    "Revamp the company website for a modern look."
  );
  addToList(
    "Marketing Campaign",
    "Launch a new marketing campaign targeting millennials."
  );
  addToList("Product Launch", "Prepare for the upcoming product release.");
  addToList(
    "Client Feedback Survey",
    "Gather feedback from clients about the recent service."
  );
  addToList(
    "Mobile App Update",
    "Release an update for the mobile app with bug fixes."
  );
  addToList(
    "Annual Report",
    "Create and review the company’s annual performance report."
  );
  addToList(
    "Social Media Strategy",
    "Plan the next quarter’s social media strategy."
  );
  addToList("Team Meeting", "Hold a weekly meeting with the development team.");
  addToList(
    "Client Presentation",
    "Prepare slides for the next client pitch meeting."
  );
  addToList(
    "System Maintenance",
    "Perform system maintenance on the company servers."
  );
}

function listDisplay() {
  for (let i = 1; i < list.length; i++) {
    document.querySelector(".title").innerHTML = "<H1>" + "Task App" + "</H1>";

    // const para = document.createElement("p");
    // const node = document.createTextNode(list[i].title);
    // para.appendChild(node);

    // const element = document.getElementById("task_list");
    // element.appendChild(para);

    const tasklist = document.querySelector(".tasklist");
    const newCart = document.createElement("div");

    newCart.innerHTML = `<p>${list[i].title} </p> <button class="remove_task" onclick="removeTask(${i})">Remove</button> <button class="edit_task">Edit</button>`;
    newCart.classList.add(".tasklist_item");
    tasklist.appendChild(newCart);
  }
}

addMass();
listDisplay();

const newTask = function () {
  let task_title = document.querySelector("input[name='Add_Task']").value;
  addToList(task_title, "");
  document.querySelector("#task_list").innerHTML = "";

  listDisplay();
};

const removeTask = function (taskID) {
  console.log(`${taskID}; -> ${list[taskID].title}`);
  list.splice(taskID, 1);
  document.querySelector("#task_list").innerHTML = "";
  listDisplay();
};
