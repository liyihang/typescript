var CommerialBank = /** @class */ (function () {
    function CommerialBank(address, name) {
        this.address = "beijing";
        this.name = "yilu";
        this.address = address;
        this.name = name;
    }
    CommerialBank.prototype.load = function () {
        console.log(this.name + "在银行上班");
    };
    return CommerialBank;
}());
var cb = new CommerialBank('bj', '哈哈哈').load();
