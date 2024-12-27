import React from "react";
import NavbarComp from "../../ReusableComponents/NavbarComponent";
import Footer from "../Footer";

const Details = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center ">
      <NavbarComp/>
      <div className="bg-white md:p-12 rounded-lg shadow-lg max-w-4xl w-full mt-10 mb-10">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Family Courts grant divorce on the grounds of mutual consent</h1>
        <div className="text-gray-700 space-y-6">
          <p>
          Family courts in India, under Section 13B of the Hindu Marriage Act, 1955, and corresponding provisions in other personal laws, allow 
          couples to seek divorce based on mutual consent. This process simplifies divorce proceedings, as both parties agree to end their marriage
          amicably without contesting each other.
          </p>
          <p>
          The couple must have lived separately for at least one year before filing the petition. "Living separately" does not necessarily mean
           physical separation but refers to living without any conjugal relationship.
          </p>
          <ol className="list-decimal list-inside space-y-4">
            <li className="font-semibold">Joint Petition</li>
            <p>
            A joint petition is filed by both parties before the family court, stating that 
            they cannot continue living together and have mutually agreed to divorce.
            </p>
            <li className="font-semibold">Agreement on Matters</li>
            <p>
            Before filing, issues such as custody of children, maintenance (alimony), and division of property
             (assets and liabilities) must be settled through mutual understanding.
            </p>
            <li className="font-semibold">Separation Period</li>
            <p>
            The consent of both parties must be free, voluntary, and not obtained 
            through force, fraud, or undue influence.
            </p>
            <li className="font-semibold">Hindu Marriage Act, 1955 (Section 13B)</li>
            <p>
            Provides for mutual consent divorce among Hindus, Sikhs, Buddhists, and Jains.


            </p>
            <li className="font-semibold">Special Marriage Act, 1954 (Section 28)</li>
            <p>
            Applicable to marriages registered under this Act, which typically involves inter-religious or court marriages.
            </p>
            <li className="font-semibold">Indian Divorce Act, 1869 (Section 10A)</li>
            <p>
            Governs mutual consent divorce for Christians in India
            </p>
            <li className="font-semibold">Muslim Personal Law</li>
            <p>
            Divorce by mutual consent is recognized under Mubarat, where both parties agree to end the marriage.
            </p>
            <li className="font-semibold">Parsi Marriage and Divorce Act, 1936</li>
            <p>
            Parsis can seek divorce by mutual consent under the provisions of this Act.
            </p>
            <li className="font-semibold">Cooling-off Period (6 Months)</li>
            <p>
            The Supreme Court, in the case Amardeep Singh v. Harveen Kaur (2017), ruled that the cooling-off period 
            can be waived if the couple has resolved all issues and there is no chance of reconciliation.
            </p>
          </ol>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Details;
