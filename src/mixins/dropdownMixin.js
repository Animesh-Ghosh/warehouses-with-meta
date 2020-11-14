import DropdownMenu from '@/components/DropdownMenu.vue'

export default {
	components: {
    DropdownMenu,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    }
  },
}
