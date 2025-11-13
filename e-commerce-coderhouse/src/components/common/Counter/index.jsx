import { useState } from "react";
import Button from "../Button";

const Counter = () => {
  const [num, setNum] = useState(0);

  const sumar = () => {
    setNum(num + 1);
  };

  const restar = () => {
    if (num > 0) setNum(num - 1);
  };

  return (
    <div>
      <Button callback={restar}>-</Button>
      <input type="text" value={num} />
      <Button callback={sumar}>+</Button>
    </div>
  );
};

export default Counter;
