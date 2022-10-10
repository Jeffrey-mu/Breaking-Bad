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
// api 异常
const hide = ['14', '39']
const peroson = ref<perosonModel>()
const show = ref<boolean>(false)
getPerson(props.id).then((res) => {
  peroson.value = res.data[0]
  show.value = true
})
</script>

<template>
  <div v-if="show && peroson && !hide.includes(id)" w-70 h-90 m-5 b="25px #111" box-shadow="4px 4px 5px 10px #333">
    <img :src="peroson.img" alt="" w-60 h="100%">
    <div>
      {{ peroson.name }}
    </div>
  </div>
</template>

<style>
</style>
