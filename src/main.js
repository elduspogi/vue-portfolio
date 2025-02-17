import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faLaravel, faReact, faJsSquare, faHtml5, faCss3Alt, faPhp, faFacebook, faGithub, faInstagram, faLinkedin, faJava, faVuejs, faBootstrap, faNodeJs, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowLeft, faDatabase } from '@fortawesome/free-solid-svg-icons'



library.add(faLaravel, faReact, faPython,
            faPhp, faFacebook, faGithub,
            faInstagram, faEnvelope, faJsSquare, 
            faHtml5, faCss3Alt, faArrowLeft, 
            faLinkedin, faJava, faVuejs, faBootstrap, faNodeJs, faGitAlt, faDatabase)

const app = createApp(App)
            .use(router)
            .component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');