import React from "react";
import { FaChromecast, FaDatabase, FaUserMinus, FaTv } from "react-icons/fa";
import "./service.css";

const Service = () => {
  return (
    <section className="card__details">
      <div className="service__heading">
        
        <h1>My Awosome Services</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div className="Service__card">
        <div className="card">
          <a href=""><FaChromecast/></a>
          <h1>
          Business Stratagy
          </h1>
          <p>
          I throw myself down among the tall grass by the stream as I lie close to the earth.
          </p>
        </div>
        <div className="card">
          <a href=""><FaTv/></a>
          <h1>
          Website Development

          </h1>
          <p>
          I throw myself down among the tall grass by the stream as I lie close to the earth.
          </p>
        </div>
        <div className="card">
          <a href=""><FaUserMinus /></a>
          <h1>
          Marketing & Reporting

          </h1>
          <p>
          I throw myself down among the tall grass by the stream as I lie close to the earth.
          </p>
        </div>
        <div className="card">
        <a href=""><FaDatabase/></a>
          <h1>
          Mobile App Development

          </h1>
          <p>
          I throw myself down among the tall grass by the stream as I lie close to the earth.
          </p>
        </div>
        <div className="card">
        <a href=""><FaDatabase/></a>
          <h1>
          Marketing & Reporting

          </h1>
          <p>
          I throw myself down among the tall grass by the stream as I lie close to the earth.
          </p>
        </div>
        <div className="card">
        <a href=""><FaUserMinus/></a>
          <h1>
          Mobile App Development

          </h1>
          <p>
          I throw myself down among the tall grass by the stream as I lie close to the earth.
          </p>
        </div>

      </div>
     
    </section>
  );
};

export default Service;

// ctrl + shift + i
