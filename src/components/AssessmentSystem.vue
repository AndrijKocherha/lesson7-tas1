<template>
    <div class="students-manager__block">
        <div>Система оцінювання</div>
        <select v-model="assessmentType">
            <option value="12">12</option>
            <option value="5">5</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'AssessmentSystem',
    data() {
        return {
            assessmentTypeVal: '12',
        }
    },
    computed: {
        assessmentType: {
            get() {
                return this.assessmentTypeVal
            },
            set(newVal) {
                this.assessmentTypeVal = newVal

                this.changeMarks()
            },
        },
    },
    methods: {
        ...mapActions(['setAssessmentType']),
        changeMarks() {
            this.setAssessmentType(this.assessmentTypeVal)
        },
    },
}
</script>

<style lang="scss" scoped></style>
