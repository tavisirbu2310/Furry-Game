function add(a, b) {
    return a + b;
}

function subtract(a,b) {
    return a-b;

}

var calc={
  add:add,
  subtract:subtract
};

module.exports=calc;