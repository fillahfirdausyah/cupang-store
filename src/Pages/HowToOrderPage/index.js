import React from "react";

import { Navbar, Footer } from "../../Component/";
import "./style.css";

function HowToOrderPage() {
  return (
    <div className="__howToOrderPage">
      <Navbar />
      {/* Main */}
      <div className="container">
        <div className="__titleSection">
          <h1>How To Order</h1>
          <div className="__imgWrapper">
            <img
              src="http://brooder-demo.buanalintas.co.id/theme/img/blog/wide/blog-11.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="__howToOrderSection">
          <h1>Class aptent taciti sociosqu ad litora torquent</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum odit
            cupiditate culpa unde odio eius rerum sit voluptates fugiat in
            voluptatem magni tempora repellendus qui, impedit maiores dolor sunt
            porro.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            minima temporibus, est harum beatae, dignissimos quisquam optio
            consequuntur ut eaque ipsam. Ex rerum doloremque quisquam unde
            similique dolore cumque modi ratione iste, assumenda hic incidunt
            nihil, error nulla suscipit aliquid a! Dolores, provident sapiente
            perferendis vel tempora libero eveniet quo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
            consequuntur dolore quaerat nostrum, ipsa pariatur, sed ducimus modi
            dolorum voluptas itaque neque commodi ipsum distinctio animi
            possimus tenetur. Voluptatibus!
          </p>
        </div>
      </div>
      {/* End Main */}
      <Footer />
    </div>
  );
}

export default HowToOrderPage;
