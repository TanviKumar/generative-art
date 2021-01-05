import React, { useState, useEffect } from "react";
import "./DashBoard.css";
import Card from "../Card/Card";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Axios from "axios";
import Pagination from "../Pagination"


export default function DashBoard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("./data.json")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);
  console.log(data);

  {/* Here we are showing 6 cards/perpage. Therefore showPerPage =6 and making start=0 & end=6 which will show the cards with index 0 to 5*/}

const[showPerPage,setShowPerPage]=useState(6);
  const [pagination,setPagination]=useState({
    start:0,
    end:showPerPage,
  })


  {/* Setting the pagination */}

const onPaginationChange = (start,end)=>{
setPagination({start:start,end:end});
}

  return (
    <div className="dashboard">
      <h1 className="title">Generative Art for All</h1>
      <Container style={{ margin: "5% auto" }}>
        <Grid container spacing={2}>
          {data.slice(pagination.start,pagination.end).map((content) => {
            return (
              <Grid item xl={4} l={4} xs={12} sm>
                <Container style={{ margin: "40px 0" }}>
                  <Card
                    name={content.name}
                    desc={content.desc}
                    image={content.image}
                    linkUrl={content.linkUrl}
                    codeUrl={content.codeUrl}
                    author={content.author}
                  ></Card>
                </Container>
              </Grid>
            );
          })}
        </Grid>
        {/* Pagination buttons here */}
        <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={data.length}/>
      </Container>
    </div>
  );
}