import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

function FileUpload() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileClick = () => {
    fileInputRef.current.click(); // Trigger the hidden file input
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : ""); // Update the file name state
  };

  const handleRemoveFile = () => {
    setFileName("");
    fileInputRef.current.value = ""; // Clear the file input
  };

  return (
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Control
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange} // Trigger file name update on change
      />
      <div className="file_upload d-flex justify-content-between">
        <div>
          <Button className="upload-btn me-2" onClick={handleFileClick}>
            Upload CV
          </Button>
          <span>{fileName || ""}</span>{" "}
          {/* Display the file name or a placeholder */}
        </div>
        <Button
          className="upload-btn xs rounded-5 px-4"
          onClick={handleRemoveFile}
          disabled={!fileName} // Disable remove button if no file is chosen
        >
          REMOVE
        </Button>
      </div>
    </Form.Group>
  );
}

export default FileUpload;
