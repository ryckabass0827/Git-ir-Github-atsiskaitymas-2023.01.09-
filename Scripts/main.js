function showContent(id) {
    let elements = document.getElementsByClassName('content');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('active');
    }
    let content = document.getElementById(id).innerHTML;
    document.getElementById('window-content').innerHTML = content;
    document.getElementById('window').classList.remove('hidden');
}
function closeWindow() {
    document.getElementById('window').classList.add('hidden');
}