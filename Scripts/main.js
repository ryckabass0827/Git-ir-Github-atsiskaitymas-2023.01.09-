const showContent = id => {
    let contentDivs = document.querySelectorAll('.content');
    for (let div of contentDivs) {
        div.classList.remove('active');
        div.style.display = 'none';
    }
    let selectedDiv = document.getElementById(id);
    selectedDiv.classList.add('active');
    selectedDiv.style.display = 'block';
    let windowDiv = document.getElementById('window');
    windowDiv.classList.remove('hidden');
    let windowContentDiv = document.getElementById('window-content');
    windowContentDiv.innerHTML = selectedDiv.innerHTML;
};
const closeWindow = () => {
    let windowDiv = document.getElementById('window');
    windowDiv.classList.add('hidden');
    let windowContentDiv = document.getElementById('window-content');
    windowContentDiv.innerHTML = '';
};