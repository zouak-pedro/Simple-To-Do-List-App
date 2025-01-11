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

    const para = document.createElement("p");
    const node = document.createTextNode(list[i].title);
    para.appendChild(node);

    const element = document.getElementById("task_list");
    element.appendChild(para);
  }
}

addMass();
listDisplay();

const newTask = function () {
  let task_title = document.querySelector("input[name='Add_Task']").value;
  console.log(task_title);
  addToList(task_title, "");
  document.querySelector("#task_list").innerHTML = "";

  listDisplay();
};
