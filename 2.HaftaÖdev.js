 
//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu if sart blokları)

 function findPrime(...numbers) {
    let isPrime=true
        for (let i = 0; i < numbers.length; i++) {
    
            
            if (numbers[i]==2) {
                console.log(numbers[i]+" Asal sayıdır.")
            
                
            }else if (numbers[i]>1&numbers[i]!=2) {
                for (let j = 2; j < numbers[i]/2; j++) {
                    if (numbers[i]%j == 0) {
                        isPrime=false
                        break
                    }
                }
                if (isPrime) {
                    console.log(numbers[i]+" Asal sayıdır.")
                }else{console.log(numbers[i]+" Asal sayı değildir")}
                
            }else  {console.log("Sıfırdan büyük bir sayı giriniz...")}
            
            
        }
    }
    findPrime(73,2,17,6,15,8,21,25)
    
    console.log("------------------------")

    //Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

function isFriendly(num1,num2) {
    let y = 1//num1 için
    let z = 1//num2 için
    for (let i = 2; i <= num1/2; i++) {
        if (num1 % i == 0) {
            y+=i
              
        }  
    }
    for (let j = 2; j <= num2/2; j++) {
        if (num2 % j == 0) {
            z+=j
              
        }  
    }
    if (y==num2 & z==num1) {
        return 1    
    }
    else{return 0}

   
}
    
 if (isFriendly(220,284)===1) {
        console.log("Bu iki sayı arkadaş sayılardır.")
        
    }else{console.log("Bu sayılar arkadaş sayılar değillerdir")}

  //1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
function isPerfect(number) {
    let total=1
    for (let i = 2; i <= number/2; i++) {
        if (number % i ==0) {
            total+=i  
        }  
    }
    if (total==number) {
        return 1    
    }
    else{return 0}
    
}

for (let j = 0; j <= 1000; j++) {
    if (isPerfect(j)==1) {
        console.log(j+" Mükemmel sayıdır")   
    }
}


//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function primeNumbers() {
    for (let number = 1; number < 1000; number++) {

        let primeNumbersCount = 0;

        for (let i = 2; i < number; i++) {
             if(number % i == 0){
                 primeNumbersCount++;
             }
        }

        if(primeNumbersCount == 0){
            console.log(number+ " Asal sayıdır.")
        }
    }   
}
primeNumbers()
console.log("----------------------------------------------------------------------------")
