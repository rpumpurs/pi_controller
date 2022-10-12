<template>
  <DeviceList/>
  <SinkList/>
</template>

<script>
import DeviceList from "@/components/DeviceList";
import SinkList from "@/components/SinkList";
export default {
  name: "index",
  components: {SinkList, DeviceList},
};
</script>