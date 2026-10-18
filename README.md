# To Do It! ✅
A dynamic, modular To-Do application built for The Odin Project. This project focuses heavily on Object-Oriented Programming (OOP) in vanilla JavaScript, Webpack bundling, and complex DOM manipulation without frontend frameworks.

🧠 Key Learnings
- Event Delegation for Dynamic UI: Attached single event listeners to permanent parent containers rather than individual dynamic buttons. This eliminated memory leaks, solved re-rendering bugs, and kept render functions perfectly pure (SOLID principles).
- LocalStorage "Rehydration" in OOP: Discovered that JSON.stringify strips methods from class instances. Built a rehydration system to parse raw JSON data back through Project and Task class constructors on page load to restore their methods.

🛠️ Features
- Project Management: Create and delete isolated project folders.
- Task Management: Add, edit, and delete tasks within specific projects.
- Form Modals: Utilizes modern HTML5 <dialog> tags for clean form interfaces.
- Persistent Data: Automatically saves and rehydrates state using localStorage

💻 Technologies Used
- HTML5 (<dialog> API) & CSS3 (Flexbox)
- Vanilla JavaScript (ES6 Classes, Modules)
- Webpack & npm