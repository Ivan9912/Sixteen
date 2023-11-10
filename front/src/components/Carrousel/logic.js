export const Animation = () => {
    const shimpgElement = document.querySelector('.animpg');
    shimpgElement.classList.remove('shimpg');
    shimpgElement.classList.remove('after:animate-shimmer-pg');
    void shimpgElement.offsetWidth; // Este paso fuerza un reflow, reiniciando la animación
    shimpgElement.classList.add('shimpg');
    shimpgElement.classList.add('after:animate-shimmer-pg');
};