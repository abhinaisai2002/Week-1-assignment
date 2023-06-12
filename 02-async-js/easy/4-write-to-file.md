## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.


```
const fs = require('fs');

fs.writeFile('filename.txt',"Written by me",'utf-8',(error)=>{
    if(error)throw error;
})

let ans = 0;

for(let i=0;i<1000000000000;i++) // cpu intensive tasks
    ans += i;

```