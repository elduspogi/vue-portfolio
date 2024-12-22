<script>
export default {
    data() {
        return {
            texts: [
                {   
                    title: 'OCRVault',
                    acronym: 'OV',
                    description: 'Web-based Document Management System Integrating Optical Character Recognition', 
                    link: 'https://github.com/elduspogi/ocrvault.v2',
                    tech: [
                        { name: 'HTML' },
                        { name: 'CSS' },
                        { name: 'JQuery' },
                        { name: 'Django' },
                        { name: 'MySQL' },
                    ]
                },
                {   
                    title: 'Deeco Electronics', 
                    acronym: 'DE',
                    description: 'E-commerce platform Using Chatbot for Virtual Assistance', 
                    link: 'https://github.com/elduspogi/deeco-electronics',
                    tech: [
                        { name: 'HTML' },
                        { name: 'CSS' },
                        { name: 'JQuery' },
                        { name: 'Django' },
                        { name: 'MySQL' },
                    ]
                },
                {   
                    title: 'Snake Game',
                    acronym: 'SG', 
                    description: 'A Simple Snake Game using Python and Tkinter', 
                    link: 'https://github.com/elduspogi/snake-game',
                    tech: [
                        { name: 'Python' }
                    ]
                },
                {
                    title: 'Portfolio',
                    acronym: 'PF',
                    description: 'A Simple Minimalist Portfolio',
                    link: '',
                    tech: [
                        { name: 'Vue' }
                    ]
                }
            ]
        }
    }
}
</script>

<template>
    <div class="f-container">
        <div v-for="(project, index) in texts" :key="index" class="project-container">
            <a :href="project.link" class="project-link" target="_blank">
                <div class="project">
                    <div class="acronym">{{ project.acronym }}</div>
                </div>
                <div class="details">
                    <div class="title">{{ project.title }}</div>
                    <div class="description">{{ project.description }}</div>

                    <div class="tech-container">
                        <div v-for="(tech, techIndex) in project.tech" :key="techIndex" class="tech-item">
                            <p class="tech-name">{{  tech.name }}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped>
.f-container {
    margin-top: 30px;
}

.project-link {
    display: inline-flex;
    padding-top: 10px;
    max-width: 28em;
    width: 100%;
}

.project-link:hover {
    background-color: rgba(240, 240, 240, 0.383);
    border-radius: 10px;
}

.project {
    padding: 0 10px;
}

.acronym {
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(218, 218, 218, 0.339);
    color: #666;
}

.details {
    margin-left: 10px;
    border-bottom: 1px solid rgba(218, 217, 217, 0.582);
    width: 100%;
    margin-right: 10px;
    padding-bottom: 10px;
}

.title {
    font-size: 1em;
    font-weight: 400;
    padding-bottom: 5px;
    width: 100%;
}

.description {
    font-size: 1em;
    color: #666;
    padding-bottom: 10px;
    font-weight: 300;
    width: 100%;
}

.tech-container {
    display: flex;
}

.tech-item {
    margin: 1px;
}

.tech-name {
    padding: 2px 5px;
    border: 2px solid rgba(218, 217, 217, 0.582);
    border-radius: 10px;
    font-size: 0.6em;
}

.tech-name:hover {
    background-color: rgba(218, 217, 217, 0.582);
}

@media screen and (max-width: 375px) {
    .project {
        padding: 0;
    }
}
</style>