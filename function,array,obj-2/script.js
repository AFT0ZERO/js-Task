//task 1
function calculateArea (radius)
{
    return Math.PI *radius**2;
}

//task 2
let reverseString= function(str)
{
    let newStr="";
    for(let i=str.length-1; i>=0 ;i--)
        {
            newStr+=str[i];
        }
        return newStr;
}

//task 3
let filterEvenNumbers=(arr)=>
    {
        let newArr=[];
        for(let i in arr)
            {
                if(arr[i]%2==0) newArr.push(arr[i]);
            }
        return newArr;
    }

//task 4


//task 5
let arr5=[1,2,3,4,5,6,7,8,9,10,11,12,13];
function sumTheArray(arr)
{
    let sum =0 ;
    for(let i in arr)
        {
            sum+=arr[i];
        }
    return sum ;
}

//task 6
function countVowels(str)
{
    let vowels =["a","e" , "o" ,"i" ,"u"];
    let counter =0 ;
    for(let i in str.toLowerCase())
        {
            if(vowels.indexOf(str[i])!= -1) counter++;
        }
    return counter ;
}

//task 7
function ToUpperFirst(str)
{
    let newArr=str.split(" ");
    for(let i in newArr)
        {
            newArr[i] = newArr[i][0].toUpperCase() + newArr[i].substr(1);
        }
    return newArr.join(" ");
}

// task 8
function reversWords(str)
{
    let newArr=str.split(" ");
    return newArr.reverse();
}
