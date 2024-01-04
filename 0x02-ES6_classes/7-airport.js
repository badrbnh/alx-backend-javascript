export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') this._name = name;
    if (typeof name === 'string') this._code = code;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[Object ${this.code}]`;
  }
}
