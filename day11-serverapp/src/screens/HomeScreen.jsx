import React, { useEffect, useState } from "react";
import { Button, List } from "antd";
import axios from "axios";
import axiosClient from "../apis/axiosClients";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  // Is Loading
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  /*
    REST API

    GET : đọc/lấy dữ liệu
    DELETE : xóa 

    POST : tạo mới - cần truyền data
    PUT : cập nhật - cần truyền data

    PATCH 

   */

  const getPosts = async () => {
    setIsLoading(true);
    const api = `/posts`;
    setTimeout(async () => {
      // try catch - get data by api - Used by Fetch API - JS

      //   try {
      //     const requestOptions = {
      //       method: "GET",
      //       redirect: "follow",
      //     };

      //     const response = await fetch(api, requestOptions);
      //     const results = await response.json();
      //     setPosts(results);
      //     setIsLoading(false);
      //   } catch (error) {
      //     console.log(error);
      //     setIsLoading(false);
      //   }

      try {
        // try catch - get data by api - Used by NodeJS - Axios

        // const res = await axios.get(api);
        // if (res.status === 200 && res.data) {
        //   setPosts(res.data);
        //   setIsLoading(false);
        // }

        //try catch - get data by api - Used by Axios Client

        const res = await axiosClient.get(api, { method: "get" });
        setPosts(res);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 1500);
  };

  // Ham update button
  const handleUpdate = () => {
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
    }, 5000);
  };

  return (
    <div>
      <div className="container">
        <div className="col-8 col-offset-2">
          <Button onClick={handleUpdate} loading={isUpdating}>
            Update
          </Button>
          {"   "}
          <Link to={"/register"}>Register</Link>
          <List
            loading={isLoading}
            dataSource={posts}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta title={item.title} description={item.body} />
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
