<template>
  <div class="list row">
    <div class="col-md-12">
      <h4>Bluetooth Scan</h4>
      <button class="btn btn-outline-secondary" type="button" @click="scan">Scan</button>
      <ul class="list-group">
        <li class="list-group-item"
            v-for="(result, index) in scanResults"
            @click="setActiveResult(result, index)"
        >
          {{ result}}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import DeviceService from "../services/DeviceService";

export default {
  name: "bluetooth-scan",
  data() {
    return {
      scanResults: [],
      currentDevice: null,
      currentIndex: -1,
    };
  },
  methods: {
    scan() {
      DeviceService.bluetoothScan()
          .then(response => {
            setTimeout(() => {
              DeviceService.getBluetoothScanResults()
                  .then(response => {
                    this.scanResults = response.data;
                    console.log(response.data);
                  })
                  .catch(e => {
                    console.log(e);
                  });
            }, 10000);

          })
          .catch(e => {
            console.log(e);
          });
    },

    setActiveResult(sink, index) {
      this.currentDevice = sink;
      this.currentIndex = index;
    },
  },
};
</script>