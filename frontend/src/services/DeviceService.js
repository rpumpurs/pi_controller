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
}

export default new DeviceService();
