<script setup>
import BadBoys from './BadBoys.vue'
import GetInTouch from './GetInTouch.vue'
import Projects from './ProjectsPage.vue'
import Experience from './ExperiencePage.vue'
import { ref } from 'vue'

const active = ref(null);
const resumePath = '/Aldus-Alaiza.pdf';
const show = (component) => {
    active.value = active.value === component ? null : component;
}

const redirectToResume = () => {
    window.open(`${resumePath}`, '_blank');
}
</script>

<template>
    <!-- <h1 class="animate-el">Hello (你好).</h1> -->
     <h1 class="animate-el">Happy New Year!</h1>

    <h2 class="animate-el">My name is Aldus Alaiza.</h2>
    
    <p class="animate-el">
        I am a software engineer currently based in Laguna, Philippines.
    </p>

    <p class="animate-el">
        Building efficient, scalable, and user-friendly web applications since 2023. Creating numerous projects using this <span @click="show('BadBoys')">bad boys</span>.
    </p>
    
    <p class="animate-el">
        If you have the time, take a visit to my previous 
        <span @click="show('Projects')">projects</span>, or 
        <span @click="show('GetInTouch')">get in touch</span> with me.
    </p>

    <p class="animate-el">
        Here's my <span @click="redirectToResume">resume</span> and <span @click="show('Experience')">work experience</span> for your reference.
    </p>

    <p class="animate-el">
        Trust me, I won't bite. Unless you're a fried chicken. :)
    </p>

    <p class="animate-el">Xie xie.</p>

    <BadBoys v-if="active === 'BadBoys'"></BadBoys>
    <GetInTouch v-if="active === 'GetInTouch'"></GetInTouch>
    <Projects v-if="active === 'Projects'"></Projects>
    <Experience v-if="active === 'Experience'"></Experience>
</template>

<style scoped>
span, .nav-link {
    cursor: pointer;
    position: relative;
    display: inline-block;
}

span:before, .nav-link:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background-color: rgba(91, 91, 91, 0.339);
    transition: height 0.5s ease-out;
    z-index: 1;
}

span:hover:before, .nav-link:hover:before {
    height: 100%;
}

.animate-el {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInBottom 0.6s ease-out forwards;
}

h1.animate-el {
    animation-delay: 0.1s;
}

h2.animate-el {
    animation-delay: 0.3s;
}

p:nth-child(3).animate-el {
  animation-delay: 0.5s;
}
p:nth-child(4).animate-el {
  animation-delay: 0.7s;
}
p:nth-child(5).animate-el {
  animation-delay: 0.9s;
}
p:nth-child(6).animate-el {
  animation-delay: 1.1s;
}
p:nth-child(7).animate-el {
  animation-delay: 1.3s;
}

p:nth-child(8).animate-el {
  animation-delay: 1.5s;
}

p:nth-child(9).animate-el {
  animation-delay: 1.7s;
}

@keyframes fadeInBottom {
    0% {
        opacity: 0%;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>