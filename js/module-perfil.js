import * as storage from './storage.js';

function resizeImage(file, maxWidth, maxHeight, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            let { width, height } = img;

            if (width > height) {
                if (width > maxWidth) {
                    height *= maxWidth / width;
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width *= maxHeight / height;
                    height = maxHeight;
                }
            }

            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            callback(canvas.toDataURL('image/jpeg', 0.7)); // Comprimir a JPEG
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}


export function renderProfile() {
    // ... (lógica de renderizado existente) ...

    const changePicButton = document.getElementById('change-pic-button');
    const picInput = document.getElementById('pic-input');

    changePicButton.addEventListener('click', () => picInput.click());

    picInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        resizeImage(file, 200, 200, (dataUrl) => {
            const profile = storage.getUserProfile(); // Asumiendo que esta función existe
            profile.picture = dataUrl;
            storage.saveUserProfile(profile); // Asumiendo que esta función existe
            document.getElementById('profile-pic').src = dataUrl;
        });
    });

    console.log("Perfil module loaded and rendered.");
}
