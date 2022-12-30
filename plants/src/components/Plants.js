// import plant1 from "https://www.ikea.com/mx/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_pe686835_s5.jpg?f=s";
import { Link } from "react-router-dom";

const plants = [
  {
    name: "plan1",
    image:
      "https://www.ikea.com/mx/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_pe686835_s5.jpg?f=s",
  },
  {
    name: "plan2",
    image: "https://placeimg.com/640/480/nature",
  },
  {
    name: "plan3",
    image: "https://placeimg.com/640/480/nature",
  },
  {
    name: "plan4",
    image:
      "https://www.ikea.com/mx/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_pe686835_s5.jpg?f=s",
  },
  {
    name: "plan1",
    image:
      "https://www.ikea.com/mx/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_pe686835_s5.jpg?f=s",
  },
  {
    name: "plan2",
    image: "https://placeimg.com/640/480/nature",
  },
  {
    name: "plan3",
    image: "https://placeimg.com/640/480/nature",
  },
  {
    name: "plan4",
    image:
      "https://www.ikea.com/mx/en/images/products/fejka-artificial-potted-plant-with-pot-in-outdoor-succulent__0614211_pe686835_s5.jpg?f=s",
  },
];

const Plants = () => {
  return (
    <>
      <div className="mb-5 text-center text-2xl text-white font-black">
        Plants Collection
      </div>
      <div className="flex flex-wrap justify-center w-screen gap-10">
        {plants ? (
          plants.map((plant, key) => {
            return (
              <Link key={key} to="/plant">
                <div>
                  <div className="avatar">
                    <div className="w-24  rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                      <img src={plant.image} />
                    </div>
                  </div>
                  <div className="font-medium mt-3 text-center text-blue-600 dark:text-blue-500 hover:underline">
                    {plant.name}
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div>no hay</div>
        )}
      </div>
    </>
  );
};

export default Plants;
