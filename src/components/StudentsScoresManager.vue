<template>
    <div class="students-manager">
        <students-list />
        <assessment-system />
        <students-category />
    </div>
</template>

<script>
import StudentsList from './StudentsList.vue'
import AssessmentSystem from './AssessmentSystem.vue'
import StudentsCategory from './StudentsCategory.vue'
export default {
    name: 'StudentsScoresManager',
    components: { StudentsList, AssessmentSystem, StudentsCategory },
}
</script>

<style lang="scss" scoped></style>
