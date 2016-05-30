enum Months { January, February, March }

enum MenuTypes {
    continental = 5,
    local = 3,
    deserts = 5
}

enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

let monthOfBirth: Months = Months.January;
console.log(monthOfBirth); // 0

if (monthOfBirth == Months.January) {
    console.log('You were born on January');
}