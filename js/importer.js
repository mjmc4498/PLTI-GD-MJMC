document.getElementById('import-button').addEventListener('click', () => {
    const fileInput = document.getElementById('file-input');
    if (fileInput.files.length === 0) {
        alert('Por favor, selecciona un archivo.');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet);

        // Aquí se procesarían y validarían los datos
        console.log('Datos importados:', jsonData);

        // Guardar cursos en el almacenamiento local
        storage.saveAllCourses(jsonData);
        alert('Cursos importados con éxito al catálogo.');
    };

    reader.readAsArrayBuffer(file);
});
