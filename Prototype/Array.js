Array.prototype.last = function (number = 1) {
    return [this[this.length - number - 1], this.length -= number + 1][0];
}