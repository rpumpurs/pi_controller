<template>
  <div class="mb-3">
    <SinkList/>
  </div>
  <div class="mb-3">
    <DeviceList/>
  </div>
</template>

<script>
import SinkList from "@/components/SinkList.vue";
import DeviceList from "@/components/BluetoothDeviceList.vue";
export default {
  name: "index",
  components: {SinkList, DeviceList},
};
</script>