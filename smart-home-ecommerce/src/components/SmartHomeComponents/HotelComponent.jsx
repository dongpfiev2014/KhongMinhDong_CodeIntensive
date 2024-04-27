import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getContent } from "../../Redux-reducer/data";
import { Flex, Row } from "antd";

const HotelComponent = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  const [content, setContent] = useState(null);

  useEffect(() => {
    dispatch(getContent({ category: id })).then((action) => {
      const listContents = action.payload;
      console.log(listContents);
      setContent(listContents[listContents.length - 1].content);
    });
  }, [dispatch, id]);

  return (
    <>
      <Flex
        style={{
          backgroundColor: mode ? "#001529" : "white",
        }}
        justify="center"
        align="center"
      >
        <Row
          style={{
            width: "1400px",
            minHeight: "75vh",
            backgroundColor: mode ? "#001529" : "white",
          }}
        >
          <div
            className="CKeditor"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </Row>
      </Flex>
    </>
  );
};

export default HotelComponent;