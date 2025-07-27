import * as storage from './storage.js';

const modal = document.getElementById('course-modal');
const courseForm = document.getElementById('course-form');
const modalTitle = document.getElementById('modal-title');

const openModal = () => modal.style.display = 'block';
const closeModal = () => {
    modal.style.display = 'none';
    courseForm.reset();
    document.getElementById('course-id').value = '';
};

export function initCourseForm() {
    // Lógica del formulario de añadir/editar curso
}

export function renderCoursesTable() {
    const courses = storage.getAllCourses();
    const tableContainer = document.querySelector('.table-container');
    const table = document.querySelector('#courses-table');
    const tableBody = table.querySelector('tbody');

    const rowHeight = 50; // Altura estimada de cada fila en píxeles
    const containerHeight = tableContainer.clientHeight;
    const visibleRows = Math.ceil(containerHeight / rowHeight);
    const buffer = 5; // Un pequeño búfer para un scroll más suave

    let startIndex = 0;
    let endIndex = Math.min(courses.length, visibleRows + buffer);

    // Crear un 'espaciador' para simular la altura total de la tabla
    const spacer = document.createElement('div');
    spacer.style.height = `${courses.length * rowHeight}px`;
    table.style.position = 'relative'; // Necesario para el posicionamiento absoluto
    table.parentNode.insertBefore(spacer, table);


    function renderChunk() {
        tableBody.innerHTML = '';
        const fragment = document.createDocumentFragment();
        for (let i = startIndex; i < endIndex; i++) {
            const course = courses[i];
            const row = document.createElement('tr');
            row.style.position = 'absolute';
            row.style.top = `${i * rowHeight}px`;
            row.style.width = '100%';
            row.innerHTML = `
                <td>${course.nombre}</td>
                <td>${course.instructor}</td>
                <td>${course.duracion}</td>
                <td class="action-buttons">
                    <button class="btn-add" data-id="${course.id}">Añadir</button>
                </td>
            `;
            fragment.appendChild(row);
        }
        tableBody.appendChild(fragment);
    }

    tableContainer.addEventListener('scroll', () => {
        const scrollTop = tableContainer.scrollTop;
        const newStartIndex = Math.floor(scrollTop / rowHeight);

        if (newStartIndex !== startIndex) {
            startIndex = newStartIndex;
            endIndex = Math.min(courses.length, startIndex + visibleRows + buffer);
            renderChunk();
        }
    });

    renderChunk();
}
