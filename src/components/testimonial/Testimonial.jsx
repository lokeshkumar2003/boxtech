import React from "react";
import './testimonial.css';

const Testimonial = () => {
  const details = [
    {
      words:
        "“I had great experience with moving solutions. Moving Solutions they offered best deal at affordable prices.”",
      author: "Rakesh Reddy,",
      company:'Storehouse'
    },
    {
        words:
          "“ We are extremely happy with the service provided by boxtech.”",
        author: "Tomar Singh,",
        company:'Parkmerced'
    },
    {
        words:
          "“I would recommend Home Packers and Movers to take away all your worries and sit back and relax while they do all the hard work and take care of transporting all your precious stuff in a very professional way with reasonable pricing.”",
        author: "Ajay Gowda,",
        company:'Transter'
    },
  ];

  return (
    <div className="h-[90vh] w-full">
      <div className="p-[6%]">
        <h1>
          What Our <span style={{ color: "#ffbe23" }}>Clients</span> Say?
        </h1>
      </div>
      <div className="flex justify-evenly items-center">
        {
            details.map(
                (item) => <div id="test-card" className="w-[240px] h-[400px]">
                            <div>
                                {/** boxes */}
                                <div>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <p>
                                {item['words']}
                            </p>
                            <div>
                                {item['author']}<br/>
                                {item['company']}
                            </div>
                      </div>
            )
        }
      </div>
    </div>
  );
};

export default Testimonial;
