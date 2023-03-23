enum Genders{
    Mężczyzna,
    Kobieta
}

function CheckPeselWage(peselNumber : number[]) : boolean{
    const multiplicationNumbers : number[] = [1,3,7,9]

    let calculatedWage = 0;

    for(let i=0; i<peselNumber.length - 1; i++){
        calculatedWage += peselNumber[i] * multiplicationNumbers[i - Math.floor(i/multiplicationNumbers.length) * multiplicationNumbers.length];
    }

    calculatedWage = calculatedWage % 10;
    calculatedWage = 10 - calculatedWage;

    if(calculatedWage == peselNumber[peselNumber.length - 1])
        return true;
    
    return false;
}


function CheckPeselNumber(peselNumber: number[]) : boolean{
    if(peselNumber.length != 11)
    {
        console.log("pesel powinien posiadać 11 znakow")
        return false;
    }
    
    peselNumber.forEach(element => {
        if(isNaN(element))
        {
            console.log("pesel powinien zawierać tylko liczby")
            return false;
        }
    });
    
    if(!CheckPeselWage(peselNumber))
    {
        console.log("waga peselu nie jest zgodna")
        return false;
    }

    let userGender : number = ((peselNumber[9] % 2 == 0) ? 1 : 0);
    console.log("twoj pesel jest poprawny, płeć to: " + Genders[userGender]);
    return true;
}


const peselNumber : number[] = [2,2,2,2,2,2,2,2,2,2,2];

CheckPeselNumber(peselNumber);
