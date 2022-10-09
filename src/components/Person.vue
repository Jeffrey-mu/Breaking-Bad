<script setup lang="ts">
import { getPerson } from '~/api'
const props = defineProps<{ id: string }>()
interface perosonModel {
  char_id: number
  name: string
  birthday: string
  occupation: string[]
  img: string
  status: string
  nickname: string
  appearance: number[]
  portrayed: string
  category: string
  better_call_saul_appearance: string[]
}
const peroson = ref<perosonModel>()
const show = ref<boolean>(false)
getPerson(props.id).then((res) => {
  peroson.value = res.data[0]
  show.value = true
})
</script>

<template>
  <div v-if="show && peroson" w-60 b m-5>
    <img :src="peroson.img" alt="" w-60 h-80>
    <div bg="#fff">
      {{ peroson.name }}
    </div>
  </div>
</template>

