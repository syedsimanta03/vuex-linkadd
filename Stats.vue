<template>
  <div class="hello">
    <h1>Differen component</h1>
    
    <p>There are currently {{ countLinks }} links</p>
    <button @click= "removeAllLinks">Remove All Links</button>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Stats',

  data() {
    return {
      msg: ''
    }
  },

  computed: {
    ...mapGetters([
      'countLinks',
    ])
  },

    methods: {
      ...mapMutations([
        'REMOVE_ALL', //also supports payload `this.nameOfMutation(amount)` 
      ]),

      ...mapActions([
        'removeAll', //also supports payload `this.nameOfMutation(amount)` 
      ]),

      removeAllLinks() {
      this.removeAll().then(() => {
        this.msg = 'They have been removed'
      })

    }
}

}
</script>


<style scoped>

.hello {
  display: flex;
  flex-direction: column;
}

h1 {
  margin: 20px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
    padding: 10px;
    margin-top: 30px;
    width: 100%;
    background: none;
    border: 1px solid lightgray;
    outline: 0;
    cursor: pointer;
}
</style>