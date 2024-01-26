const JobCard = ({title, salary, equity, id, companyName} ) => {
  return (
    <>
      <div className="bg-slate-500 m-7 p-5 rounded-lg">
      <h3 className="text-2xl">{title}</h3>
      <h4>{companyName}</h4>
      <h3>${salary || 0} salary & {(equity*100).toFixed(2)}% equity</h3>
      <div><button>Apply</button></div>
      </div>
      
    </>
  );
};

export default JobCard;
