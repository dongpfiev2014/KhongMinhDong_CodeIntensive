import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ProductDetail = () => {
  // Truyền searchParams vào Product Details: id
  const [searchParams] = useSearchParams();
  const key = searchParams.get("key");
  const name = searchParams.get("name");
  const userId = searchParams.get("userId");
  const id = searchParams.get("id");

  // Truyền searchParams vào bài post riêng lẻ
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (userId && id) {
      getPostDetail();
    }
  }, [id]);

  const getPostDetail = async () => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) => setPost(json));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <hr />
      <br />
      {/* Nhấn button để thay đổi key, name, id */}
      <h2>Products Details: </h2>
      <button
        onClick={() => {
          searchParams.set("id", "atm890");
          window.location.search = searchParams.toString();
        }}
      >
        Button
      </button>
      <br />
      <br />
      {/* Hiển thị bài Post riêng lẻ theo từng id */}
      <div>
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        )}
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default ProductDetail;
