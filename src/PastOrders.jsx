export default function PastOrders({ pastOrders }) {
  return (
    <div>
      <h3>Past orders</h3>
      <div>
        {pastOrders.map((order, index) => {
          return (
            <ul>
              <li key={index}>
                {Array.isArray(order.items) &&
                  order.items.map((item, index) => (
                    <li key={item.id + index}>{item.name}</li>
                  ))}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
