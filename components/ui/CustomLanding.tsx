import Image from "next/image";
import MotionBox from "./MotionBox";

interface ICustomLanding {
  src: string;
  children: React.ReactNode;
  container_class:string;
}

const CustomLanding = ({ src,container_class,
   children}: ICustomLanding) => {
  return (
    <>
      <div  className={container_class}>
        <Image
          src={src}
          layout="fill"
          alt="zasady"
          objectFit="cover"
          objectPosition="50% 50%"
          priority={true}
          className="brightness-50"
        />
        <MotionBox>{children}</MotionBox>
      </div>
    </>
  );
};

export default CustomLanding;
