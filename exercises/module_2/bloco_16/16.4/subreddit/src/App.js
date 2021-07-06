import React from 'react';
import { Form, Button, Row, Card, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchThread } from './redux/actions';

export default function App() {
  const [thread, setThread] = useState({ term: '', results: '' });
  const dispatch = useDispatch();
  const reducer = useSelector((state) => state.threadReducer);

  useEffect(() => {
    if (reducer.payload !== thread.results) {
      setThread({ ...thread, results: reducer.payload });
      setTimeout(() => {}, 500);
    }
  }, [reducer.payload, thread]);

  const handleSelect = async ({ target }) => {
    const { value } = target;
    dispatch(fetchThread(value));
    setThread({ term: value, results: reducer.payload });
  };

  const getList = () => {
    if (thread.results) {
      return thread.results.map((el, index) => {
        const img = new Image(480, 320);
        img.src = el.data.thumbnail;
        const text = el.data.title;
        return (
          <Card key={index} style={{ width: '18rem', height: 'auto' }}>
            <a href={`https://reddit.com${el.data.permalink}`}>{text}</a>
            <Card.Img src={img.src} />
          </Card>
        );
      });
    }
  };

  const handleRefresh = async () => {
    setThread({ ...thread, results: '' });
    dispatch(fetchThread(thread.term));
    setTimeout(() => {
      console.log('fired');
      setThread({ ...thread, results: reducer.payload });
    }, 500);

    setThread({ ...thread, results: reducer.payload });
  };
  return (
    <div>
      <div>{reducer.subdata}</div>

      <Form className="w-75 m-5">
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Subreddit</Form.Label>
          <Row>
            <Form.Control
              as="select"
              defaultValue={'Choose...'}
              className="w-50"
              onChange={(e) => handleSelect(e)}
            >
              <option disabled style={{ display: 'none' }}>
                Choose...
              </option>
              <option>reactjs</option>
              <option>frontend</option>
            </Form.Control>
            <Button onClick={() => handleRefresh()} className="ml-3">
              Refresh
            </Button>
          </Row>
        </Form.Group>
      </Form>

      <h5> topics:</h5>
      <Col className="m-3">{getList()}</Col>
    </div>
  );
}
