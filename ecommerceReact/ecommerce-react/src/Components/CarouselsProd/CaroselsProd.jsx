import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel, Card, CardGroup } from "react-bootstrap/";
import "./style.css";

export default function CaroselsProd() {
  const category = ["men's clothing", "jewelery"]; // lascio statica convertire in chiamata get al server

  const [newProdCategory, setNewProdCategory] = useState([]);

  const getDataProd = async () => {
    const response = await axios.get("http://localhost:3000/product");
    filterDataProd(response.data);
  };

  function filterDataProd(data) {
    let tmp = [];
    for (let i = 0; i < category.length; i++) {
      let filteredData = data.filter((item) => item.category === category[i]);
      if (filteredData) {
        tmp.push(filteredData);
      }
    }
    setNewProdCategory(tmp);
  }

  useEffect(() => {
    getDataProd();
  }, []);

  return (
    <>
      <Carousel variant="dark">
        {newProdCategory.map((element,index) => (
          <Carousel.Item key={index}
            style={{ width: "100%", height: "60%", justifyContent: "center" }}
          >
            <div style={{ width: "80%" }}>
              <CardGroup>
                {element
                  ? element.map((item) => (
                      <>
                        <Card
                          key={item.id}
                          style={{
                            padding: "5px",
                            margin: "5px",
                            border: "3px solid black ",
                            borderEndStartRadius: "60px 20px",
                          }}
                        >
                          <Card.Img
                            variant="top"
                            src={item.image}
                            style={{
                              width: "360px",
                              height: "530px",
                              objectFit: "contain",
                            }}
                          />
                          <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text></Card.Text>
                          </Card.Body>
                        </Card>
                      </>
                    ))
                  : null}
              </CardGroup>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
