import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();

  console.log(fetcher.state);
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">
        {fetcher.state === "idle" ? "Make priority" : "Submitting..."}
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
