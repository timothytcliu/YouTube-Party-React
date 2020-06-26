import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button, Form, FormGroup, Label, Input, Table } from "reactstrap";

function RenderTable(props) {
  const songs = props.data.upcomingSongs.map((song, index) => {
    return (
      <tr key>
        <td>{index + 1}</td>
        <td>{song}</td>
      </tr>
    );
  });

  return songs;
}

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingSongs: [],
      newSong: "",
      id: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      upcomingSongs: [...this.state.upcomingSongs, this.state.newSong],
      newSong: "",
      id: [...this.state.id, this.state.upcomingSongs.length],
    });
    console.log(this.songField);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;

    this.setState({
      newSong: value,
    });
  };

  render() {
    return (
      <>
        <Header room={this.props.roomData} />

        <div className="container">
          <div className="row">
            <div id="tables" className="col-md-5 ml-3 mr-3 mt-5">
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Song Title</th>
                  </tr>
                </thead>
                <tbody>
                  <RenderTable data={this.state} />
                </tbody>
              </Table>
            </div>
            <div className="col-md-5 ml-3 mr-3 mt-4 ml-md-5">
              <Form
                style={{ marginBottom: "100px" }}
                onSubmit={this.handleSubmit}
              >
                <FormGroup row>
                  <Label htmlFor="song">Add Song</Label>
                  <Input
                    className="mt-0"
                    type="text"
                    value={this.state.newSong}
                    id="song"
                    ref={(elem) => (this.songField = elem)}
                    name="song"
                    placeholder="Enter URL of Song"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Button size="lg" color="info">
                    Add
                  </Button>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Room;
