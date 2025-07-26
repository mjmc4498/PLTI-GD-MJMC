// Módulo para gestionar el almacenamiento en localStorage
const storage = {
    getCourses: () => {
        return JSON.parse(localStorage.getItem('courses')) || [];
    },
    saveCourses: (courses) => {
        localStorage.setItem('courses', JSON.stringify(courses));
    },
    getUserProgress: () => {
        return JSON.parse(localStorage.getItem('userProgress')) || {};
    },
    saveUserProgress: (progress) => {
        localStorage.setItem('userProgress', JSON.stringify(progress));
    }
};
