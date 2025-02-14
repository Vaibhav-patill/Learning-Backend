function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

module.exports = {
    addfn:add, //rename function
    sub
};

exports.multiply=(a,b)=>a*b; //another way to export module