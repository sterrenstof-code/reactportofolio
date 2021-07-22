import "./portofolio.scss";
import PortofolioList from "../portofolioList/portofolioList";
import { useState, useEffect } from "react";
import {
  featuredPortofolio,
  designPortofolio,
  contentPortofolio,
  webPortofolio,
  mobilePortofolio,
} from "../../data";

function Portofolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortofolio);
        break;
      case "web":
        setData(webPortofolio);
        break;
      case "mobile":
        setData(mobilePortofolio);
        break;
      case "content":
        setData(contentPortofolio);
  
        break;
        default: setData(featuredPortofolio);
    }
  }, [selected]);

  return (
    <div className="portofolio" id="portofolio">
      <h1>Portofolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortofolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className="container">
        {data.map((item)=> {
          return  <div className="item">
          <img src={item.img} alt="" />
          <h3>{item.title}</h3>
        </div>
        })}
       
      </div>
    </div>
  );
}

export default Portofolio;
