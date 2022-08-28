import Image from "next/image";

const Landing = () => {
  return (
    <>   
    <div className="dev_container bg-white ">
      <Image
      src = "/landing.webp"
      className="dev_landingImage"
      layout="fill"
      objectFit="cover"
      objectPosition="50% 20%"
      priority={true}
      />
      <div style={{textShadow:"0 2px 4px rgba(0, 0, 0, 0.4)"}}  className="home-bg-content ">
        <div className="home-bg-content-box ml-10 md:ml-auto md:mr-80 lg:mr-80 max-w-fit  p-2 md:p-4">
          <h1 className="text-2xl md:text-6xl" >
            Kancelaria Radcy Prawnego
            <br />
            Paweł Zdanowski
          </h1>
          <div className="mt-5 text-lg md:text-2xl">
            Profesjonalna pomoc i obsługa prawna dla osób fizycznych <br/>oraz
            podmiotów gospodarczych.
          </div>
        </div>
      </div>  
    </div>    
    </>
  );
};

export default Landing;


