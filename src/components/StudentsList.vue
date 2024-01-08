<template>
    <div class="students-list">
        <div class="students-list__title">Список студентів</div>
        <div class="students-list__name-and-sore">
            <div>ПІБ</div>
            <div>Середній бал</div>
        </div>
        <div v-for="student in studentsList" :key="student.id" class="students-list__student">
            <div>{{ student.name }}</div>
            <div>{{ student.averageScore }}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'StudentsList',
    computed: {
        ...mapGetters(['studentsList']),
    },
}
</script>

<style lang="scss" scoped></style>
