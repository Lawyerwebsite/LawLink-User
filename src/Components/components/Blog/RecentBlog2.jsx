import React from 'react';

const RecentBlogs = () => {
    return (
        <div>
            <div className="relative w-full h-64">
                <img
                    src="https://daijiworld.ap-south-1.linodeobjects.com/iWeb/daijiworld/images3/allwyn_160921_divorce.jpg"
                    alt="Divource"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-xl text-center px-4 font-bold">
                        Divorce Case Investigation
                    </h1>
                </div>
            </div>

            <div className="w-full max-w-7xl p-8 mt-20 mb-8 sm:w-11/12 sm:h-auto bg-white shadow-xl rounded-lg mx-auto ">

                <div className="p-6">
                    <h2 className="font-bold text-2xl mb-4 text-center">
                        In a Significant Decision, Supreme Court grants relief to wife reversing the judgement of the Madras High Court
                        and grants Rs 1,75,000/- towards monthly maintenance to the wife
                    </h2>
                    <p className="text-gray-700 mb-4">
                        The Court allowed the appeal of the wife and set aside the order of the Madras High Court and restored the order of the Family Court.
                        The husband was directed to pay a sum of Rs. 1,75,000 per month as interim maintenance
                    </p> <br />
                    <p className="text-gray-700 mb-4">
                        The wife is entitled to the same standard of living during the divorce proceedings
                        as what she enjoyed during the marriage.
                    </p> <br />
                    <p className="text-gray-700">
                        the wife living separately from the husband is entitled to get maintenance.
                    </p> <br />
                    <p className="text-gray-700">
                        if she is living in adultery, or if, without any sufficient reason, she refuses
                        to live with her husband, or if they are living separately by mutual consent.
                    </p> <br />
                    <p className="text-gray-700">
                        Yes, it is quite possible that the court can force the husband to stay with the wife in RCR case.
                    </p> <br />
                    <p className="text-gray-700">The Family Court upon perusal of records and
                        evidence on both sides in order to fix interim
                        maintenance, found that it is clear that after
                        desertion, the appellant wife had no other place to
                        reside and thus, chose to seek shelter with her
                        mother-in law, who is aged 93 years. Later on,
                        considering the health of the aged mother-in law, the
                        appellant wife started residing with her elder brother.
                        Family Court also observed that the respondent
                        husband failed to produce his income tax returns.
                        However, documents produced by the appellant and
                        evidence of both parties in this regard would clearly
                        reflect the fact that the respondent is a renowned
                        expert in cardiology and has a number of worthful
                        properties and is the only legal heir to his father who
                        has passed away. His mother is running the age of
                        93. He is accruing all the incomes from the properties
                        owned by his mother and himself and is also found
                        to have been in possession of a school, though it is
                        stated to be running in losses. </p>
                </div>
            </div>
        </div>
    );
};

export default RecentBlogs;

