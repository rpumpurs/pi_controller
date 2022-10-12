<template>
  <DeviceList/>
  <SinkList/>
</template>

<script>
import DeviceList from "@/components/BluetoothDeviceList.vue";
import SinkList from "@/components/SinkList.vue";
export default {
  name: "index",
  components: {SinkList, DeviceList},
};
</script>