<template>
    <div>
        <listerProjects />
    </div>
</template>

<script>
import listerProjects from './components/listerProjects.vue';
import projects from './components/projects.vue';
export default {
    name: 'App',
    components: {
        
        listerProjects
    }
}
</script>