import http from "../http-common";

class DeviceService {
  getTemperature() {
    return http.get(`/v1/system/status.json?name=temperature`);
  }

  getUptime() {
    return http.get(`/v1/system/status.json?name=uptime`);
  }

  getAllSinks() {
    return http.get(`/v1/system/status.json?name=audio-sinks`);
  }

  play(sinkName) {
    return http.get(`/v1/system/command?name=play&sink=${sinkName}`);
  }

  stop(sinkName) {
    return http.get(`/v1/system/command?name=stop&sink=${sinkName}`);
  }

  volume(sinkName, volume) {
    return http.get(`/v1/system/command?name=volume&sink=${sinkName}&volume=${volume}`);
  }

  mute(sinkName) {
    return http.get(`/v1/system/command?name=mute&sink=${sinkName}`);
  }

  unmute(sinkName) {
    return http.get(`/v1/system/command?name=unmute&sink=${sinkName}`);
  }

  getBluetoothDevices() {
    return http.get(`/v1/system/status.json?name=bluetooth-devices`);
  }

  bluetooth(command, mac) {
    return http.get(`/v1/system/command?name=bluetooth&command=${command}&mac=${mac}`);
  }

  bluetoothScan() {
    return http.get(`/v1/system/command?name=bluetooth-scan`);
  }
}

export default new DeviceService();
