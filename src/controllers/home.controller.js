import views from '../views/home.html'

export default () => {

    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    // Functions of my html document

    const btnClick = divElement.querySelector('#btnClick')
    btnClick.addEventListener('click', () => {
        alert('Click')
    })

    return divElement;
};