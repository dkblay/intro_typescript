function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { label: "Size 10 Object" };
printLabel(myObj);



interface LabelledValue {
    label: string;
}

function printLabel2(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj2: LabelledValue = { label: "Size 10 Object" };
printLabel(myObj);


// Inteface for function types

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    // Implementation goes here
    return true;
}


//////////////////////
interface Beverage {
    description: string;
    cost(): number;
    hasMilk?: boolean;
}

function makeCoffee(bev: Beverage): void {
    console.log('Dark Roast Coffee is read!!')
}

let darkRoast = {
    description: 'Dark Roast',
    cost: () => {
        return 0.5;
    },
    hasMilk: false,
    hasSugar: false
}

// Duck Typing or Structural typeing
makeCoffee(darkRoast);



// Interface Inheritance
interface Animal {
    color: string;
    
}

interface Humans extends Animal {
    
}