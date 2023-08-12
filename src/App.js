import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function App() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNumber: "",
  });

  const [selectOption, setSelectOption] = useState("");

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const selectedItem = e.target.value;
    setSelectOption(selectedItem);
  };

  const handleEntries = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]);
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      fname: "",
      lname: "",
      email: "",
      phoneNumber: "",
    });
    setSelectOption("");
  };
  const cardStyle = {
    backgroundColor: "rgba(0, 140, 123, 0.39)",
    padding: "20px",
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6  offset-md-3 mt-5 ">
            <Card
              className=" text-black shadow-lg p-3 mb-5 bg-white rounded"
              style={cardStyle}
            >
              <Card.Body>
                {/* <Card.Title>
                  <h1 className="mb-5">Registration Form</h1>
                </Card.Title> */}
                <Form onSubmit={handleSubmit} value={data}>
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3 col-sm-12"
                        controlId="firstName"
                      >
                        <Form.Label>
                          <h5>First Name</h5>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          class="form-control"
                          controlId="firstName"
                          name="fname"
                          value={formData.fname}
                          onChange={handleEntries}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3 col-sm-12"
                        controlId="lastName"
                      >
                        <Form.Label>
                          <h5>Last Name</h5>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          class="form-control"
                          controlId="lastName"
                          name="lname"
                          value={formData.lname}
                          onChange={handleEntries}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3 col-sm-9" controlId="select">
                        <Form.Label>
                          <h5>How should we contact you ?</h5>
                        </Form.Label>
                        <Form.Select
                          controlId="select"
                          value={selectOption}
                          onChange={handleChange}
                          defaultValue="Choose..."
                        >
                          <option value="Phone Number">...Choose</option>
                          <option value="Phone Number">Phone Number</option>
                          <option value="Email ID">Email ID</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    {selectOption === "Phone Number" && (
                      <Col>
                        <Form.Group
                          className="mb-3 col-sm-6"
                          controlId="phoneNumber"
                        >
                          <Form.Label>
                            <h5>Phone Number</h5>
                          </Form.Label>
                          <Form.Control
                            value={formData.phoneNumber}
                            name="phoneNumber"
                            onChange={handleEntries}
                            type="phoneNumber"
                            controlId="phoneNumber"
                          />
                        </Form.Group>
                      </Col>
                    )}

                    {selectOption === "Email ID" && (
                      <Col>
                        <Form.Group
                          className="mb-3 col-sm-6"
                          controlId="Email ID"
                        >
                          <Form.Label>
                            <h5>Email ID</h5>
                          </Form.Label>
                          <Form.Control
                            value={formData.email}
                            name="Email ID"
                            onChange={handleEntries}
                            type="Email ID"
                            controlId="Email ID"
                          />
                        </Form.Group>
                      </Col>
                    )}
                  </Row>
                </Form>
                {/* <div className="mb-2">
                  <Button
                    variant="primary"
                    size="md"
                    style={{ fontWeight: "bold" }}
                  >
                    SUBMIT
                  </Button>{" "}
                  <Button
                    style={{ fontWeight: "bold" }}
                    onClick={handleReset}
                    type="reset"
                    variant="secondary"
                    size="md"
                  >
                    RESET
                  </Button>
                </div> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
