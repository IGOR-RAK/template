import Image from "next/image";

const Landing = () => {
  return (
    <>   
    <div className="dev_container">
      <Image
      src = "/landing.webp"
      className="dev_landingImage"
      layout="fill"
      objectFit="cover"
      objectPosition="50% 20%"
      priority={true}
      />
      <div  className="home-bg-content mt-10">
        <div className="home-bg-content-box ml-10 md:ml-auto md:mr-80 max-w-fit bg p-2 md:p-4">
          <h1 className="text-xl md:text-4xl" >
            Kancelaria Radcy Prawnego
            <br />
            Paweł Zdanowski
          </h1>
          <div className="mt-5">
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


