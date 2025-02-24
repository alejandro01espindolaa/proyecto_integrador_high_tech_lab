export class FriendNames {
      constructor() {
        this.name1 = 'Karim';
        this.name2 = 'Uli';
        this.name3 = 'Georgina';
    }

    toString() {
      return `FriendNames { name1: '${this.name1}', name2: '${this.name2}', name3: '${this.name3}' }`;
    } 
}
const printNames = new FriendNames();
console.log(printNames.toString());