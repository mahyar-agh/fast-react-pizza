import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-5 py-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
