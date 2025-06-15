<script>
export default {
    data() {
        return {
            experiences: [
								{
                    company: "Cambridge University Press & Assessment",
                    position: "Junior Software Engineer",
                    acronym: 'CU',
                    duration: 'June 2025 - Present',
                },
                {   
                    company: "Domino's Pizza",
                    position: "Shift Manager",
                    acronym: 'DP',
                    description: 'Supervised daily store operations, handled customer inquiries and complaints, managed a team of staff, and oversaw inventory control and cash management.', 
                    duration: 'August 2024 - October 2024',
                },
                {   
                    company: "BitCreate IT Solutions",
                    position: "Web Developer Intern",
                    acronym: 'BC',
                    description: 'Codes, tests, debugs, documents, implements and maintains a project of the company that uses Laravel, PHP, MySQL, AlpineJS.', 
                    duration: 'April 2024 - July 2024',
                },
                {   
                    company: "McDonald's",
                    position: "Service Crew",
                    acronym: 'MD',
                    description: 'Prepared and cooked food items, and maintained a clean and organized production area according to strict standards and food safety guidelines.', 
                    duration: 'October 2019 - December 2023',
                }
            ]
        }
    }
}
</script>

<template>
    <div class="f-container">
        <div v-for="(experience, index) in experiences" :key="index" class="project-container">
            <a class="project-link" target="_blank">
                <div class="project">
                    <div class="acronym">{{ experience.acronym }}</div>
                </div>
                <div class="details">
                    <div class="title">{{ experience.position }}</div>
                    <div class="title company">{{ experience.company }}</div>
                    <div class="title duration">{{ experience.duration }}</div>
                    <div class="description">{{ experience.description }}</div>

                    <div class="tech-container">
                        <div v-for="(tech, techIndex) in experience.tech" :key="techIndex" class="tech-item">
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

.company {
    font-size: 0.9em;
}

.duration {
    font-size: 0.8em;
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