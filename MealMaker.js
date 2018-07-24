const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],

        // Setters

        set appetizers (appetizers) {
            this._appetizers.push(appetizers);
        },
        set mains (main) {
            this._mains.push(main);
        },
        set desserts (dessert) {
            this._desserts.push(dessert);
        },

        // Getters

        get appetizers () {
            return this._appetizers;
        },
        get mains () {
            return this._mains;
        },
        get desserts () {
            return this._desserts;
        }
    },

    // Methods

    get courses () {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        }
    },

    addDishToCourse (courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };

        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse (courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);

        return dishes[randomIndex];
    },

    generateRandomMeal () {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. Your total is $${totalPrice}.`
    }
};


menu.addDishToCourse('appetizers', 'Cobb Salad', 5.00);
menu.addDishToCourse('appetizers', 'Garden Salad', 4.50);
menu.addDishToCourse('appetizers', 'Breadsticks', 3.00);

menu.addDishToCourse('mains', 'Steak', 12.00);
menu.addDishToCourse('mains', 'Tacos', 6.00);
menu.addDishToCourse('mains', 'Meatloaf', 11.50);

menu.addDishToCourse('desserts', 'Vanilla Ice Cream', 3.20);
menu.addDishToCourse('desserts', 'Peach Cobbler', 4.00);
menu.addDishToCourse('desserts', 'Slice of Cake', 5.50);

let meal = menu.generateRandomMeal();
console.log(meal);