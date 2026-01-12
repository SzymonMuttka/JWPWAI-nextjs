'use client';

import { useRef, useState } from 'react';

export default function ImagePicker({ onPick }) {
  const inputRef = useRef();
  const [preview, setPreview] = useState(null);

  function handleChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    onPick(file);
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        hidden
        onChange={handleChange}
      />

      {preview && <img src={preview} width={200} />}
    </div>
  );
}
