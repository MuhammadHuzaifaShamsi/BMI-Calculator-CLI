import inquirer from "inquirer";

let bmical = await inquirer.prompt([
    {
        name: "weight",
        type: "number",
        message: "Enter Your Weight in kg: "
    },
    {
        name: "heightUnit",
        type: "list",
        choices: ["cm", "foot", "m"],
        message: "Please Enter the unit you will use for height: "
    },
    {
        name: "height",
        type: "number",
        message: "Enter Your Height: "
    }
]);


let unit  = bmical.heightUnit;

if(unit == "cm"){
    bmical.height /= 100;
    let bmi = bmical.weight / (bmical.height ** 2);
    console.log(bmi);  
}
else if(unit == "foot"){
    bmical.height /= 3.281;
    let bmi = bmical.weight / (bmical.height ** 2);
    console.log(bmi);  
}
else{
    let bmi = bmical.weight / (bmical.height ** 2);
    console.log(bmi);  
}



