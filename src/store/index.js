import { createStore } from 'vuex'
import { studentsList } from '@/constants/students'
export default createStore({
    state: {
        assessmentType: null,
        categoryType: null,
    },
    getters: {
        studentsList: (state) => {
            let comStudenstLit = JSON.parse(JSON.stringify(studentsList))
            console.log('comStudenstLit')
            console.log(comStudenstLit)
            console.log('state.categoryType')
            console.log(state.categoryType)
            if (state.categoryType !== null) {
                comStudenstLit = comStudenstLit.filter((student) => student.category === state.categoryType)
            }
            if (state.assessmentType === '5') {
                comStudenstLit = comStudenstLit.map((student) => {
                    return {
                        ...student,
                        averageScore: Math.floor(student.averageScore / 2),
                    }
                })
            }
            return comStudenstLit
        },
    },
    mutations: {
        changeAssessmentType(state, type) {
            state.assessmentType = type
        },
        cahngeCategory(state, category) {
            state.categoryType = category
        },
    },
    actions: {
        setAssessmentType({ commit }, type) {
            commit('changeAssessmentType', type)
        },
        setStuentCategogy({ commit }, categoty) {
            commit('cahngeCategory', categoty)
        },
    },
})
