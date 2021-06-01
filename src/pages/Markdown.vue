<template>
<div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
<section class="flex m-auto w-10/12 h-screen">
    <article class="w-1/2 border">
    <textarea :v-bind="text" @input="inputUpdate" class="w-full h-full" ref="markdownTextArea"></textarea>
    </article>
    <article v-html="markedText" class="w-1/2 border bg-gray-100">
    </article>
</section>
  </div>
</template>

<script>
import marked from "marked";
import useDebounce from '../utilities/composition/useDebounce';
export default {

// beforeCreate(){
// console.log('before created');
// },
// created() {
//     console.log('created');
// },
// beforeMount() {
//     console.log('before mount');
// },
// mounted() {
//     console.log('mounted');
// },
// beforeUnmount() {
//     console.log('before unmount');
// },
// unmounted() {
//     console.log('unmounted');
// },

beforeUpdate() {
    console.log('before update');
},
updated() {
    console.log('updated');
},

    setup() {
        const {debounce} = useDebounce();
    },
    data(){
        return {
            text: "",
            debounce: "",
        }
    },
    mounted() {
         const {debounce} = useDebounce();
         this.debounce = debounce;
        this.$refs.markdownTextArea.focus();
    },
    computed: {
        markedText(){
            return marked(this.text)
        }
    },
    methods: {
        inputUpdate(e) {
        const task = () => (this.text = e.target.value);
        this.debounce(task, 500)
        },

      
    },

}
</script>

<style>

</style>