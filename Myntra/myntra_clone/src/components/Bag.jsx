import BagSummery from "./BagSummery";
import OrderSummery from "./OrderSummery";

const Bag = () => {

  const item = {
    id: "001",
    image: "images/1.jpg",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.5,
      count: 1400,
    },
  };

    const bagTotal = {
      totalItem: 7,
      totalMRP: 2999,
      totalDiscount: 100,
      finalPayment: 2899,
    };


  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            <OrderSummery item={item} />
          </div>
          <div className="bag-summary">
            <BagSummery bagTotal={bagTotal} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
