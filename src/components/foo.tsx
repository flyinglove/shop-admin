import { defineComponent, ref } from '@vue/runtime-core'

// export default () => {
//   return (
//         <div>foo jsx</div>
//   )
// }

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const count = ref(0)
    return () => (
        <div>{props.msg}-{count.value}</div>
    )
  }
})
