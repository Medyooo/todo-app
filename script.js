document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.querySelector("form");
    const taskList = document.getElementById("task-list");

    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Récupérer la valeur de la nouvelle tâche
        const taskInput = document.getElementById("task");
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Créer un nouvel élément de liste
            const listItem = document.createElement("li");
            listItem.textContent = taskText;

            // Créer un bouton de suppression
            const deleteButton = document.createElement("button-delete");
            deleteButton.textContent = "Supprimer";
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(listItem);
            });

            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);

            // Effacer le champ de texte
            taskInput.value = "";
        }
    });
});
