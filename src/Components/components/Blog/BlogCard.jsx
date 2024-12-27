import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  const List = [
    {
      id: 1,
      img: "https://raghava-legal.com/wp-content/uploads/2024/05/OIP-1.jpeg",
      title: 'Business Formations, Contracts Entity Formation and Contracts Lawyer in Chennai, India',
      path: '/business',
      content: "Merlyn Law Firm's Contract Lawyers in Chennai help clients in transitioning their entrepreneurial ideas into fully functioning",
    },
    {
      id: 2,
      img: "https://2.imimg.com/data2/FU/RM/MY-120747/law-1000x1000.png",
      title: '2018 SCC OnLine Bom 2074 : (2018) 5 AIR Bom R 553 : (2018) 6 Bom CR 172',
      path: '/aboutlaw',
      content: "Mr. Raj Patel, a/w. Mr. Ruturaj Bankar, I/by M/s. Lex Legal and Partners, for the Appellant-Applicant in SA(St.)/9717/2018.",
    },
    {
      id: 3,
      img: "https://www.runsensible.com/wp-content/uploads/2024/02/Top-9-Tools-for-Lawyers-in-2024.jpg",
      title: '6 Tips to Handle Business Legal Disputes',
      path: '/tips',
      content: "6 Tips to Handle Business Legal Disputes As much as you may wish to avoid legal disputes in business, these are inevitable as you",
    },
    {
      id: 4,
      img: "https://www.amitpatelandassociates.in/wp-content/uploads/2024/05/Intellectual-Property-Lawyer-Ahmedabad.png",
      title: 'A BEGINNERS GUIDE TO RERA',
      path: '/beg',
      content: "What is RERA & What is the Objective of RERA? RERA was formed to aid aggrieved purchasers and landowners at the hands of",
    },
    {
      id: 5,
      img: "https://static.vecteezy.com/system/resources/thumbnails/022/769/081/small_2x/gavel-scale-and-law-books-in-the-bookshelf-ai-generated-photo.jpg",
      title: 'Adultery or re-marriage of spouse cannot be decided in the absence of a fully fledged trial',
      path: '/spouse',
      content: "Mr Rahul Jagannathan appeared for the respondent/wife and contended that an application for cancellation of interim",
    },
    {
      id: 6,
      img: "https://blog.ipleaders.in/wp-content/uploads/2020/03/Judgement.png",
      title: 'All you need to know about WRITING a WILL or DRAFTING.',
      path: '/will',
      content: "Writing a WILL & ALL YOU NEED TO KNOW ABOUT DRAFTING A WILL DO I NEED A WILL? Yes. If you own any properties/assets or monies, we",
    },
    {
      id: 7,
      img: "https://singhania.in/admin/newsimage/news-1637743257.jpg",
      title: 'Appeal No. 47',
      path: '/appeal',
      content: "This appeal was taken on file on 24/7/2020 and came up for final hearing on 30/9/2020 in the presence of M/s P.K.Sreenivasan, A.",
    },
    {
      id: 8,
      img: "https://raghava-legal.com/wp-content/uploads/2024/05/OIP-1.jpeg",
      title: 'CAB and NRC',
      path: '/nrc',
      content: "The introduction of CAB and NRC on December 12th has raised a lot of concerns within the nation with regard to their citizenship and how",
    },
    {
      id: 9,
      img: "https://gsbagga.com/wp-content/uploads/2015/06/family-courts.jpg",
      title: 'Can a complaint under S. 498A Indian Penal Code be made after a decree of divorce has been obtained?',
      path: '/penal',
      content: "Can a complaint under S. 498A Indian Penal Code be made after a decree of divorce has been obtained? The answer to this is simply NO. When a complainant",
    },
  ];

  const CardStyle = ({ title, img, content, path }) => (
    <div className="relative border p-4 rounded-lg h-90 flex flex-col justify-between gap-2">
    <Link to={path}>
      
        <img src={img} alt={`${title} `} className="my-4 w-full h-32 object-cover" />
        <div className="font-semibold text-lg text-blue-600 text-center h-30">{title}</div>
        <p className="font-bold text-sm text-center">{content}</p>
        
    </Link>
    </div>
  );

  return (
    <div>
      <p className="text-2xl font-bold mb-4 text-center mt-5">____ Our Blogs ____</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 m-8 ">
        {List.map((value) => (
          <CardStyle
            key={value.id}
            title={value.title}
            img={value.img}
            content={value.content}
            path={value.path}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
