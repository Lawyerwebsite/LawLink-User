import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import BlogCard from "./BlogCard";
import CatBlog from "./CatBlog";
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState("");  
    const navigate = useNavigate();  

    const handleSearch = () => {
        if (searchQuery.toLowerCase().includes("civil")) {
            navigate("/civil");  
        } else if (searchQuery.toLowerCase().includes("criminal")) {
            navigate("/criminal"); 
        }  else if (searchQuery.toLowerCase().includes("family")) {
            navigate("/family"); 
        }  else if (searchQuery.toLowerCase().includes("banking")) {
            navigate("/banking");  
        }  else if (searchQuery.toLowerCase().includes("service")) {
            navigate("/service"); 
        }  else if (searchQuery.toLowerCase().includes("corporate")) {
            navigate("/corporate");  
        }  else if (searchQuery.toLowerCase().includes("realstate")) {
            navigate("/realstate");  
        }  else if (searchQuery.toLowerCase().includes("immigration")) {
            navigate("/immigration");  
        } 
        else {
            alert("No matching category found.");
        }
    };

    return (
        <div>
            <div className="relative">
                <img
                    src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Background"
                    className="h-[200px] w-full object-cover"
                />
                <div className="absolute top-1/2  right-0 mr-2 transform-translate-x-1/2 -translate-y-1/2  max-w-2xl flex  bg-white shadow-lg rounded-full px-4 py-2">
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        className="flex-grow px-4 py-2 text-gray-700 focus:outline-none rounded-l-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}  
                    />
                    <button className="text-blue-600 hover:text-blue-800" onClick={handleSearch}>
                        <IoSearchOutline className="text-2xl" />
                    </button>
                </div>
            </div>

            <div className="bg-gray-300 border shadow-gray-700 h-auto text-justify w-full py-10">
                <h1 className="font-bold text-3xl text-center mb-10 underline">Latest Judgements</h1>
                <div className="flex flex-wrap justify-evenly items-start">
                    <img
                        src="https://img.freepik.com/premium-photo/scales-justice-placed-lawyers-office-table_941742-7957.jpg"
                        alt="Scales of Justice"
                        className="h-[300px] w-[300px] rounded-md p-5"
                    />
                    <div className="max-w-lg">
                        <p className="font-bold text-lg text-center underline mb-4">
                            Family Courts grant divorce on the grounds of mutual consent
                        </p>
                        <p className="font-normal text-lg mb-4">
                            Mutual agreement between the parties, settling all claims and counterclaims, is a key aspect of divorce by mutual consent. Family courts worldwide, including in India under the Hindu Marriage Act, 1955, recognize this form of divorce.
                        </p>
                        <p className="font-normal text-lg mb-4">
                            A joint petition is filed before the family court, stating that the spouses have been living separately for a prescribed period (usually one year or more) and cannot live together. If the court is satisfied, a divorce decree is granted.
                        </p>
                        <a href="/details" className="text-blue-600 hover:underline flex items-center">
                            Read more <FaAngleRight className="ml-1" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-evenly">
                <div>
                <CatBlog />
                    
                </div>
                <div>
                <BlogCard />
                </div>
            </div>
        </div>
    );
};

export default Blog;



