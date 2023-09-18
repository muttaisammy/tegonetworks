import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Internet Service Provisioning" img="mast.jpg" text="We provide Home & Business wifi at very affordable prices " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Inter Networking" img="radio.jpg" text="Hardware sales to include Telecomunication equipment." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Cyber Security" img="network.jpg" text="We provide End to End cyber security testing ." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
