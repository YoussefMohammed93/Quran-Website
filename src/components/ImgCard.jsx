import { Link } from "react-router-dom";

const ImgCard = ({ ImgCardImage, ImgCardTitle, ImgCardLink }) => {
  return (
    <div className="ImgCard bg-[#766CAD] p-2 shadow h-[480px] flex flex-col items-center justify-center">
      <div className="p-5 flex flex-col items-center justify-center">
        <img
          src={ImgCardImage}
          alt="Image-Card"
          loading="lazy"
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mt-4 text-white">
          {ImgCardTitle}
        </h2>
        <div className="text-center mt-7 mb-2">
          <Link to={ImgCardLink} className="bg-[#EF954B] px-16 py-3 text-xl rounded-full text-white hover:bg-[#dc8b49] transition-all duration-150">Join Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ImgCard;
