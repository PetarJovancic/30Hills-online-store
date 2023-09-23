import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import React, { useState } from "react";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import CategoryFilter from "../components/CategoryFilter";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("asc");

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
    category,
    sortBy,
  });

  const categoryHandler = (category) => {
    setCategory(category);
  };

  const handleSortChange = (sortBy) => {
    console.log(sortBy);
    setSortBy(sortBy);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1>Products</h1>
          <CategoryFilter
            category={category}
            onCategoryChange={categoryHandler}
            sortBy={sortBy}
            onSortChange={handleSortChange}
          />
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
