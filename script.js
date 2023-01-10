class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        if(rating === undefined){
            this.rating = "PG"
        }
        else{
            this.rating = rating
        }
    }
    getPG(array){
        var result = [];
        for(var i=0;i<array.length;i++){
            if(array[i].rating === "PG"){
                result.push(array[i])
            }
        }
        return result
    }
}
var movie = new Movie("avenger","Marvel")
var movie1 = new Movie("Deadpool","Disney","PG13")
var movie2 = new Movie("X-man","Disney","PG14")
var arr = [movie,movie1,movie2]
console.log(movie.getPG(arr))

//output
/*[Movie]
0
: 
Movie {title: 'avenger', studio: 'Marvel', rating: 'PG'}
length
: 
1
[[Prototype]]
: 
Array(0)*/

//circle
class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color
    }
    get radiusCircle(){
        return this.radius
    }
    get colorCircle(){
        return this.color
    }
    set radiusCircle(radius){
        this.radius = radius
    }
    set colorCircle(color){
        this.color = color
    }
    gettoString(){
        return [`circle radius = ${this.radius}, circle color = ${this.color}`]
    }
    getareaCircle(){
        return 2 * Math.PI * this.radius * this.radius
    }
    getcircumference(){
        return 2 * Math.PI * this.radius
    }
}
var obj = new Circle(1,"Red")
console.log(obj.gettoString())
console.log(obj.getareaCircle())
obj.radiusCircle = 2
console.log(obj.getcircumference())

//output
/*['circle radius = 1, circle color = Red']
script.js:70 6.283185307179586
script.js:72 12.566370614359172 */

//Write a “person” class to hold all the details.

class Person{
    constructor(name,age,gender,city){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.city = city
    }
    get namePerson(){
        return this.name
    }
    get agePerson(){
        return this.age
    }
    get genderPerson(){
        return this.gender
    }
    get cityPerson(){
        return this.city
    }
    set namePerson(Person){
        this.name = name;
    }
    set agePerson(Person){
        this.age = age;
    }
    set genderPerson(Person){
        this.gender = gender;
    }
    set cityPerson(Person){
        this.city = city;
    }
    getDetails(){
        return `His name is ${this.name} and his age is ${this.age}.He is ${this.gender} lives in ${this.city}`
    }
}
var obj = new Person("Kumar",22,"Male","xxx")
console.log(obj.getDetails())

//output
//His name is Kumar and his age is 22.He is Male lives in xxx

//write a class to calculate the uber price.

class Uber{
    constructor(basefare,costpermin,ridetime,costpermile,ridedistance,bookingfees){
        this.basefare = basefare;
        this.costpermin = costpermin;
        this.ridetime = ridetime;
        this.costpermile = costpermile;
        this.ridedistance = ridedistance;
        this.bookingfees = bookingfees
    }
    get basefareUber(){
        return this.basefare;
    }
    get costperminUber(){
        return this.costpermin;
    }
    get ridetimeUber(){
        return this.ridetime;
    }
    get costpermileUber(){
        return this.costpermile; 
    }
    get ridedistanceUber(){
        return this.ridedistance;
    }
    get bookingfeesUber(){
        return this.bookingfees;
    }
    set basefareUber(basefare){
        this.basefare = basefare;
    }
    set costperminUber(costpermin){
        this.costpermin = costpermin;
    }
    set ridetimeUber(ridetime){
        this.ridetime = ridetime;
    }
    set costpermileUber(costpermile){
        this.costpermile = costpermile;
    }
    set ridedistanceUber(ridedistance){
        this.ridedistance = ridedistance;
    }
    set bookingfeesUber(bookingfees){
        this.bookingfees = bookingfees;
    }

    getuberprice(){
        return (this.basefare + (this.costpermin * this.ridetime)+(this.costpermile * this.ridedistance)+this.bookingfees)
    }

}
var obj = new Uber(150,5,30,17,30,200)

console.log(obj.getuberprice())

//output
//1010

