var userName = localStorage.getItem('userName');
document.getElementById('userName').innerText = 'welcome ' + userName;


function logout() {
    console.log(1);
    localStorage.removeItem('userName')
    location.replace('index.html');
}