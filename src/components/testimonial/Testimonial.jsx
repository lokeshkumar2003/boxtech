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
    <div className="h-[90vh] w-full sm:h-auto">
      <div className="p-[6%]">
        <h1>
          What Our <span style={{ color: "#ffbe23" }}>Clients</span> Say?
        </h1>
      </div>
      <div className="flex justify-evenly items-center sm:flex-wrap ">
        {
            details.map(
                (item) => <div id="test-card" className="w-[240px] h-[320px] sm:my-[12px]">
                            <div>
                                {/** boxes */}
                                <div>
                                    <span className="small-btns"></span>
                                    <span className="small-btns"></span>
                                    <span className="small-btns"></span>
                                </div>
                            </div>
                            <div className="h-[75%]" id="words">
                              <p>
                                  {item['words']}
                              </p>
                            </div>
                            <div id="author-desc" className="float-right">
                                <h5>{item['author']}</h5>
                                <h6>{item['company']}</h6>
                            </div>
                      </div>
            )
        }
      </div>
    </div>
  );
};

export default Testimonial;
