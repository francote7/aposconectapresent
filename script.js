// La configuración de 'tailwind.config' fue movida al index.html para asegurar la carga correcta de los estilos.

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa los iconos de Lucide (los convierte de data-lucide a SVG)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Función de impresión para generar PDF (llama al diálogo de impresión del navegador)
    const handlePrint = () => {
        window.print();
    };

    // Asigna la función de impresión a los botones
    const printButtonHeader = document.getElementById('printButtonHeader');
    const printButtonFooter = document.getElementById('printButtonFooter');

    if (printButtonHeader) {
        printButtonHeader.addEventListener('click', handlePrint);
    }
    if (printButtonFooter) {
        printButtonFooter.addEventListener('click', handlePrint);
    }
});