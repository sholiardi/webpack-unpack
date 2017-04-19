require('./style.css');

var GuestList = require('./guestList.js');

module.exports = function() {
    var ul = document.createElement('ul');
    GuestList.map(function(guest) {
        var name = document.createTextNode(guest.name);
        var li = document.createElement('li');
        li.appendChild(name);
        ul.appendChild(li);
    });
    document.getElementById('list').appendChild(ul);
};
