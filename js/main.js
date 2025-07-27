document.addEventListener('DOMContentLoaded', () => {
    // --- NAVEGACIÓN ---
    const menuLinks = document.querySelectorAll('.menu a');
    const views = document.querySelectorAll('.view');

    const switchView = (hash) => {
        views.forEach(view => view.classList.remove('active'));
        menuLinks.forEach(link => link.classList.remove('active'));

        const targetView = document.querySelector(hash);
        const targetLink = document.querySelector(`.menu a[href="${hash}"]`);

        if (targetView) targetView.classList.add('active');
        if (targetLink) targetLink.classList.add('active');

        if (hash === '#catalogo') {
            renderCoursesTable();
        } else if (hash === '#mis-cursos') {
            renderMyCoursesDashboard();
        } else if (hash === '#certificaciones') {
            renderCertifications();
        }
    };

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const hash = event.target.getAttribute('href');
            switchView(hash);
            window.location.hash = hash;
        });
    });

    if (window.location.hash) {
        switchView(window.location.hash);
    } else {
        switchView('#dashboard');
    }

    // --- MODAL Y FORMULARIO DE CURSOS ---
    const modal = document.getElementById('course-modal');
    const addCourseButton = document.getElementById('add-course-button');
    const closeButton = document.querySelector('.close-button');
    const courseForm = document.getElementById('course-form');
    const modalTitle = document.getElementById('modal-title');

    const openModal = () => modal.style.display = 'block';
    const closeModal = () => {
        modal.style.display = 'none';
        courseForm.reset();
        document.getElementById('course-id').value = '';
    };

    addCourseButton.addEventListener('click', () => {
        modalTitle.textContent = 'Añadir Nuevo Curso';
        openModal();
    });

    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    courseForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const courseId = document.getElementById('course-id').value;
        const allCourses = storage.getAllCourses();

        if (courseId) {
            // --- Lógica de Actualizar ---
            const courseIndex = allCourses.findIndex(c => c.id == courseId);
            if (courseIndex > -1) {
                allCourses[courseIndex].nombre = document.getElementById('course-name').value;
                allCourses[courseIndex].instructor = document.getElementById('course-instructor').value;
                allCourses[courseIndex].duracion = document.getElementById('course-duration').value;
            }
        } else {
            // --- Lógica de Crear ---
            const newCourse = {
                id: Date.now(),
                nombre: document.getElementById('course-name').value,
                instructor: document.getElementById('course-instructor').value,
                duracion: document.getElementById('course-duration').value,
            };
            allCourses.push(newCourse);
        }

        storage.saveAllCourses(allCourses);
        renderCoursesTable();
        closeModal();
    });

    // --- RENDERIZADO DE LA TABLA DE CURSOS Y MANEJO DE EVENTOS ---
    const renderCoursesTable = () => {
        const courses = storage.getCourses();
        const tableBody = document.querySelector('#courses-table tbody');
        tableBody.innerHTML = ''; // Limpiar tabla

        courses.forEach(course => {
            const row = `
                <tr>
                    <td>${course.nombre}</td>
                    <td>${course.instructor}</td>
                    <td>${course.duracion}</td>
                    <td class="action-buttons">
                        <button class="btn-edit" data-id="${course.id}">Editar</button>
                        <button class="btn-delete" data-id="${course.id}">Eliminar</button>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });

        // Añadir event listeners a los botones de editar
        document.querySelectorAll('.btn-edit').forEach(button => {
            button.addEventListener('click', (event) => {
                const courseId = event.target.dataset.id;
                const courses = storage.getCourses();
                const course = courses.find(c => c.id == courseId);

                if (course) {
                    modalTitle.textContent = 'Editar Curso';
                    document.getElementById('course-id').value = course.id;
                    document.getElementById('course-name').value = course.nombre;
                    document.getElementById('course-instructor').value = course.instructor;
                    document.getElementById('course-duration').value = course.duracion;
                    openModal();
                }
            });
        });

        // Añadir event listeners a los botones de eliminar
        document.querySelectorAll('.btn-delete').forEach(button => {
            button.addEventListener('click', (event) => {
                const courseId = event.target.dataset.id;
                if (confirm('¿Estás seguro de que quieres eliminar este curso?')) {
                    let courses = storage.getCourses();
                    courses = courses.filter(c => c.id != courseId);
                    storage.saveCourses(courses);
                    renderCoursesTable();
                }
            });
        });
    };
});
