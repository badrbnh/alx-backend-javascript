import Building from "./5-building";

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        self._sqft = super(sqft)
        self._floors = floors
    }
}