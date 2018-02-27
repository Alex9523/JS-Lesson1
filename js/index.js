function discr(a, b, c) {
    document.writeln("Your equation : " + a + "x*x + (" + b + "x) + (" + c + ") = 0");

    let first_x = null;
    let second_x = null;
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    console.log(discriminant);

    if (a == 0) {
        first_x = -c / b;
        return [first_x, second_x];
    }
    else if (discriminant > 0) {
        first_x = (-1 * b) + (Math.sqrt(discriminant));
        second_x = (-1 * b) - (Math.sqrt(discriminant));
        return [first_x, second_x];
    }
    else if (discriminant == 0) {
        first_x = -b / (2 * a);
        return [first_x, second_x];
    }
    else {
        document.writeln("discriminant < 0");
    }
}

let digit_a = prompt('Enter digit a', 0);
let digit_b = prompt('Enter digit b', 0);
let digit_c = prompt('Enter digit c', 0);

var [x, y] = discr(digit_a, digit_b, digit_c);
document.writeln("First x = " + x);
document.write("Second x = " + y);
