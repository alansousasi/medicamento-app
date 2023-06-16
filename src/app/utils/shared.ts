import { Constants } from './constants';

export class Shared {
  constructor() {}

  public static initializeWebStorage(): void {

    if (localStorage.getItem(Constants.LABORATORIO_KEY) != null) {
      return;
    }

    localStorage.setItem(Constants.LABORATORIO_KEY, JSON.stringify([]));
    localStorage.setItem(Constants.MEDICAMENTO_KEY, JSON.stringify([]));

  }
}
