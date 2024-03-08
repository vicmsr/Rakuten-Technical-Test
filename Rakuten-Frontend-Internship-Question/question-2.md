## What is the output of the code below?

```
import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(10);

  useEffect(
    function () {
      setCount(count * 0.5);
    },
    []
  );
  return <div className="hello-">Your counter is: {count}</div>;
}
```

**Select one answer**

1.	Your counter is: 0

2.	Your counter is: 10

3.	Your counter is: 5

4.	Your counter is: 20

---

**My answer** 

- **3.	Your counter is: 5**