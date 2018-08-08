var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering Hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
var ship = new Spacecraft('Hyperdrive');
ship.jumpIntoHyperspace();
var MilleniumFalcom = /** @class */ (function (_super) {
    __extends(MilleniumFalcom, _super);
    function MilleniumFalcom() {
        var _this = _super.call(this, "Hyperdrive") || this;
        _this.cargoContainers = 4;
        return _this;
    }
    MilleniumFalcom.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    };
    return MilleniumFalcom;
}(Spacecraft));
var falcon = new MilleniumFalcom();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is Falcon good for the job? " + (goodForTheJob(falcon) ? 'Yes' : 'No'));
