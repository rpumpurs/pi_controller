import http from "../http-common";

class DeviceService {
  getAllSinks() {
    return http.get(`/v1/system/status.json?name=audio-sinks`);
  }
}

export default new DeviceService();
