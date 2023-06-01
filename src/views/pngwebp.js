import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const UxComponent = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [inputFormat, setInputFormat] = useState("");
  const [outputFormat, setOutputFormat] = useState("");

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
  };

  const handleInputFormatChange = (event) => {
    setInputFormat(event.target.value);
  };

  const handleOutputFormatChange = (event) => {
    setOutputFormat(event.target.value);
  };

  const convertir = async () => {
    const formData = new FormData();
    formData.append("inputFormat", inputFormat);
    formData.append("outputFormat", outputFormat);

    // Agregar cada archivo seleccionado al objeto FormData
    selectedImages.forEach((file) => {
      formData.append("imagenes", file);
    });

    try {
      const response = await axios.post(
        "http://192.168.1.121:4001/api/image-converter",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      // Manejar la respuesta de la API
      console.log(response.data);
    } catch (error) {
      // Manejar el error de la API
      console.error(error);
    }
  };

  return (
    <div className="mt-5 mb-5">
      <h3>PNG,WEBP CONVERTER</h3>
      <div className="my-3">
        <label htmlFor="image-upload">Seleccionar imágenes:</label>
        <input
          type="file"
          id="image-upload"
          className="form-control"
          multiple
          onChange={handleImageUpload}
        />
      </div>

      <div className="my-3">
        <label htmlFor="input-format">Formato de entrada:</label>
        <select
          id="input-format"
          className="form-control"
          value={inputFormat}
          onChange={handleInputFormatChange}
        >
          <option value="">Seleccionar formato de entrada</option>
          <option value="webp">WEBP</option>
          <option value="jpg">PNG</option>
        </select>
      </div>

      <div className="my-3">
        <label htmlFor="output-format">Formato de salida:</label>
        <select
          id="output-format"
          className="form-control"
          value={outputFormat}
          onChange={handleOutputFormatChange}
        >
          <option value="">Seleccionar formato de salida</option>
          <option value="webp">WEBP</option>
          <option value="jpg">PNG</option>
        </select>
      </div>
      <div className="my-3">
        <button className="btn btn-dark" onClick={() => convertir()}>
          CONVERTIR IMÁGENES
        </button>
      </div>
    </div>
  );
};

export default UxComponent;
