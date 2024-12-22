import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faLaravel, faReact, faJsSquare, faHtml5, faCss3Alt, faPhp, faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faLaravel, faReact, faPython, faPhp, faFacebook, faGithub, faInstagram, faEnvelope, faJsSquare, faHtml5, faCss3Alt)

const app = createApp(App)
            .component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');