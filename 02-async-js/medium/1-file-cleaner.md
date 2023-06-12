## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

# Code

```

const fs = require('fs');

fs.readFile('a.txt','utf-8',function(error,data){

  const sSplited = data.split(/ +/);

  const originalData = sSplited.join(" ");

  fs.writeFile('a.txt',originalData,'utf-8',function(err){

    if(err)throw err;

  })

})

```