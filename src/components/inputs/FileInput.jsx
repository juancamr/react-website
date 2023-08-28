import React, { useState } from "react";

const FileInput = ({ label, selectedFile, setSelectedFile }) => {
  const handleFileChange = (e) => {
    setSelectedFile(null);

    if (!e.target.files) return;
    if (e.target.files[0].type !== "application/pdf") {
      setError("El archivo debe ser PDF");
      return;
    } else if (e.target.files[0].size > 1000000) {
      setError("El archivo es demasiado grande");
      return;
    } else {
      const file = e.target.files[0];
      setError(null);
      setSelectedFile(file);
    }
  };
  const [error, setError] = useState(null);

  return (
    <div>
      <label className="p-3 rounded-lg border border-gray-300 space-x-3 flex cursor-pointer hover:bg-gray-100 transition-colors">
        <i class="fa-solid fa-file text-xl"></i>
        <p>{label}</p>
        <input
          accept=".pdf"
          onChange={handleFileChange}
          type="file"
          class="hidden"
        />
      </label>
      {selectedFile && (
        <p className="text-gray-500 text-sm">
          {selectedFile.name.length >= 15
            ? selectedFile.name.slice(0, 15) + "..."
            : selectedFile.name}{" "}
          ({(selectedFile.size / 1000).toFixed(0)} KB)
        </p>
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FileInput;
