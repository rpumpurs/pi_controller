<template>
  <DeviceList/>
  <SinkList/>
</template>

<script>
import DeviceList from "@/components/DeviceList.vue";
import SinkList from "@/components/SinkList.vue";
export default {
  name: "index",
  components: {SinkList, DeviceList},
};
</script>