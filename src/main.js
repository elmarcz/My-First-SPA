import './styles/sass/app.scss';
import {router} from './router/router'

router(window.location.hash)

window.addEventListener('hashchange', () => {
    router(window.location.hash)
})