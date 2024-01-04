export default class Building {
  constructor(sqft) {
    if (Number.isInteger(sqft)) this._sqft = sqft;
    else throw new TypeError('Sqft must be a number');
  }

  get sqft() {
    return this._sqft;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('evacuationWarningMessage must be overridden by child class');
  }
}
