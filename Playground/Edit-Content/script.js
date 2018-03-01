var notebook = document.querySelector('x-notepad');

notebook.addEventListener('dblclick', (ev) => {
    notebook.setAttribute("contenteditable", true);
    notebook.setAttribute("data-edit", true);
});

notebook.addEventListener('blur', (ev) => {
    notebook.setAttribute("contenteditable", false);
    notebook.setAttribute("data-edit", false);
});

document.getElementById('enlarge').addEventListener('click', () => {
    if (screenfull.enabled) {
        // Full Screen Polyfill
        screenfull.request();
    }
});