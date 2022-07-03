</> Javascript Object Literals

</> Description: Object Literal<br>
In plain English, an object literal is a comma-separated list of name-value pairs inside of curly braces.
Those values can be properties and functions. Here’s a snippet of an object literal with one property and one function.<br>

var greeting = {<br>
    fullname: "Michael Jackson",<br>
    greet: (message, name) => {<br>
        console.log(message + " " + name + "!!");<br>
    }<br>
};<br>


</> Output:<br>
//log fullname<br>
console.log(greeting.fullname);<br>
//call greet function<br>
greeting.greet("Greeting", greeting.fullname);<br>
---------------output----------------<br>
Michael Jackson<br>
Greeting Michael Jackson!!<br>
