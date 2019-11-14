var events = require("events");
var util = require("util");

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person("james");
var mary = new Person("mary");
var mike = new Person("mike");
var people = [james, mike, mary];

people.forEach(function(person) {
  person.on("speak", function(msg) {
    console.log(person.name + " said: " + msg);
  });
});

mike.emit("speak", "hey dudes");
