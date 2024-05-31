import { Link } from "react-router-dom";

const OrangeCard = ({ orangeCardTitle, orangeCardDescription }) => {
  return (
    <div className="orange-card flex flex-col items-center text-center bg-[#EF954B] p-6 shadow-md">
      <div className="card-content">
        <h3 className="card-title text-2xl font-semibold text-white">
          {orangeCardTitle}
        </h3>
        <p className="card-description text-lg my-5">{orangeCardDescription}</p>
        <div className="mt-6 mb-4 text-center">
          <Link
            to="/"
            className="text-xl md:text-2xl text-white bg-[#766CAD] px-5 py-3 rounded-full hover:bg-[#FECF86] hover:text-[#3d3567] transition-all duration-500"
          >
            Try Free Session
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrangeCard;
