<template>
<div class="m-auto">
  <h1 class="text-center text-2xl my-2">Vue calendar</h1>
  <section class="mx-2 flex justify-between">
<h2 class="font-bold" >{{ currentMonthName }}</h2>
<h2 class="font-bold" >{{ currentYear }}</h2>
  </section> 
  <section class="flex my-2">
      <p class="text-center" 
      style="width: 14.28%" 
      v-for="day in days" :key="day" >{{ day }}</p>
  </section>
  <section class="flex flex-wrap">
       <p class="text-center"  style="width: 14.28%" 
       v-for="num  in startDay()" :key="num"></p>

      <p class="text-center"  style="width: 14.28%"
       v-for="num  in daysInMonth()" :key="num" :class="currentDateClass(num)" >{{ num }}</p>
  </section> 
  <section class="flex justify-between my-3">
      <button class="p-x2 border rounded" @click="prev">Prev</button>
        <button class="p-x2 border rounded" @click="next">Next</button>

  </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentDate: new Date().getUTCDate(),
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth(),
            days: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Ses"],
        }
    },
    methods: {
        daysInMonth(){
               
                return new Date(this.currentYear, this.currentMonth+1, 0).getDate(); 
        },
        startDay() {
            return new Date(this.currentYear, this.currentMonth, 1).getDay();
        }
        , 
        next(){
            if(this.currentMonth === 11){
                this.currentMonth = 0;
                this.currentYear++;
            } else {
                this.currentMonth++;
            }
            
        },
        prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currentDateClass(num){
        const calendarFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString();
        const currentFullDate = new Date().toDateString();
            return currentFullDate === calendarFullDate ? "text-red-600 border rounded-full h-7 w-5 flex items-center justify-center" : "";
    }
    },

    computed: {
        currentMonthName(){
            return new Date(this.currentYear,
        this.currentMonth).toLocaleString("default", { month: "long" });
        }
    },
}
</script>

<style>
 
</style>