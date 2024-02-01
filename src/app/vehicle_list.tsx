
export default function VehicleList({
  vehicles,
}: any) {
  return (
    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Mileage
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Location
                    </th>
                </tr>
            </thead>
            <tbody>
                {vehicles.map((vehicle: any) => (
                    <tr key={vehicle.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <Vehicle vehicle={vehicle} />
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
      
  );
}

function Vehicle({ vehicle }: any) {    
    return (
        <>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {vehicle.name}
            </th>
            <td className="px-6 py-4">
                ${vehicle.listing_price}
            </td>
            <td className="px-6 py-4">
                {vehicle.listing_mileage}
            </td>
            <td className="px-6 py-4">
                {vehicle.location}
            </td>
        </>
    );
  }