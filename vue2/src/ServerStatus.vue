<template>
  <div>
    <p>Server Status: {{serverStatus}}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      serverStatus: 'Critical',
    }
  },
  methods: {
    changeStatus() {
      this.serverStatus = 'Normal';
    }
  },
}
</script>
