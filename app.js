//ES5 Object Declare old way
//--Example-01
var name = 'cyber firebug';
var obj = { 
    name : name
}
console.log(obj);


//Using Es6 for object value declear
//--Example-02
var name = 'Naim';
var obj = {
    name
}
console.log(obj);


//--Example-03
var n = 'name';
var obj = {
    [n] : "Borno",
    course : "Bsc"
}
console.log(obj);
console.log(obj.name);
console.log(obj.course);


//--Example-04
var n = "student";
var obj = {
    [n + 'Name']:'Banta'
}
console.log(obj);


//--Example-05
var n = 'Student';
var obj = {
    [n+'name'] : 'Banta',
    course: 'Bsc',
    details: function(){
        return `The ${this.Studentname} of the ${this.course} student; `
    }
};
console.log(obj);
console.log(obj.details());


//Es5 Old way of declear function in obj
//--Example-06 
var obj = {
    name : 'Cyber Firebug',
    show : function(){
        return `My channel name is ${this.name}`
    }
};
console.log(obj.show());


//---Using ES6 new way function calling
//--Example-07
var n = 'Student';
var obj = {
    [n+'name'] : 'Banta',
    course: 'Bsc',
    "details show"(){
        return `The ${this.Studentname} is student of ${this.course} `
    }
};
console.log(obj);
console.log(obj["details show"]());


//--Example-08
var name = "Cyber Firebug";
var course = "Bsc";
function student(name,course) {
    return {name,course};
};
console.log(student(name,course));


//--Example-09
var fname = "Cyber";
var lname = "Firebug";
var course = "Bsc";
function student(fname,lname,course) {
    var fullname = fname + lname;
    return {fullname,course};
};
console.log(student(fname,lname,course));


//--Single single property value show in object
//--Example-10
var fname = "Cyber";
var lname = "Firebug";
var course = "Bsc";
function student(fname,lname,course) {
    var fullname = fname + lname;
    return {fullname,course};
};
var objValue = student(fname,lname,course);
console.log(objValue.fullname);
console.log(objValue.course);
