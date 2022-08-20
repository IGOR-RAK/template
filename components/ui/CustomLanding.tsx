import Image from "next/image";
import MotionBox from "./MotionBox";

interface ICustomLanding {
  src?: string;
}

const CustomLanding = ({ src }: ICustomLanding) => {
  return (
    <>
      <div  className="dev_container">
        <Image
          src="/zasady.webp"
          layout="fill"
          alt="zasady"
          objectFit="cover"
          objectPosition="50% 50%"
          priority={true}
        />
        <MotionBox><h1>ZASADY WSPÓŁPRACY</h1></MotionBox>
      </div>
    </>
  );
};

export default CustomLanding;
