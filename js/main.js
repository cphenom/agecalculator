let today = new Date();
let birthDate = {};
let err = false;     
//let yearZeroOrOne;
//let ageYear;
//let ageMonth;
//let ageDay;
//let daysInPreviousMonth 

let mainSection = document.getElementById("mainsection");
let dayInput = document.getElementById("dayinput");
let monthInput = document.getElementById("monthinput");
let yearInput = document.getElementById("yearinput");


//######################## MODEL ################################
 function inputErrHandler(){
    let dayInputNumber = Number(dayInput.value);
    let dayErrorMessage = document.getElementById("dayerrormessage");
    let errorDayTitle = document.getElementById("errordaytitle");

    let monthInputNumber = Number(monthInput.value);
    let monthErrorMessage = document.getElementById("montherrormessage");
    let errorMonthTitle = document.getElementById("errormonthtitle");

    let yearInputNumber = Number(yearInput.value);
    let yearErrorMessage = document.getElementById("yearerrormessage");
    let errorYearTitle = document.getElementById("erroryeartitle");

    function catchDayErr(){
    
        if (dayInputNumber < 1){
            dayInput.classList.add("errorbox");
            errorDayTitle.classList.add("errortitle");
            dayErrorMessage.classList.add("displayerrormessage");
            dayErrorMessage.innerText = "this field is required";
            err = true;
    
        }
        else if (dayInputNumber > 31){
            dayInput.classList.add("errorbox");
            errorDayTitle.classList.add("errortitle");
            dayErrorMessage.classList.add("displayerrormessage");
            dayErrorMessage.innerText = "must be a valid day";
            err = true;

        }
        else{
            dayInput.classList.remove("errorbox");
            errorDayTitle.classList.remove("errortitle");
            dayErrorMessage.classList.remove("displayerrormessage");
            err = false;
        }
    }
    catchDayErr();

    function catchMonthErr(){

        if (monthInputNumber < 1){
            monthInput.classList.add("errorbox");
            errorMonthTitle.classList.add("errortitle");
            monthErrorMessage.classList.add("displayerrormessage");
            monthErrorMessage.innerText = "this field is required";
            err = true;
        }
        else if (monthInputNumber > 12){
            monthInput.classList.add("errorbox");
            errorMonthTitle.classList.add("errortitle");
            monthErrorMessage.classList.add("displayerrormessage");
            monthErrorMessage.innerText = "must be a valid month";
            err = true;

        }
        else{
            monthInput.classList.remove("errorbox");
            errorMonthTitle.classList.remove("errortitle");
            monthErrorMessage.classList.remove("displayerrormessage");
            err = false;
        }
    }
    catchMonthErr();

    function catchYearErr(){

        if (yearInputNumber < 1){
            yearInput.classList.add("errorbox");
            errorYearTitle.classList.add("errortitle");
            yearErrorMessage.classList.add("displayerrormessage");
            yearErrorMessage.innerText = "this field is required";
            err = true;
        }
        else if (yearInputNumber > today.getFullYear()){
            yearInput.classList.add("errorbox");
            errorYearTitle.classList.add("errortitle");
            yearErrorMessage.classList.add("displayerrormessage");
            yearErrorMessage.innerText = "must be in the past";
            err = true;
        }
        else{
            yearInput.classList.remove("errorbox");
            errorYearTitle.classList.remove("errortitle");
            yearErrorMessage.classList.remove("displayerrormessage");
            err = false;
        }
    }
    catchYearErr();

    function validateDate(){
        
        if (((monthInputNumber === 4) || (monthInputNumber === 6) || (monthInputNumber === 9) || (monthInputNumber === 11)) && (dayInputNumber > 30)){
            dayInput.classList.add("errorbox");
            errorDayTitle.classList.add("errortitle");
            dayErrorMessage.classList.add("displayerrormessage");
            dayErrorMessage.classList.add("font8");
            dayErrorMessage.innerText = "This Month only has 30 Days";

            monthInput.classList.add("errorbox");
            errorMonthTitle.classList.add("errortitle");
            
            yearInput.classList.add("errorbox");
            errorYearTitle.classList.add("errortitle");

            err = true;
        }
        else if ((monthInputNumber === 2) && (dayInputNumber > 29) && (yearInputNumber % 4 === 0)){
            dayInput.classList.add("errorbox");
            errorDayTitle.classList.add("errortitle");
            dayErrorMessage.classList.add("displayerrormessage");
            dayErrorMessage.innerText = "leap year has 29 days";

            monthInput.classList.add("errorbox");
            errorMonthTitle.classList.add("errortitle");
            
            yearInput.classList.add("errorbox");
            errorYearTitle.classList.add("errortitle");

            err = true;
        }
        else if ((monthInputNumber === 2) && (dayInputNumber > 28) && (yearInputNumber % 4 != 0)){
            dayInput.classList.add("errorbox");
            errorDayTitle.classList.add("errortitle");
            dayErrorMessage.classList.add("displayerrormessage");
            dayErrorMessage.classList.add("font8");
            dayErrorMessage.innerText = "non leap year has 28 Days";

            monthInput.classList.add("errorbox");
            errorMonthTitle.classList.add("errortitle");
            
            yearInput.classList.add("errorbox");
            errorYearTitle.classList.add("errortitle");

            err = true;
        }
        // this block was meant to clear error if it exist so it cleared
        // error in catchday function and catchmonth function and catch 
        //year function earlier added in the code if its above if ND IF
        // ELSE function returned false
        // else{
        //     dayInput.classList.remove("errorbox");
        //     errorDayTitle.classList.remove("errortitle");
        //     dayErrorMessage.classList.remove("displayerrormessage");

        //     monthInput.classList.remove("errorbox");
        //     errorMonthTitle.classList.remove("errortitle");

        //     yearInput.classList.remove("errorbox");
        //     errorYearTitle.classList.remove("errortitle");
        // }
    }
    validateDate();
 }
 
 document.getElementById("datepicker").addEventListener("input", function(){
    inputErrHandler();
 })

 function changeTheme(){
    document.body.classList.add("darktheme");
    mainSection.classList.add("darktheme_mainsection");
    dayInput.classList.add("darkinput");
    monthInput.classList.add("darkinput");
    yearInput.classList.add("darkinput");

 }
 function removeTheme(){
    document.body.classList.remove("darktheme");
    mainSection.classList.remove("darktheme_mainsection");
    dayInput.classList.remove("darkinput");
    monthInput.classList.remove("darkinput");
    yearInput.classList.remove("darkinput");
 }

 const theme = document.getElementById("theme");
 theme.addEventListener("change", function(e){
    if (e.target.checked){
        changeTheme();
    }else{
        removeTheme();
    }
 })


 
 function copyInputValue(){
    // getting input element by id and storing the value in a variable
    birthDate.date = Number(dayInput.value);
    
    birthDate.month = Number(monthInput.value);
    
    birthDate.year = Number(yearInput.value);
 }

//######################## VIEW ################################
 function displayAge(){
    let yearValue = document.getElementById("yearvaluedisplay");
    yearValue.innerText = ageYear;
    let monthValue = document.getElementById("monthvaluedisplay");
    monthValue.innerText = ageMonth;
    let dayValue = document.getElementById("dayvaluedisplay");
    dayValue.innerText = ageDay;
 }

//######################## CONTROLLER ################################
 function calcAge(){

    // calculating for age in years
    function calcYear(){
        if (((today.getMonth() + 1) < birthDate.month) || ((today.getMonth() + 1) === birthDate.month) && (today.getDate() < birthDate.date)){
            yearZeroOrOne = 1;
        }else{
            yearZeroOrOne = 0;
        }
        ageYear = today.getFullYear() - birthDate.year - yearZeroOrOne;
    }
    calcYear();
    
    //calculating for age in months

    function calcMonthAndDay(){
        function calcDaysInPreviousMonth(){
            switch(today.getMonth()){
                case 9:
                case 4:
                case 6:
                case 11:
                    return 30;
                break;
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 0:
                    return 31;
                break;
                case 2:
                    if ((today.getFullYear()) % 4 == 0){
                        return 29;
                    }
                    else{
                        return 28;
                    }
                break;
            }
        }
        daysInPreviousMonth = calcDaysInPreviousMonth();
        
        if ( ((today.getMonth() + 1) > birthDate.month) && ( today.getDate() > birthDate.date)){
            ageMonth = (today.getMonth() + 1) - birthDate.month;
            ageDay = today.getDate() - birthDate.date;
        }
        else if (((today.getMonth() + 1) > birthDate.month) && (today.getDate() <  birthDate.date)){
            ageMonth = ((today.getMonth() + 1) - birthDate.month) - 1;
            ageDay = daysInPreviousMonth - birthDate.date + today.getDate();
        }
        else if (((today.getMonth() + 1) === birthDate.month) && (today.getDate() >  birthDate.date)){
            ageMonth = 0;
            ageDay = today.getDate() - birthDate.date;
        }
        else if  (((today.getMonth() + 1) === birthDate.month) && (today.getDate() <  birthDate.date)){
            ageMonth = 11;
            ageDay = daysInPreviousMonth - birthDate.date + today.getDate();
        }
        else if (((today.getMonth() + 1) < birthDate.month) && (today.getDate() >  birthDate.date)){
            ageMonth = 12 - (birthDate.month - (today.getMonth() + 1));
            ageDay = today.getDate() - birthDate.date;
        }
        else if (((today.getMonth() + 1) < birthDate.month) && (today.getDate() <  birthDate.date)){
            ageMonth = (12 - (birthDate.month - (today.getMonth() + 1))) - 1;
            ageDay = daysInPreviousMonth - birthDate.date + today.getDate();
        }
        else if ( ((today.getMonth() + 1) > birthDate.month) && ( today.getDate() == birthDate.date)){
            ageMonth = (today.getMonth() + 1) - birthDate.month;
            ageDay = 0;
        }
        else if (((today.getMonth() + 1) === birthDate.month) && (today.getDate() ==  birthDate.date)){
            ageMonth = 0;
            ageDay = 0;
        }
        else if (((today.getMonth() + 1) < birthDate.month) && (today.getDate() ==  birthDate.date)){
            ageMonth = (12 - (birthDate.month - (today.getMonth() + 1))) - 1;
            ageDay = 0;
        } 
    }
    calcMonthAndDay();
 }
 
 function submitBirthDate(){

    if (err === true){
        
        ageDay = "--";
        ageMonth = "--";
        ageYear = "--";
        displayAge();
    }
    else {
        copyInputValue();
        calcAge();
        displayAge();
    }

    /*//////////age dispay in years months and days
    console.log("year=>"+ ageYear + '\n' + "month=>"+ ageMonth + '\n' + "Day=>"+ ageDay);
    //////////birthday dispay
    console.log(birthDate.date + "/" + birthDate.month + "/" + birthDate.year + "===> ");

    /////////todays date dispay
    console.log(today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear() + "===>");
    /*
    //////type of ages
    console.log( "type of ageYear=>"+ typeof(ageYear) + '\n' + "type of ageMonth=>"+ typeof(ageMonth) + '\n' + "type of ageDay=>"+ typeof(ageDay))

    //////type of birthday
    console.log( "type of birthday year=>"+ typeof(birthDate.year) + '\n' + "type of birthd month=>"+ typeof(birthDate.month) + '\n' + "type of birth Day=>"+ typeof(birthDate.date))

     //////type of todaydate
     console.log( "type of birthday year=>"+ typeof(today.getFullYear()) + '\n' + "type of birthd month=>"+ typeof(today.getMonth()) + '\n' + "type of birth Day=>"+ typeof(today.getDate()))
    */
 }
