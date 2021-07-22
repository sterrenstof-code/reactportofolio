import "./portofolioList.scss";

const portofolioList = ({ title, active, setSelected, id }) => {
  return (
    <li
      className={active ? "portofolioList active" : "portofolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default portofolioList;
