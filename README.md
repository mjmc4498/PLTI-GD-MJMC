# Portal de Learning & Training Interno (PLTI-GD-MJMC)

Este es un prototipo de un Portal de Learning & Training Interno desarrollado puramente con HTML, CSS y JavaScript, sin dependencias de frameworks de frontend ni de un servidor backend. El proyecto está diseñado para ser ligero, rápido y fácil de desplegar en cualquier servicio de hosting de archivos estáticos.

**Desarrollado por:** [mjmc4498](https://github.com/mjmc4498)
**Repositorio:** [mjmc4498/PLTI-GD-MJMC](https://github.com/mjmc4498/PLTI-GD-MJMC)
**Demo en vivo (GitHub Pages):** [https://mjmc4498.github.io/PLTI-GD-MJMC/](https://mjmc4498.github.io/PLTI-GD-MJMC/)

---

## Características

*   **Interfaz Corporativa Minimalista:** Diseño limpio y profesional con tarjetas redondeadas y animaciones sutiles.
*   **100% Frontend:** No requiere de un backend. Todos los datos se gestionan y almacenan en el navegador del cliente.
*   **Importación de Cursos:** Permite cargar un catálogo de cursos desde un archivo `.xlsx` o `.csv`.
*   **Gestión de Estado Local:** Utiliza `localStorage` para guardar el progreso de los cursos, calificaciones y certificaciones.
*   **Diseño Responsive:** Totalmente adaptable a dispositivos móviles y de escritorio.
*   **Modular y Escalable:** El código está organizado en módulos para facilitar futuras integraciones con APIs o un LMS.

---

## Manual de Instalación y Uso

Este proyecto no requiere de un proceso de instalación complejo, ya que no depende de gestores de paquetes como `npm` o `yarn`.

**Para usar el portal localmente:**

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/mjmc4498/PLTI-GD-MJMC.git
    ```

2.  **Navega al directorio del proyecto:**
    ```bash
    cd PLTI-GD-MJMC
    ```

3.  **Abre el archivo `index.html` en tu navegador:**
    Puedes hacer doble clic en el archivo `index.html` o arrastrarlo a la ventana de tu navegador preferido (Chrome, Firefox, Edge).

---

## Manual del Sistema

### 1. Importar Cursos

La aplicación permite cargar cursos dinámicamente desde un archivo Excel (`.xlsx`) o CSV (`.csv`).

*   **Paso 1:** Haz clic en el botón **"Seleccionar archivo"** en la sección "Importar Cursos".
*   **Paso 2:** Elige un archivo con las columnas requeridas (por ejemplo: `nombre`, `instructor`, `duracion`, `recursos`).
*   **Paso 3:** Haz clic en el botón **"Importar"**. Los cursos se cargarán en el catálogo y se mostrarán en el panel principal.

### 2. Navegación

El menú lateral izquierdo permite navegar entre las diferentes secciones del portal:

*   **Mis cursos:** Muestra los cursos en los que estás inscrito y tu progreso.
*   **Catálogo:** (Funcionalidad futura) Listará todos los cursos disponibles.
*   **Historial de certificaciones:** (Funcionalidad futura) Mostrará los certificados que has obtenido.
*   **Perfil:** (Funcionalidad futura) Permitirá gestionar tu información de usuario.

---

## Cómo Activar GitHub Pages

Para que la demo en vivo funcione, necesitas activar GitHub Pages en la configuración de tu repositorio.

1.  **Ve a tu repositorio en GitHub:**
    [https://github.com/mjmc4498/PLTI-GD-MJMC](https://github.com/mjmc4498/PLTI-GD-MJMC)

2.  **Haz clic en la pestaña "Settings" (Configuración).**

3.  **En el menú lateral izquierdo, selecciona "Pages".**

4.  **En la sección "Build and deployment", bajo "Source", selecciona "Deploy from a branch".**

5.  **Asegúrate de que la rama seleccionada sea `main` (o `master`) y la carpeta sea `/ (root)`.**

6.  **Haz clic en "Save".**

Después de unos minutos, tu portal estará disponible en la URL: `https://mjmc4498.github.io/PLTI-GD-MJMC/`
