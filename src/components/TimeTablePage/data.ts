import { reactive, ref } from "vue";

export const data: any = reactive({
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
});

export const months = ref(9);
export const years = ref(2023);
