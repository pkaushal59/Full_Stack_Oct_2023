console.log("Before");

const cb2 = () => {
        console.log("Set timeout 1");
        let timeInFuture = Date.now() + 5000; // 5s
        while(Date.now() < timeInFuture){

        }
}

const cb1 = () => console.log("hello");

setTimeout(cb2, 1000)

setTimeout(cb1, 2000)

console.log("After");

/**
 * o/p:
 * 
 *      Before
        After
        Set timeout 1
        <<<< after 5 sec delay>>>>
        hello
 *    
 */