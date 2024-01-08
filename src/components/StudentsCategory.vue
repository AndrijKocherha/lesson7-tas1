<template>
    <div>
        <div class="students-manager__block">
            <div>категорія</div>
            <select v-model="studentCategoty">
                <option value="exellent">Відмінник</option>
                <option value="good">Хорошист</option>
                <option value="triple">Трійочник</option>
                <option value="binary">Двійочник</option>
            </select>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'StudentsCategory',
    data() {
        return {
            studentCategotyVal: null,
        }
    },
    computed: {
        studentCategoty: {
            get() {
                return this.studentCategotyVal
            },
            set(newCategory) {
                this.studentCategotyVal = newCategory
                this.setNewStuentCategogy()
            },
        },
    },
    methods: {
        ...mapActions(['setStuentCategogy']),
        setNewStuentCategogy() {
            this.setStuentCategogy(this.studentCategoty)
        },
    },
}
</script>

<style lang="scss" scoped></style>
