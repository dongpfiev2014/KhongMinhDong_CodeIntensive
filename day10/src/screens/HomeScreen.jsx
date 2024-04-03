import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeScreen = () => {
  /* Đưa thông tin search vào trang Search và hiển thị */
  const [searchKey, setSearchKey] = useState();

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchKey) {
      navigate(`/search?q=${searchKey}`);
    } else {
      alert("Error");
    }
    setSearchKey("");
  };

  // Example: Tìm kiếm bài Post

  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setPosts(json));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <hr />
      <br />
      <h2>HomeScreen</h2>
      <br />
      <br />
      <Link to={"/settings"}>Settings</Link>
      <br />
      <br />
      <Link to={"/products/69"}>Product 69</Link>
      <br />
      <br />
      {/* Đưa thông tin search vào trang Search và hiển thị */}
      <input
        type="text"
        name=""
        id=""
        value={searchKey}
        onChange={(val) => setSearchKey(val.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <br />
      <br />
      <br />
      {/* Nhấn button để thay đổi key, name, id */}
      <Link to={"/product-detail?key=value&name=abcd&id=1234"}>
        Product Details
      </Link>
      <br />
      <br />
      <br />
      {/* Tìm kiếm các bài post (dựa trên q or id của bài Post ) rồi hiển thị bài post đó */}
      <ul>
        {posts.length > 0 &&
          posts.map((item) => (
            <div key={item.id} style={{ margin: "15px" }}>
              <Link to={`/product-detail?userId=${item.userId}&id=${item.id}`}>
                <h2>{item.title}</h2>
              </Link>
              <p>{item.body}</p>
            </div>
          ))}
      </ul>
      <br />
      <hr />
    </div>
  );
};

export default HomeScreen;
