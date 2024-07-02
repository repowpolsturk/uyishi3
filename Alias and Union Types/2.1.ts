type StringOrNumber = string | number;
type BooleanValue = boolean;

function checkValue(value: StringOrNumber | BooleanValue): void {
    if (typeof value === "string" || typeof value === "number") {
        console.log(`Qiymat string yoki number: ${value}`);
    } else {
        console.log(`Qiymat boolean: ${value}`);
    }
}

checkValue("Hello");







checkValue(42);      
checkValue(true);   
