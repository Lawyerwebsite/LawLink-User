import React from "react";
import { Link } from "react-router-dom";

const CatBlog = () => {
  return (
    <div className="bg-gray-100 p-16 ">
      {/* Categories Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4 ">Categories</h1>
        <ul className="space-y-2 text-lg text-gray-700">
          <li>
            <Link to="/civil" className="text-blue-600 hover:underline">
              Civil Laws
            </Link>
          </li>
          <li>
            <Link to="/criminal" className="text-blue-600 hover:underline">
              Criminal Laws
            </Link>
          </li>
          <li>
            <Link to="/family" className="text-blue-600 hover:underline">
              Family Laws
            </Link>
          </li>
          <li>
            <Link to="/corporate" className="text-blue-600 hover:underline">
              Corporate Laws
            </Link>
          </li>
          <li>
            <Link to="/banking" className="text-blue-600 hover:underline">
              Banking Laws
            </Link>
          </li>
          <li>
            <Link to="/service" className="text-blue-600 hover:underline">
              Service Laws
            </Link>
          </li>
          <li>
            <Link to="/realstate" className="text-blue-600 hover:underline">
              Real Estate Laws
            </Link>
          </li>
          <li>
            <Link to="/immigration" className="text-blue-600 hover:underline">
              Immigration Laws
            </Link>
          </li>
        </ul>
      </div>

      {/* Recent Posts Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>
        <ul className="space-y-2 text-lg text-gray-700">
          <Link to="/recent" className="text-blue-600 hover:underline"><li>Madras High Court re-iterates the scope of review</li></Link> <br/>
          <Link to="/recent2"  className="text-blue-600 hover:underline"><li>In a Significant Decision, Supreme Court grants relief to</li></Link>  <br/>
          <Link to="/recent3" className="text-blue-600 hover:underline"><li>Family Court grants divorce under the grounds of Mutual</li></Link> <br/>
          <Link to="/recent4" className="text-blue-600 hover:underline"><li>In a significant decision the Hon’ble Madras High Court</li></Link> <br/>
          <Link to="/recent5" className="text-blue-600 hover:underline"><li>TN-RERA imposes a penalty of Rs 3,00,000/- to be paid</li></Link>
        </ul>
      </div>

      {/* Archives Section */}
      {/* <div>
        <h1 className="text-2xl font-bold mb-4">Archives</h1>
        <ul className="space-y-2 text-lg text-gray-700">
          <li>November 2024</li>
          <li>October 2024</li>
          <li>October 2021</li>
          <li>April 2022</li>
          <li>March 2020</li>
        </ul>
      </div> */}
    </div>
  );
};

export default CatBlog;

