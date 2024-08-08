import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaceItemQuantity, increaceItemQuantity } from "./CartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button
        onClick={() => dispatch(decreaceItemQuantity(pizzaId))}
        type="round"
      >
        -
      </Button>

      <span>{currentQuantity}</span>

      <Button
        onClick={() => dispatch(increaceItemQuantity(pizzaId))}
        type="round"
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
