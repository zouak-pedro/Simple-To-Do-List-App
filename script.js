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
  document.querySelector(".error").style.opacity = 0;
  for (let i = 1; i < list.length; i++) {
    const tasklist = document.querySelector(".tasklist");
    const newCart = document.createElement("div");

    newCart.innerHTML = `<h3>${list[i].title} </h3> <p>${list[i].description}</p> <button class="remove_task" onclick="removeTask(${i})">Remove</button> <button class="edit_task" onclick="editTask(${i})">Edit</button>`;
    newCart.classList.add(".tasklist_item");
    tasklist.appendChild(newCart);
  }
}

addMass();
listDisplay();

const newTask = function () {
  let task_title = document.querySelector("input[name='task_title']").value;
  let task_description = document.querySelector(
    "textarea[name='task_description']"
  ).value;
  const isWhitespaceString = (str) => !/\S/.test(str);

  if (task_title == " " || !task_title || isWhitespaceString(task_title)) {
    document.querySelector(".error").style.opacity = 1;

    document.querySelector(".error").innerText = "You need to add a task title";
    return;
  }
  // task_description
  addToList(task_title, task_description);
  document.querySelector("#task_list").innerHTML = "";

  listDisplay();
};

const removeTask = function (taskID) {
  console.log(`${taskID}; -> ${list[taskID].title}`);
  list.splice(taskID, 1);
  document.querySelector("#task_list").innerHTML = "";
  listDisplay();
};

const editTask = function (taskID) {
  console.log(taskID);
};
