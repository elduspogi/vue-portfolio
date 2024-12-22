import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faLaravel, faReact, faJsSquare, faHtml5, faCss3Alt, faPhp, faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faLaravel, faReact, faPython, faPhp, faFacebook, faGithub, faInstagram, faEnvelope, faJsSquare, faHtml5, faCss3Alt, faArrowLeft)

const app = createApp(App)
            .use(router)
            .component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');