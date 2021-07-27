import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { FcApproval, FcFullTrash } from "react-icons/fc";
import { AllContextData } from "../../App";

const ShowTask = () => {
  const {allTask, setAllTask} = useContext(AllContextData)

  useEffect(() => {
    axios.get("http://localhost:8000/task").then((data) => {
      setAllTask(data.data.result);
    });
  }, []);

  const updateTask = (id) => {
      fetch(`http://localhost:8000/task/${id}`, {
        method: 'PUT',
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if(data){
          const da = allTask.map(t => {
            if(t._id === id) {
              const updatedItem = {
                ...t,
                status: 'done',
              }
              return updatedItem;
            }
            return t;
            })
            setAllTask(da);
        }
      })
  }

  const deleteTask = (id) => {
    fetch(`http://localhost:8000/task/${id}`, {
      method: 'DELETE'
  })
  .then(data => {
      console.log(data);
      if(data){
        const remainingTask = allTask.filter(task => task._id !== id);
        setAllTask(remainingTask)
      }
  })
  }

  return (
    <div>
      <h3 className="text-center mt-3">Your all tasks</h3>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            {allTask &&
              allTask.map((data) => (
                <>
                  <Row className="bg-light text-muted mt-3 p-4">
                    <Col sm={10}>
                      <h5>
                        Task: {data.title}
                        {data.status === "done" ? (
                          <Badge bg="danger" className="ml-2">
                            {data.status}
                          </Badge>
                        ) : (
                          <Badge className="ml-2" bg="success">
                            {data.status}
                          </Badge>
                        )}
                      </h5>
                      <small>Description: {data.description}</small>
                    </Col>
                    <Col sm={2}>
                      <span onClick={() => deleteTask(data._id)} style={{cursor: 'pointer'}}>
                        <FcFullTrash />
                      </span>
                      <span onClick={() => updateTask(data._id)} style={{cursor: 'pointer'}}>
                        <FcApproval />
                      </span>
                    </Col>
                  </Row>
                </>
              ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShowTask;
