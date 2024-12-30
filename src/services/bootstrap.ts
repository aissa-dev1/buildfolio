import { buildApiUrl } from "@/utils/build-api-url";
import axios from "axios";

export class BootstrapService {
  async get(): Promise<string> {
    const response = await axios.get(buildApiUrl("/bootstrap"));
    return response.data;
  }

  async post(): Promise<string> {
    const response = await axios.post(buildApiUrl("/bootstrap"));
    return response.data;
  }
}
