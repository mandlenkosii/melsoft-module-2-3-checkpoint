/* 1. One thing I got to fully understand is JavaScript handles data types accoding to the different purposes or special purposes, meaning I have to be very careful when working with numbers, strings and booleans.


2. I got to see that == compares values but it also converts them before,
while === compares the data type and value without any converting 

3. I would use ?? when I only want to provide a default value if something is null or undefined.
like: let number = 0;
console.log(number || 16);
console.log(number ?? 16);

4. typeof null returning a object is apparently a compatibility with the older version/code
So now checking the value null would look something like this: value === null


5. Forgeting to convert can cause a problem in the banking space since they always deal with numbers.
NUmbers that come in forms of strings must be cinverted 


6. This is because Javascript doesnt represent numbers corretly as it stores decimal numbers using binary floating-point


7.  & is a bitwise AND operater that works in bits 
    && is a logical AND operator that checks truthiness
    | is a bitwise OR operator that works on bits
    || is a logical OR operator that checks thruthiness

    Basically the first ones/single ones work with bits,
    while the other two are used for LOgical conditions 

8. I think for me the hardest thing is still working with bits  and working with null, undefined and also the concept of the operators in the previous question

I did however research and looked at different examples such that I get to have an idea
*/