import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { API_URL } from "../utils/constants";
const UxComponent = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [outputFormat, setOutputFormat] = useState("");

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
  };

  const handleOutputFormatChange = (event) => {
    setOutputFormat(event.target.value);
  };
  const convertir = async () => {
    const formData = new FormData();
    formData.append("outputFormat", outputFormat);

    // Agregar cada archivo seleccionado al objeto FormData
    selectedImages.forEach((file) => {
      formData.append("imagenes", file);
    });

    try {
      const response = await axios.post(
        `${API_URL}/api/image-converter`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          responseType: "blob",
        } // Agregar responseType: "blob" para recibir la respuesta como blob
      );

      // Crear un enlace para descargar el archivo
      const downloadLink = document.createElement("a");
      const blob = new Blob([response.data]);
      const url = URL.createObjectURL(blob);
      downloadLink.href = url;
      downloadLink.download = "converted_images.zip"; // Nombre del archivo descargado
      downloadLink.click();

      // Limpiar el objeto URL y liberar memoria
      URL.revokeObjectURL(url);
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
        <label htmlFor="output-format">Formato de salida:</label>
        <select
          id="output-format"
          className="form-control"
          value={outputFormat}
          onChange={handleOutputFormatChange}
        >
          <option value="">Seleccionar formato de salida</option>
          <option value="webp">WEBP</option>
          <option value="png">PNG</option>
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
