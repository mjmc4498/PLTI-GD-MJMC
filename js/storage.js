// Módulo para gestionar el almacenamiento en localStorage
export const storage = {
    // Catálogo completo de cursos
    getAllCourses: () => {
        return JSON.parse(localStorage.getItem('allCourses')) || [];
    },
    saveAllCourses: (courses) => {
        localStorage.setItem('allCourses', JSON.stringify(courses));
    },
    // IDs de los cursos del usuario
    getMyCourseIds: () => {
        return JSON.parse(localStorage.getItem('myCourseIds')) || [];
    },
    saveMyCourseIds: (courseIds) => {
        localStorage.setItem('myCourseIds', JSON.stringify(courseIds));
    },
    // Progreso del usuario en los cursos
    getUserProgress: () => {
        return JSON.parse(localStorage.getItem('userProgress')) || {};
    },
    saveUserProgress: (progress) => {
        localStorage.setItem('userProgress', JSON.stringify(progress));
    },
    // Certificaciones del usuario
    getCertifications: () => {
        return JSON.parse(localStorage.getItem('userCertifications')) || [];
    },
    saveCertifications: (certifications) => {
        localStorage.setItem('userCertifications', JSON.stringify(certifications));
    }
};
