import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `<div>
      Count is: {{ count }}
      <p-datepicker v-model="date"></p-datepicker>
  </div>`
}