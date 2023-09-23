import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useGetCategoriesQuery } from "../slices/categoryApiSlice.js";

const CategoryFilter = ({
  category = "",
  onCategoryChange,
  sortBy = "asc",
  onSortChange,
}) => {
  const { data } = useGetCategoriesQuery({});

  return (
    <Form>
      <Row>
        <Col sm="auto">
          <Form.Group as={Row} controlId="categorySelect">
            <Form.Label column sm="auto">
              Filter by Category:
            </Form.Label>
            <Col sm="auto">
              <Form.Control
                as="select"
                onChange={(e) => onCategoryChange(e.target.value)}
                value={category}
              >
                <option value="">all</option>
                {data
                  ? data.map((item) => (
                      <option key={item._id} value={item.category}>
                        {item.category}
                      </option>
                    ))
                  : null}
              </Form.Control>
            </Col>
          </Form.Group>
        </Col>
        <Col sm="auto">
          <Form.Group as={Row} controlId="sortBySelect">
            <Form.Label column sm="auto">
              Sort By:
            </Form.Label>
            <Col sm="auto">
              <Form.Control
                as="select"
                onChange={(e) => onSortChange(e.target.value)}
                value={sortBy}
              >
                <option value="desc">descending</option>
                <option value="asc">ascending</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default CategoryFilter;
