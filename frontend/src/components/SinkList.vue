<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Sink List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index === currentIndex }"
          v-for="(sink, index) in sinks"
          :key="index"
          @click="setActiveSink(sink, index)"
        >
          {{ sink.description }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentSink">
        <h4>Sink</h4>
        <div>
          <label><strong>Description:</strong></label> {{ currentSink.description }}
        </div>
        <div>
          <label><strong>Index:</strong></label> {{ currentSink.index }}
        </div>
        <div>
          <label><strong>Name:</strong></label> {{ currentSink.name }}
        </div>
        <div>
          <label><strong>State:</strong></label> {{ currentSink.state }}
        </div>
        <div>
          <label><strong>Volume:</strong></label> Left: {{ currentSink.volume['front-left'].value_percent }} Right: {{ currentSink.volume['front-right'].value_percent }}
        </div>
        <div>
          <button class="btn btn-outline-secondary" type="button" @click="play">Play</button>
          <button class="btn btn-outline-secondary" type="button" @click="stop">Stop</button>
          <button class="btn btn-outline-secondary" type="button" @click="volume(-5)">Volume -</button>
          <button class="btn btn-outline-secondary" type="button" @click="volume(5)">Volume +</button>
          <button class="btn btn-outline-secondary" type="button" @click="mute">Mute</button>
          <button class="btn btn-outline-secondary" type="button" @click="unmute">Unmute</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeviceService from "../services/DeviceService";

export default {
  name: "sink-list",
  data() {
    return {
      sinks: ['No sinks available'],
      currentSink: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveSinks() {
      DeviceService.getAllSinks()
          .then(response => {
            this.sinks = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    play() {
      DeviceService.play(this.currentSink.name)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    stop() {
      DeviceService.stop(this.currentSink.name)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    volume(volume) {
      let currentVolume = parseInt(this.currentSink.volume['front-left'].value_percent);
      this.currentSink.volume['front-left'].value_percent = (currentVolume + volume) + '%';
      this.currentSink.volume['front-right'].value_percent = (currentVolume + volume) + '%';
      DeviceService.volume(this.currentSink.name, currentVolume + volume)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    mute() {
      DeviceService.mute(this.currentSink.name)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    unmute() {
      DeviceService.unmute(this.currentSink.name)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    setActiveSink(sink, index) {
      this.currentSink = sink;
      this.currentIndex = index;
    },
  },
  mounted() {
    this.retrieveSinks();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 1000px;
  margin: auto;
}
</style>
