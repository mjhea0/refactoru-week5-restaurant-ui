// Generated by CoffeeScript 1.6.3
// refactured by Michael Herman

(function() {

  var Customer, Drink, FoodItem, Menu, Order, Plate, Restaurant
  var avocado, bean, brownRice, burrito, ice, lemon, margarita, kevin 
  var myOrder, myResturant, restaurantMenu, salt, tequilla, tomato, water;

  FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
    var toString;
    this.name = name;
    this.calories = calories;
    (vegan === true) ? this.vegan = "vegan" : this.vegan = "not vegan";
    (glutenFree === true) ? this.glutenFree = "gluten-free" : this.glutenFree = "not gluten-free";
    (citrusFree === true) ? this.citrusFree = "citrus" : this.citrusFree = "not citrus";
    this.toString = toString = function() {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1) + " have (has) " + this.calories + " calories. They are (it is) " + this.vegan + ", " + this.citrusFree + " and " + this.glutenFree + ".";
    };
  };

  Drink = function(name, description, items) {
    this.name = name;
    this.description = description;
    this.items = items;
    return $('<div class="drink">{name}</div>'.supplant(myFoodItem));
  };

  Drink.prototype.toString = function() {
    var i, itemsArr, itemsToStringArr;
    itemsArr = [];
    i = 0;
    while (i < this.items.length) {
      itemsArr.push(this.items[i].name);
      i++;
    }
    itemsToStringArr = [];
    i = 0;
    while (i < this.items.length) {
      itemsToStringArr.push(this.items[i].toString());
      i++;
    }
    return this.name.charAt(0).toUpperCase() + this.name.slice(1) + " are " + this.description + ".\nThey are made of " + itemsArr.join(" and ") + ".\n" + itemsToStringArr.join("\n");
  };

  Plate = function(name, description, price, items) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.items = items;
  };

  Plate.prototype.toString = function() {
    var i, itemsArr, itemsToStringArr;
    itemsArr = [];
    i = 0;
    while (i < this.items.length) {
      itemsArr.push(this.items[i].name);
      i++;
    }
    itemsToStringArr = [];
    i = 0;
    while (i < this.items.length) {
      itemsToStringArr.push(this.items[i].toString());
      i++;
    }
    return this.name.charAt(0).toUpperCase() + this.name.slice(1) + " is a " + this.description + ".\nIt costs $" + this.price + " and is made of " + itemsArr.join(" and ") + ".\n" + itemsToStringArr.join("\n");
  };

  Plate.prototype.isVegan = function() {
    var i;
    i = 0;
    while (i < this.items.length) {
      if (this.items[i].vegan === "non-vegan") {
        return false;
      }
      i++;
    }
    return true;
  };

  Plate.prototype.isGlutenFree = function() {
    var i;
    i = 0;
    while (i < this.items.length) {
      if (this.items[i].glutenFree === "gluten-free") {
        return false;
      }
      i++;
    }
    return true;
  };

  Plate.prototype.isCitrusFree = function() {
    var i;
    i = 0;
    while (i < this.items.length) {
      if (this.items[i].citrusFree === "citrus") {
        return false;
      }
      i++;
    }
    return true;
  };

  Order = function(plates) {
    return this.plates = plates;
  };

  Order.prototype.toString = function() {
    var i, platesArr, platesToStringArr;
    platesArr = [];
    i = 0;
    while (i < this.plates.length) {
      platesArr.push(this.plates[i].name);
      i++;
    }
    platesToStringArr = [];
    i = 0;
    while (i < this.plates.length) {
      platesToStringArr.push(this.plates[i].toString());
      i++;
    }
    return "This order contains " + this.plates.length + " plates: " + platesArr.join(" ") + ".\n" + platesToStringArr.join("\n\n");
  };

  Menu = function(plates) {
    return this.plates = plates;
  };

  Menu.prototype.toString = function() {
    var i, platesArr, platesToStringArr;
    platesArr = [];
    i = 0;
    while (i < this.plates.length) {
      platesArr.push(this.plates[i].name);
      i++;
    }
    platesToStringArr = [];
    i = 0;
    while (i < this.plates.length) {
      platesToStringArr.push(this.plates[i].toString());
      i++;
    }
    return "The menu contains " + this.plates.length + " plates: " + platesArr.join(" ") + ".\n" + platesToStringArr.join("\n\n");
  };

  Restaurant = function(name, description, menu) {
    this.name = name;
    this.description = description;
    this.menu = menu;
    return this;
  };

  Restaurant.prototype.toString = function() {
    return "This is a " + this.description + " restaurant called " + this.name + ".\n" + this.menu.toString() + ".";
  };

  Customer = function(dietaryPreference) {
    return this.dietaryPreference = dietaryPreference;
  };

  Customer.prototype.toString = function() {
    return "This customer is: " + this.dietaryPreference + ". Watch out!\n";
  };

  kevin = new Customer("low-carb");
  console.log(kevin.toString());

  beans = new FoodItem("beans", 100, true, true, true);
  brownRice = new FoodItem("brownRice", 60, true, true, true);
  avocados = new FoodItem("avocados", 80, true, true, true);
  tomatos = new FoodItem("tomatos", 600, true, true, true);

  lemons = new FoodItem("lemons", 20, true, true, false);
  water = new FoodItem("water", 0, true, true, true);
  salt = new FoodItem("salt", 0, true, true, true);
  ice = new FoodItem("ice", 0, true, true, true);
  tequilla = new FoodItem("tequilla", 100, true, true, true);

  margarita = new Drink("margaritas", "tequilla fun", [lemons, water, salt, ice, tequilla]);
  console.log("----- Margirata -----")
  console.log(margarita.toString());

  burrito = new Plate("burrito", "goodness wrapped in a tortilla", 8, [beans, brownRice, avocados, tomatos]);
  console.log("----- Burrito -----")
  console.log(burrito.toString());

  restaurantMenu = new Menu([margarita, burrito]);
  console.log("----- Menu -----")
  console.log(restaurantMenu.toString());

  myOrder = new Order([margarita, burrito]);
  console.log("----- My Order -----")
  console.log(myOrder.toString());

  myResturant = new Restaurant("TacoVille", "don't eat here", restaurantMenu);
  console.log("----- My Restaurant -----")
  console.log(myResturant.toString());

}).call(this);