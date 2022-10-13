<template>
  <div class="list row">
    <div class="col-md-6">
      <div class="list row">
        <div class="col-md-10">
          <h4>Bluetooth Device List</h4>
        </div>
        <div class="col-md-2">
          <template v-if="loading">
            <img src="/images/loading.gif" alt="loading"/>
          </template>
          <template v-else>
            <button class="btn btn-outline-secondary" type="button" @click="scan">Scan</button>
          </template>
        </div>
      </div>
      <ul class="list-group">
        <li class="list-group-item"
            :class="{ active: index === currentIndex }"
            v-for="(device, index) in devices"
            @click="setActiveDevice(device, index)"
        >
          {{ device.name}}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentDevice">
        <h4>Sink</h4>
        <div>
          <label><strong>Device:</strong></label> {{ currentDevice.mac }}
        </div>
        <div>
          <label><strong>Name:</strong></label> {{ currentDevice.name }}
        </div>
        <div>
          <label><strong>Connected:</strong></label> {{ currentDevice.connected }}
        </div>
        <div>
          <label><strong>Paired:</strong></label> {{ currentDevice.paired }}
        </div>
        <div>
          <label><strong>Trusted:</strong></label> {{ currentDevice.trusted }}
        </div>
        <div>
          <label><strong>Blocked:</strong></label> {{ currentDevice.blocked }}
        </div>
        <div>
          <button class="btn btn-outline-secondary" type="button" @click="connect">Connect</button>
          <button class="btn btn-outline-secondary" type="button" @click="disconnect">Disconnect</button>
          <button class="btn btn-outline-secondary" type="button" @click="pair">Pair</button>
          <button class="btn btn-outline-secondary" type="button" @click="unpair">Unpair</button>
          <button class="btn btn-outline-secondary" type="button" @click="trust">Trust</button>
          <button class="btn btn-outline-secondary" type="button" @click="untrust">Untrust</button>
          <button class="btn btn-outline-secondary" type="button" @click="block">Block</button>
          <button class="btn btn-outline-secondary" type="button" @click="unblock">Unblock</button>
          <button class="btn btn-outline-secondary" type="button" @click="remove">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import DeviceService from "../services/DeviceService";

export default {
  name: "bluetooth-device-list",
  data() {
    return {
      devices: [],
      currentDevice: null,
      currentIndex: -1,
      loading: false
    };
  },
  methods: {
    retrieveBluetoothDevices() {
      DeviceService.getBluetoothDevices()
          .then(response => {
            this.devices = response.data;

            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    connect() {
      DeviceService.bluetooth('connect', this.currentDevice.mac)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    disconnect() {
      DeviceService.bluetooth('disconnect', this.currentDevice.mac)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    pair() {
      DeviceService.bluetooth('pair', this.currentDevice.mac)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    unpair() {
      DeviceService.bluetooth('cancel-pair', this.currentDevice.mac)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    trust() {
      DeviceService.bluetooth('trust', this.currentDevice.mac)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    untrust() {
      DeviceService.bluetooth('untrust', this.currentDevice.mac)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    block() {
      DeviceService.bluetooth('block', this.currentDevice.mac)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    unblock() {
      DeviceService.bluetooth('unblock', this.currentDevice.mac)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    remove() {
      DeviceService.bluetooth('remove', this.currentDevice.mac)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    scan() {
      DeviceService.bluetoothScan()
          .then(response => {
            this.loading = true;
            setTimeout(() => {
              this.retrieveBluetoothDevices();
              this.loading = false;
            }, 10000);
          })
          .catch(e => {
            console.log(e);
          });
    },

    setActiveDevice(sink, index) {
      this.currentDevice = sink;
      this.currentIndex = index;
    },
  },
  mounted() {
    this.retrieveBluetoothDevices();
  }
};
</script>