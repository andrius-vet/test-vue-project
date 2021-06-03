<template>
    <div class="m-auto">
      <h1 class="text-3xl text-center my-4">Dc Heros changed {{ carsCount }}</h1>
<ul>
  <li class="flex justify-between" v-for="(auto, index) in carNames" v-bind:key="index">
  <div>{{auto.car}} </div>
  <button v-on:click="remove(index)">x</button>
  </li>
</ul>



<form class="mt-10" @submit.prevent="addCar">

<input class="border rounded" v-model="testCar" placeholder="Type Car here" ref="newCarRef"/>
<button class="boarder rounded-lg bg-gradient-to-t from-yellow-300 to-green-300   text-white" >Add Button</button>

</form>
</div>
</template>

<script>
import { computed, onMounted, ref } from  "vue";

export default {
  setup() {
    const newCarRef = ref("");
    const testCar= ref("");
    const   carNames = ref([
        {car : "audi"},
        {car : "VW"},
        {car : "BMW"},
        {car : "Peugeot"},
      ]);

     function remove(index){
       carNames.value = carNames.value.filter((car, i) => i !== index)
   
};

 const carsCount = computed(
   {
    get:() => carNames.value.length
   }); 
 

onMounted(() => {
    newCarRef.value.focus();
  });
 function addCar(){
      if(testCar.value !== " ") {
        carNames.value.push({ car : testCar.value });
      testCar.value= ' ';
      }
      
    };
      return {carNames:carNames, testCar, remove, addCar, newCarRef, carsCount}
  },

 
  
  
  
}
</script>

<style>

</style>