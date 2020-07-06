import React from "react";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { startLoader, stopLoader } from "../loaderUtils/loaderUtils";
class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Id",
          field: "id",
        },
        {
          headerName: "Book Name",
          field: "bookName",
        },
        {
          headerName: "Author Name",
          field: "authorName",
        },
        {
          headerName: "Created By",
          field: "createdBy",
        },
        {
          headerName: "Updated By",
          field: "updatedBy",
        },
      ],
      rowData: [],
    };
    this.getBooks = this.getBooks.bind(this);
    this.getBooks();
  }

  getBooks() {
    startLoader();
    axios
      .get("http://localhost:8080/api/books", { crossdomain: true })
      .then((res) => {
        this.setState({ rowData: res.data });
      });
    stopLoader();
  }

  render() {
    return (
      <div
        className="ag-theme-alpine"
        style={{
          height: "500px",
          width: "1000px",
        }}
      >
        <Button variant="primary" size="sm" onClick={this.getBooks}>
          Reload
        </Button>
        <AgGridReact
          pagination={true}
          paginationPageSize={10}
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        ></AgGridReact>
      </div>
    );
  }
}

export default BooksList;
