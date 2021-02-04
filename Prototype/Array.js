Array.prototype.last = function (number) {
    return [this[this.length - number], this.length -= number][0];
}