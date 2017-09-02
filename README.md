## Calculator-ASAP
A simple standard Calculator based on classic web stack

### Stack Used
- JavaScript
- CSS3
- HTML

### Description
This projecct, Calculator-As soon as possible, is an ideal learning curve for beginners. It is simple and straightforward. Only the bare minimum of JavaScirpt has been used to make it at least as functional as any basic calculator.

### How-to
the usage is no different than any mathematical expression! Operataor between operands. That's it!
1. Enter a number (first operand)
2. Select an operator (+, -, / or *)
3. (Screen clears) Enter another number. i.e. second operand.
4. Repeat Steps 1,2 and 3 or select Evaluate (=).

### Decode
Wanna know how it works? Let's decode.

- There's a variable (called buffer) of string type which gets appended by the value entered on screen (i.e. HTML input tag)
- And then there's a magic function called eval(). It eats a string! Literally, an operator sandwiched between a couple of operands. And throws out the result of that expression

```javascript
function result(){
    buffer += document.getElementById("screen").value;    
    document.getElementById("screen").value = eval(buffer);
}
```
That's it! That's pretty much the pump of it. Remaining JS is to do event handling. That is, to append users' actions to the buffer.

### Design
I've kept the cascading style sheet minimal. CSS grids has been used to craft out buttons of the calculator.

![snap of calculatorASAP](https://github.com/ankitrai96/calculator-ASAP/blob/master/calculator.png)
