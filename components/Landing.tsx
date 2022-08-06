

const Landing = () => {
  return (
    <>   
      <div className="home-bg-img mt-10">
        <img src="./lawyer4.jpg" alt="backgroud" />
      </div>
      <div className="home-bg-content mt-10">
        <div className="home-bg-content-box ml-10 md:ml-auto md:mr-20 max-w-fit bg p-2 md:p-4">
          <h1 className="text-xl md:text-4xl" >
            Kancelaria Radcy Prawnego
            <br />
            Paweł Zdanowski
          </h1>
          <div className="mt-5">
            Profesjonalna pomoc i obsługa prawna dla osób fizycznych oraz
            podmiotów gospodarczych.
          </div>
        </div>
      </div>   
    </>
  );
};

export default Landing;


