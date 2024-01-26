import { Link } from "react-router-dom";

const CompanyCard = ({ handle, name, description, numEmployees, logoUrl }) => {
  return (
    <>
      <div className="bg-gray-500 m-5 p-2 rounded-lg shadow-md max-w-3xl">
        {/* <img src={logoUrl} alt={`${companyName} logo`} /> */}
        <h3 className="text-2xl ">{name}</h3>{" "}
        <span>{numEmployees} employees</span>
        <div className="text-left p-2">
          <p>{description}</p>
        </div>
        <Link to={`/companies/${handle}`}>
          <button>See Jobs</button>
        </Link>
      </div>
    </>
  );
};

export default CompanyCard;
