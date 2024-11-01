import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useActivityStore = defineStore('activity', ()=>{

  const is_ePin_generated = ref(false)
  const is_logged_in_as_student = ref(false)
  const is_logged_in_as_teacher = ref(false)

  watch(() => is_logged_in_as_student.value, (x)=>{
    if (x) {
      is_logged_in_as_teacher.value = false
    }
  })

  watch(() => is_logged_in_as_teacher.value, (x)=>{
    if (x) {
      is_logged_in_as_student.value = false
    }
  })

  return {
    is_ePin_generated,
    is_logged_in_as_student,
    is_logged_in_as_teacher
  }
});
