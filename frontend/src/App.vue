<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Pi Controller</router-link>
      <div class="collapse navbar-collapse" id="navbarText">
        <div class="navbar-text px-2">
          <label>Temperature:</label> {{temperature}}&#8451;
        </div>
        <div class="navbar-text px-2">
          <label>Uptime:</label> {{uptime}}
        </div>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import DeviceService from "@/services/DeviceService";

export default {
  name: "app",
  data() {
    return {
      temperature: 0,
      uptime: 0
    };
  },
  methods: {
    getTemperature() {
      DeviceService.getTemperature()
          .then(response => {
            this.temperature = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    getUptime() {
      DeviceService.getUptime()
          .then(response => {
            let date = new Date(0);
            date.setSeconds(response.data);
            this.uptime = date.toISOString().substring(11, 19);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.getTemperature();
    this.getUptime();
  }
};
</script>
