function cons(value, list) {
    return function(current) {
        return current ? value : list;
    }
}

module.exports = cons;