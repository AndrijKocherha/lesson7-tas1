<template>
    <students-scores-manager />
</template>

<script>
import StudentsScoresManager from './components/StudentsScoresManager.vue'
import { studentsList } from './constants/students'
export default {
    name: 'App',
    components: { StudentsScoresManager },
    beforeMount() {
        studentsList.forEach((student) => {
            let categoty
            if (student.averageScore >= 10) categoty = 'exellent'
            else if (student.averageScore >= 8) categoty = 'good'
            else if (student.averageScore >= 6) categoty = 'triple'
            else categoty = 'binary'
            student.category = categoty
        })
    },
}
</script>

<style lang="scss">
@import './assets/style';
</style>
