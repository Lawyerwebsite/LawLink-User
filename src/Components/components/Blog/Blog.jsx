import React from "react";

const blogs = [
  {
    id: 1,
    title: "Understanding Your Legal Rights",
    description:
      "A guide to help you understand basic legal rights and responsibilities.",
    image:
      "https://themewagon.github.io/justlaw/assets/img/blog/single_blog_1.png",
    author: "John Doe",
    date: "Feb 5, 2025",
  },
  {
    id: 2,
    title: "How to Choose the Right Lawyer",
    description:
      "Important factors to consider when selecting a lawyer for your case.",
    image: "https://raghava-legal.com/wp-content/uploads/2024/05/OIP-1.jpeg",
    author: "Jane Smith",
    date: "Feb 3, 2025",
  },
  {
    id: 3,
    title: "Steps to File a Legal Complaint",
    description:
      "A step-by-step guide on how to file a legal complaint in court.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/022/769/081/small_2x/gavel-scale-and-law-books-in-the-bookshelf-ai-generated-photo.jpg",
    author: "Robert Brown",
    date: "Jan 29, 2025",
  },
  {
    id: 4,
    title: "Steps to File a Legal Complaint",
    description:
      "A step-by-step guide on how to file a legal complaint in court.",
    image:
      "https://2.imimg.com/data2/FU/RM/MY-120747/law-1000x1000.png",
    author: "Robert Brown",
    date: "Jan 29, 2025",
  },
  {
    id: 5,
    title: "Steps to File a Legal Complaint",
    description:
      "A step-by-step guide on how to file a legal complaint in court.",
    image:
      "https://www.amitpatelandassociates.in/wp-content/uploads/2024/05/Intellectual-Property-Lawyer-Ahmedabad.png",
    author: "Robert Brown",
    date: "Jan 29, 2025",
  },
  {
    id: 6,
    title: "Steps to File a Legal Complaint",
    description:
      "A step-by-step guide on how to file a legal complaint in court.",
    image:
      "https://blog.ipleaders.in/wp-content/uploads/2020/03/Judgement.png",
    author: "Robert Brown",
    date: "Jan 29, 2025",
  },
  {
    id: 7,
    title: "Steps to File a Legal Complaint",
    description:
      "A step-by-step guide on how to file a legal complaint in court.",
    image:
      "https://singhania.in/admin/newsimage/news-1637743257.jpg",
    author: "Robert Brown",
    date: "Jan 29, 2025",
  },
  {
    id: 8,
    title: "Steps to File a Legal Complaint",
    description:
      "A step-by-step guide on how to file a legal complaint in court.",
    image:
      "https://themewagon.github.io/justlaw/assets/img/blog/single_blog_2.png",
    author: "Robert Brown",
    date: "Jan 29, 2025",
  },
  {
    id: 9,
    title: "Steps to File a Legal Complaint",
    description:
      "A step-by-step guide on how to file a legal complaint in court.",
    image:
      "https://technext.github.io/lawmaker/images/blog-1.jpg",
    author: "Robert Brown",
    date: "Jan 29, 2025",
  },
];

const Blog = () => {
  return (
    <>
      <div className=" w-full h-[50vh] bg-[url('https://img.freepik.com/free-photo/ancient-books-adorn-library-carefully-arranged-with-classics-rare-gems_157027-2488.jpg?t=st=1738608055~exp=1738611655~hmac=b356cb2d952e662e0acd65f946dc6977ea1485ccd267c8f26e42b9f869492d84&w=1060')] bg-no-repeat bg-center bg-cover">
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <h1 className="text-4xl font-bold text-white">Blog</h1>
        </div>
      </div>
      <section className="">
        <div className="container mx-auto py-10 px-4">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Latest Blog Posts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden p-5"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <p className="text-sm text-gray-500">
                    By {blog.author} on {blog.date}
                  </p>
                  
                </div>
                <button className="px-4 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 text-lg font-poppins">Read More..</button>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
