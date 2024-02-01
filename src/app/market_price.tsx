export default function MarketPrice({ price }: any) {
  return (
    <>
      <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
        Estimated Market Price: ${price}
      </span>
      <br />
    </>
  );
}
