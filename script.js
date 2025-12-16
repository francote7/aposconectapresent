document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa los iconos de Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Lógica de Pestañas (Tabs)
    const setupTabs = () => {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        if (tabButtons.length === 0) return;

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remover clase activa de todos los botones
                tabButtons.forEach(btn => {
                    btn.classList.remove('active-tab', 'text-orange-600', 'border-orange-500');
                    btn.classList.add('text-gray-500', 'border-transparent');
                });

                // Añadir clase activa al botón clickeado
                button.classList.add('active-tab', 'text-orange-600', 'border-orange-500');
                button.classList.remove('text-gray-500', 'border-transparent');

                // Ocultar todos los contenidos
                tabContents.forEach(content => {
                    content.classList.add('hidden');
                    content.classList.remove('block');
                });

                // Mostrar el contenido objetivo
                const targetId = button.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.remove('hidden');
                    targetContent.classList.add('block');
                    // Reinicializar iconos si es necesario al mostrar
                    lucide.createIcons();
                }
            });
        });
    };

    setupTabs();

    // 3. Función de impresión
    const handlePrint = () => {
        window.print();
    };

    const printButtonHeader = document.getElementById('printButtonHeader');
    if (printButtonHeader) {
        printButtonHeader.addEventListener('click', handlePrint);
    }
});