import { useUser } from '@clerk/nextjs';
import { getOrdersByEmail } from './../sanity/sanity-utils';
import { currentUser } from '@clerk/nextjs';

export default async function Order() {
  const user = await currentUser();

  if (!user) return <div>Not logged in</div>;

  const fetchedOrders = await getOrdersByEmail(user?.emailAddresses[0]?.emailAddress);
  
  return (
    <div className="max-w-3xl mx-auto mt-20">
      <h1 className="text-3xl text-center font-semibold text-[#5B20B6] mb-6">Your Orders Page</h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200 text-[#5B20B6]">
            <th className="px-4 py-3">Product</th>
            <th className="px-4 py-3">Qty</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Payment Status</th>
            <th className="px-4 py-3">Delivery Status</th>
          </tr>
        </thead>

        <tbody>
          {
              fetchedOrders.map(order => (
                <tr className="hover:bg-gray-50 text-center border-b text-[#5B20B6] border-gray-300" key={order._id}>
                  <td className="flex items-center py-2 px-4">
                    {order.name}
                  </td>
                  <td className="py-2 px-4">{order.qty}</td>
                  <td className="py-2 px-4">${order.price}</td>
                  <td className="py-2 px-4">
                    {
                      order.paid ? (
                        <span className="text-green-500">Paid</span>
                      ) : (
                        <span className="text-red-500">Unpaid</span>
                      )
                    }
                  </td>
                  <td className="py-2 px-4">
                    {
                      order.delivered ? (
                        <span className="text-green-500">Delivered</span>
                      ) : (
                        <span className="text-red-500">In transit</span>
                      )
                    }
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}