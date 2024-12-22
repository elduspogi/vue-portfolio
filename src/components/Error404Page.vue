<template>
    <h1>Oops!</h1>
    <h2>Error 404 | Not Found</h2>
    <p>Sorry! Should have caught this on development.</p>

    <div class="back-container">
        <RouterLink to="/" class="back-link">
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="back-arrow" />
            Back To Home
        </RouterLink>
    </div>
</template>

<style scoped>
.back-container {
    padding: 20px 5px;
}

.back-arrow {
    margin-right: 5px;
}

.back-arrow {
    transition: transform 0.5s ease;
}

.back-link:hover .back-arrow {
    transform: translateX(-5px);
}
</style>