import Link from "next/link";
import React from "react";

function Countries() {
  return (
    <div className="container mx-auto px-12">
      <div className="cards flex gap-16">
        <Link href="/detelis/1">
          <div className="card flex  flex-col w-40 bg-slate-500">
            <div className="card-image">
              <img src="https://picsum.photos/200/300" className="w10" />
            </div>
            <div className="card-content">
              <div className="card-title">Card title</div>
              <div className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, voluptatum.
              </div>
            </div>
          </div>
        </Link>
        <Link href="/detelis/2">
          <div className="card flex  flex-col w-40 bg-slate-500">
            <div className="card-image">
              <img src="https://picsum.photos/200/300" className="w10" />
            </div>
            <div className="card-content">
              <div className="card-title">Card title</div>
              <div className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, voluptatum.
              </div>
            </div>
          </div>
        </Link>
        <Link href="/detelis/3">
          <div className="card flex  flex-col w-40 bg-slate-500">
            <div className="card-image">
              <img src="https://picsum.photos/200/300" className="w10" />
            </div>
            <div className="card-content">
              <div className="card-title">Card title</div>
              <div className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, voluptatum.
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Countries;
