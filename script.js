"use strict";
let list = [];

function addToList(title, description) {
  list.push({
    title: `${title}`,
    description: `${description}`,
    status: false,
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
  document.querySelector("#task_list").innerHTML = "";
  document.querySelector(".error").style.opacity = 0;
  document.querySelector("input[name='task_title']").value = "";
  document.querySelector("textarea[name='task_description']").value = "";

  for (let i = 0; i < list.length; i++) {
    const tasklist = document.querySelector(".tasklist");
    const newCart = document.createElement("div");

    newCart.innerHTML = `<div id="item_${i}" class="tasklist_item_check" onclick="tasklist_item_check(${i})"></div><div class="tasklist_item_data"><h3>${list[i].title} </h3> <p>${list[i].description}</p></div> <div class="tasklist_item_button"> <button class="remove_task" onclick="removeTask(${i})">Remove</button> <button class="edit_task" onclick="editTask(${i})">Edit</button> </div>`;
    newCart.classList.add("tasklist_item");
    newCart.classList.add(`task${i}`);
    tasklist.appendChild(newCart);

    if (list[i].status) {
      document.querySelector(`#item_${i}`).style.backgroundColor = "#77E4C8";
      document.querySelector(`.task${i}`).style.backgroundColor = "#4DA1A9";
      document.querySelector(`.task${i} H3`).style.textDecorationLine =
        "line-through";
      document.querySelector(`.task${i} p`).style.textDecorationLine =
        "line-through";
    } else {
      document.querySelector(`#item_${i}`).style.backgroundColor = "#fff";
      document.querySelector(`.task${i}`).style.backgroundColor = "#36c2ce";
      document.querySelector(`.task${i} H3`).style.textDecorationLine = "none";
      document.querySelector(`.task${i} p`).style.textDecorationLine = "none";
    }
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

  addToList(task_title, task_description);
  //document.querySelector("#task_list").innerHTML = "";
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

const tasklist_item_check = function (item) {
  console.log("click");
  console.log(`${list[item].status}`);
  list[item].status = !list[item].status;
  console.log(`${list[item].status}`);
  listDisplay();
  //document.querySelector(`#item_${item}`).style.backgroundColor = "#77E4C8";
};
