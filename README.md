
1.  **isPlainObject** - Write a method that verifies an argument is a plain object, not an array or null


 * **Task description:** Write a method that verifies an argument is a plain object, not an array or null  
 * **Expected Result:** True if object is plain, false otherwise.   
     ({ a: 1 }) => true,   
     ([1, 2, 3]) => false
     ```js
        const data = { a: 1 };
        console.log(isPlainObject(data)); // true
     ```


2.  **MakePairs** - Write a method that returns a deep array like [[key, value]]


  * **Task description:** Write a method that returns a deep array like [[key, value]]   
  * **Expected Result:** ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]   

    ```js
        const data = { a: 1, b: 2 };
        console.log(makePairs(data)); // [['a', 1], ['b', 2]] 
     ```

3.  **Without** - Write a method that returns a new object without provided properties
 
  * **Task description:** Write a method that returns new object without provided properties   
  * **Expected Result:** ({ a: 1, b: 2 }, 'b') => { a: 1 }   

    ```js
        const data = { a: 1, b: 2 };
        console.log(without(data, 'b')); // { a: 1 }
     ```

4.  **IsEmpty** - Write a method that makes a shallow check is object empty

 
  * **Task description:** Write a method that makes a shallow check is object empty   
  * **Expected Result:** ({}) => true, ({ a: undefined }) => true,   
      ({ a: 1 }) => false   

    ```js
        const data = { a: 1, b: undefined };
        const data2 = { a:undefined };
        console.log(isEmpty(data)); // false
        console.log(isEmpty(data2)); // true 
     ```


5.  **IsEqual** - Write a method that makes a shallow compare of two objects

  * **Task description:** Write a method that makes a shallow compare of two objects   
  * **Expected Result:** True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true   

    ```js
        const data = { a: 1, b: 1 };  
        const data2 = { a: 1, b: 1 };  
        const data3 = { a: 1, b: 2 };
        console.log(isEqual(data, data2)); // true  
        console.log(isEqual(data, data3)); // false
     ```