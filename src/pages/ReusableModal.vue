<template>
  <section class="flex flex-wrap w-full"></section>
  <div class="m-auto w-full">
        <h1 class="text-2xl my-5 ">Reusable modal</h1>
        <Modal v-if="isModal1Open" @close="isModal1Open= false">
            <template #title>
               Modal 1
            </template>
             <template #body>
               <p>This is the body slot for modal 1</p>
            </template>
        </Modal>  
        <button @click="isModal1Open = true" class="border rounded px-2 mx-4 bg-blue-500">Modal 1</button>
        <Modal v-if="isModal2Open" @close="isModal2Open= false">
             <template #title>
               Modal 2
            </template>
             <template #body>
               <p>This is the body slot for modal 2</p>
            </template>
        </Modal>  
        <button @click="isModal2Open = true" class="border rounded px-2 mx-4 bg-blue-500">Modal 2</button>
  </div>
</template>

<script>
import Modal from '../components/Modal';
import {ref} from 'vue';
export default {
    components: {Modal},
    setup() {
       const isModal1Open = ref(false); 
       const isModal2Open = ref(false); 
       return {isModal1Open, isModal2Open}

    }
}
</script>

<style>

</style>