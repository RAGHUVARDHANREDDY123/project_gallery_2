fetch("tasks.json")
  .then(response => response.json())
  .then(data => {
    const taskList = document.getElementById("taskList");
    const contentFrame = document.getElementById("contentFrame");

    // Loop through each task and display a button
    Object.entries(data).forEach(([taskName, files]) => {
      const htmlFile = files.find(file => file.endsWith(".html"));
      if (htmlFile) {
        const button = document.createElement("button");
        button.textContent = taskName.replace("task", "Task ");
        button.onclick = () => {
          contentFrame.src = `tasks/${taskName}/${htmlFile}`;
        };
        taskList.appendChild(button);
      }
    });
  })
  .catch(error => {
    console.error("Failed to load tasks.json:", error);
    document.getElementById("taskList").innerText = "Failed to load tasks.";
  });
