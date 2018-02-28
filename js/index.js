function discr(a, b, c) {
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    return discriminant;
}

function checkDiscr(discriminant ,a ,b, c)
{
    let firstX;
    let secondX;
    if (discriminant > 0) 
    {
        firstX = ((-1 * b) + (Math.sqrt(discriminant)))/ (2*a);
        secondX = ((-1 * b) - (Math.sqrt(discriminant)))/ (2*a);
        return [firstX, secondX];
    }
    else if (discriminant === 0) 
    {
        firstX = -b / (2 * a);
        return [firstX];//вертає наші корені рівнняня
    }
        document.write("discriminant < 0");
        return null;
   
}

//вводимо числа з клавіатури
let digitA = prompt('Enter digit a', 0);
let digitB = prompt('Enter digit b', 0);
let digitC = prompt('Enter digit c', 0);
let d = discr(digitA, digitB, digitC);
let [x  ,y] = checkDiscr(d,digitA, digitB, digitC);
document.write("First x = " + x);
document.write("Second x = " + y);
