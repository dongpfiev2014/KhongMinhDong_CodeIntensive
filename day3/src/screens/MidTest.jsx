import React from "react";
import "../styles/MidTest.css";
import { films } from "../data/MidTestFilms";
import { Breadcrumb, Layout, Menu, theme, Input } from "antd";
import MenuComponent from "../components/MenuComponent";
import ImageComponent from "../components/ImageComponent";
import TextComponent from "../components/TextComponent";
import FilmComponent from "../components/FilmComponent";
const { Header, Content } = Layout;

const MidTest = () => {
  const data = [...films];
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          padding: "0px 70px",
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "40px",
          paddingLeft: "60px",
          justifyContent: "space-between",
          backgroundColor: "#192026",
        }}
      >
        <div style={{ display: "flex", gap: "40px" }}>
          <div className="demo-logo" />
          <MenuComponent
            text="Anonime"
            fontSize="36px"
            fontWeight="700"
            color="#FFFFFF"
          />
          <MenuComponent
            text="Home"
            fontSize="18px"
            fontWeight="400"
            color="#868686"
          />
          <MenuComponent
            text="List anime"
            fontSize="18px"
            fontWeight="400"
            color="#868686"
          />
        </div>

        <Input
          placeholder="Search anime or movie"
          className="Input"
          style={{
            width: "375px",
            height: "48px",
            borderRadius: "37px",
            backgroundColor: "#374151",
            fontWeight: "400",
            color: "white",
            fontSize: "18px",
            border: "none",
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 135px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0 0 0",
            fontWeight: "600",
            fontSize: "32px",
            color: "white",
          }}
        >
          Explore
        </Breadcrumb>

        <Breadcrumb
          style={{
            margin: "0px 0 16px 0",
            fontWeight: "400",
            fontSize: "22px",
            color: "#868686",
          }}
        >
          What are you gonna watch today
        </Breadcrumb>

        <div
          style={{
            maxHeight: "500px",
            width: "100%",
            borderRadius: "15px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <ImageComponent imgSource={data[0].image} />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(269.96deg, rgba(29, 29, 29, 0) 0.04%, rgba(29, 29, 29, 0.8) 99.5%)",
            }}
          ></div>

          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "5%",
              color: "white",
              width: "45%",
              backgroundColor: "transparent",
            }}
          >
            <TextComponent
              text={data[0].movieName}
              fontSize="36px"
              fontWeight="600"
            />
            <TextComponent
              text={data[0].description}
              fontSize="16px"
              fontWeight="400"
              margin="15px 0 0 0"
            />
          </div>
        </div>
      </Content>
      <Content
        style={{
          padding: "0 135px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "14px 0",
            fontWeight: "600",
            fontSize: "32px",
            color: "white",
            marginBottom: "10px",
          }}
        >
          New Release
        </Breadcrumb>
        <div
          style={{
            padding: 0,
            minHeight: 380,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: 25,
            }}
          >
            {data.slice(1).map((item) => (
              <>
                <FilmComponent
                  key={`films${item.id}`}
                  imgSource={item.image}
                  episode={`Eposide ${item.episode}`}
                  movieName={item.movieName}
                ></FilmComponent>
              </>
            ))}
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default MidTest;
