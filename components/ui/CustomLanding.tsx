import Image from "next/image";
import MotionBox from "./MotionBox";

interface ICustomLanding {
  src: string;
  children: React.ReactNode;
}

const CustomLanding = ({ src ,children}: ICustomLanding) => {
  return (
    <>
      <div  className="dev_container">
        <Image
          src={src}
          layout="fill"
          alt="zasady"
          objectFit="cover"
          objectPosition="50% 50%"
          priority={true}
        />
        <MotionBox>{children}</MotionBox>
      </div>
    </>
  );
};

export default CustomLanding;
