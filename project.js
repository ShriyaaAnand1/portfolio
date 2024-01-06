function openProject(file, thumbnail) {
    const modal = document.getElementById('modal');
    const iframe = document.getElementById('project-iframe');
    iframe.src = file;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    const iframe = document.getElementById('project-iframe');
    iframe.src = '';
    modal.style.display = 'none';
}

function closeWithButton() {
    closeModal();
}

