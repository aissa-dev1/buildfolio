import { BootstrapService } from "./bootstrap";
import { TranslationService } from "./translation";

class Service {
  readonly bootstrap = new BootstrapService();

  /**@deprecated */
  readonly translation = new TranslationService();
}

export const service = new Service();
