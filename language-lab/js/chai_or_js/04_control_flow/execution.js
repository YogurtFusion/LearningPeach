// javascript excecution context 

//  {} -> Global excecution context. defined in ".this". broswer have windows in this and node have blank or curly bracket in global this 

// types of js excecution context

//  Global excecution context
//  function excecution context 

// *other two are okay *    Eval execution context  


// code excecution 

// {} memrory creation phase: we just allocate memories for the variable etc

// executional phase: here we execute what we have in memory 

let val1  = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1,val2)
let result2 = addNum(10,2)
console.log(result1,result2);

// Exccecution STEPS

// 01 Global Execution: anythink we've to execut it will assign in the global   

// 2. Memory phase / creation phase / Global memory phase

// val1 -> undefined
// val2 -> undefined
//addNum =>defenation // addNum contain variable first line and defenation contains variale other parts 
// result1 -> undefined
// result2 -> undefined


//3. Excecution phase

// val1 => 10
// val2 => 5
//addnum (since we already holded it's value in defanition in memory phase now here in excecution phase it's creates sandboxes or different enviromet to execut different code)
// new variable enviroment  + executional thread (sandbox). it will create new sandbox for as many time we excecute it 
// result 1 = 15 got from the temp excecutional phase or sandbox 1
// result 2 = 12 got from the temp excecutional phase or sandbox 1
// 

// result 1 variable
// memory creation for sandbox of the execution phase

// val 1 =  undefined 
// val2 = undefined 
// total = undefined

// EXECUTION CONTEXT   // after excecution this excecution got deleted and since we used return it return the value in global execution context

// num 1 => 10
// num 2 => 5
// total => 15

// result 2 variable 
// New variable enviroment +  thread 

// memory phase
// execution phase 
// back to main 

