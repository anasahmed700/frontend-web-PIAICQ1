var names = ["user1", "user2", "user3", "user4"];
for (var index = 0; index <= names.length; index++) {
    // const element = array[index];
    if (names[index] === "user3") {
        alert(names[index] + " is found at index " + index);
    }
}

var checkCity = "Karachi";
var cleanestCities = ["abc", "xyz"];
var match = "no";

for (var i = 0; i < cleanestCities.length; i++) {
    if (checkCity === cleanestCities[i]) {
        match = "yes";
    }
    if (match === "yes") {
        alert("found!");
    } else {
        alert("not found!");
    }
}