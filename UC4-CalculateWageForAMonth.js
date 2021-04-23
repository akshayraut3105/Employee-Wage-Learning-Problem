console.log("Welcome to employee wage problem\n");

//UC 1 : Check if employee is present or absent
console.log("Checking if employee is present or absent:");
const IS_ABSENT = 0;
//UC 2 Refactor
let empCheck = Math.floor(Math.random() * 10) % 3;
{
    if (empCheck == IS_ABSENT) {
        console.log("Employee is Absent");
    }
    else {
        console.log("Employee is Present");
    }
}

//UC 2 : Calculate daily wage based on part time or full time
console.log("Calculating wage for employee:");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;

// UC 3 Refactor
function getWorkingHrs(empCheck)
{
    switch (empCheck) 
    {
        case IS_PART_TIME:            
            return PART_TIME_HOURS;          
        case IS_FULL_TIME:      
            return FULL_TIME_HOURS;
        default:       
            return 0;
    }
}
let empWage = WAGE_PER_HOUR*getWorkingHrs(empCheck);
console.log("Employee wage for the day: " + empWage);

// UC 4 : Calculate total emp wage for a month assuming 20 working days
const NUM_OF_WORKING_DAYS = 20;
empHrs=0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++)
{
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs+=getWorkingHrs(empCheck);
}
empWage=empHrs*WAGE_PER_HOUR;
console.log("Total monthly wage: "+empWage);
