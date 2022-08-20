import Image from "next/image";

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
      </div>
    </>
  );
};

export default CustomLanding;
