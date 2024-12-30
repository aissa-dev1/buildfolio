import { buildApiUrl } from "@/utils/build-api-url";
import axios from "axios";

/**
 * @deprecated
 * This service is not currently in use
 */
export class TranslationService {
  async get(lang: string): Promise<any> {
    const response = await axios.get(buildApiUrl(`/translation?lang=${lang}`));
    return response.data;
  }
}
