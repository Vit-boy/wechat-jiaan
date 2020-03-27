<template>
  <div id="app">

  </div>
</template>

<script>
import {wxShare} from '../lib/index'

export default {
  name: 'app',
  components: {
    
  },
  mounted(){
    wxShare({})
  }
}
</script>