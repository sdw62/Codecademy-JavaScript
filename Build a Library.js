class Media {
  constructor(title, isCheckedOut, ratings) {
    this._title = '';
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  // Getters 
  
  get title() { 
  	return this._title; 
  }
  
  get isCheckedOut() { 
  	return this._isCheckedOut;
  }
  
  get ratings() { 
  	return this._ratings; 
  }
  
  // Setters
  
  set isCheckedOut(isCheckedOutIn) {
    this.isCheckedOout = isCheckedOutIn; 
  }
  
  // Methods 
  
  toggleCheckOutStatus() { 
  	this._isCheckedOut ? this._isCheckedOut = false : this._isCheckedOut = true; 
  }
  
  getAverageRating() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return this._ratings.reduce(reducer)/this._ratings.length;
  }
  
  addRating(newRating) {
    this._ratings.push(newRating);
  }
}


class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author; 
    this._pages = pages; 
  	} 
  
  // Getters 
  
  get author() {
    return this._author; 
  }
  
  get pages() {
    return this._pages; 
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director; 
    this._runTime = runTime; 
  }
  
  // Getters
  
  get director() { 
  	return this._director; 
  }
  
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist; 
    this._songs = songs; 
  }
  
  // Getters
  
  get artist() { 
  	return this._artist; 
  }
  
  get songs() {
    return this._songs;
  }
  
  // Methods 
  
  shuffle() { 
    let array = this._songs; 
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything._isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus(); 
console.log(speed._isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());

const darkSide = new CD('Pink Floyd', 'The Dark Side of the Moon', ['Speak to Me', 'Breathe (In the Air)', 'On the Run', 'Time', 'The Great Gig in the Sky', 'Money', 'Us and Them', 'Any Colour You Like', 'Brain Damage', 'Eclipse']);

console.log(darkSide.shuffle());