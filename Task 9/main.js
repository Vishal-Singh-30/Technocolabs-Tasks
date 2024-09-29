let raceNumber = Math.floor(Math.random() * 1000);

let ifRegistredEarly = false;

let runners_age = 18;

if(runners_age > 18 & ifRegistredEarly == true){
    raceNumber = raceNumber + 1000;

}

// control flow to check age and registration time.
if(runners_age > 18 & ifRegistredEarly == true){
    console.log(`Runner with RaceNumber : ${raceNumber} will race at 9:30 am`);
}else if(runners_age > 18 & ifRegistredEarly == false){
    console.log(`Runner with RaceNumber : ${raceNumber} will race at 11:00 am`);
}

// Youth Registrants
if(runners_age < 18){
    console.log(`Runner with RaceNumber : ${raceNumber} will race at 12:30 am`);

}

// for runner who are exactly 18 years old !
if(runners_age == 18){
    console.log("Please see the registration desk");
}






