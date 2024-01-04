export default class Building {
  constructor(sqft) {
    if (Number.isInteger(sqft)) this._sqft = sqft;
    else throw new TypeError('Sqft must be a number');

    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  get sqft() {
    return this._sqft;
  }
}
