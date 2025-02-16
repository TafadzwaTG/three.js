import { clientReviews } from "../constants/index.js";

// Clients component to display client testimonials
const Clients = () => {
  return (
    <section className="c-space my-20">
      {/* Section heading */}
      <h3 className="head-text">Hear from My Clients</h3>

      <div className="client-container">
        {/* Iterate through the clientReviews array to display each client's review */}
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            {/* Display the client's review text */}
            <div>
              <p className="text-white-800 font-light">{item.review}</p>

              <div className="client-content">
                {/* Container for client details (profile picture, name, and position) */}
                <div className="flex gap-3">
                  {/* Client's profile image */}
                  <img
                    src={item.img}
                    alt="reviewer"
                    className="w-12 h-12 rounded-full"
                  />

                  {/* Client's name and position */}
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">
                      {item.position}
                    </p>
                  </div>
                </div>

                {/* Star rating section - Displays 5 static stars for each review */}
                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    // Render a star image for each index in the array
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt="star"
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
