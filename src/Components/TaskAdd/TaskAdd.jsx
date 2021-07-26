import axios from "axios";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const TaskAdd = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => { 
    const task = data;
      task.status = "active"
      
      fetch('http://localhost:8000/task', {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify(task)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          event.target.reset();
      })
    };
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h3 className="text-center mt-3">Add new task</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Task name</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="Write your task name here"
                  {...register("title", { required: true })}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description of your task</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Write your description here"
                  as="textarea"
                  rows={3}
                  {...register("description", { required: true })}
                />
              </Form.Group>
              <div className="">
                <Button
                  variant="outline-primary"
                  type="submit"
                  className="px-5"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TaskAdd;
