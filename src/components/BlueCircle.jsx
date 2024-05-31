import borderImg from "/src/assets/blue-circle-border.svg";

const BlueCircle = ({ blueCircleIMg, blueCircleText }) => {
  return (
    <div className="blue-circle relative flex flex-col items-center justify-center text-center">
      <div className="relative border-2 rounded-full p-8 border-[#766CAD]">
        <img
          src={blueCircleIMg}
          alt="blue-circle"
          style={{ width: "100px", height: "100px" }}
        />
        <img
          src={borderImg}
          className="border-img absolute top-[-8px] left-[-8px]"
        />
      </div>
      <div>
        <h3 className="text-lg sm:text-xl text-[#766CAD] font-semibold mt-4">
          {blueCircleText}
        </h3>
      </div>
    </div>
  );
};

export default BlueCircle;
