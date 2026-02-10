
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
const overlay = document.getElementById('modalOverlay');


openBtn.addEventListener('click', () => {
    overlay.classList.add('active');
});


function closeModal() {
    overlay.classList.remove('active');
}


closeBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);


window.addEventListener('click', (e) => {
    if (e.target === overlay) {
        closeModal();
    }
});



function toggleSwitch(element) {
    element.classList.toggle('active');


    if (element.classList.contains('active')) {
        console.log("Setting Activated");
    } else {
        console.log("Setting Deactivated");
    }
}