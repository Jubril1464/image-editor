"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../../utils/localstorage";

export default function EditImage() {
  const { id } = useParams(); 

  const [width, setWidth] = useState(300); 
  const [height, setHeight] = useState(300); 
  const [greyscale, setGreyscale] = useState(false); 
  const [blur, setBlur] = useState(0); 

  const [imageUrl, setImageUrl] = useState(
    `https://picsum.photos/id/${id}/${width}/${height}`
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedWidth = getFromLocalStorage("width");
    const savedHeight = getFromLocalStorage("height");
    const savedGreyscale = getFromLocalStorage("greyscale");
    const savedBlur = getFromLocalStorage("blur");

    if (savedWidth) setWidth(savedWidth);
    if (savedHeight) setHeight(savedHeight);
    if (savedGreyscale) setGreyscale(savedGreyscale);
    if (savedBlur) setBlur(savedBlur);
  }, []);

  useEffect(() => {
    if (!mounted) return; 

    let url = `https://picsum.photos/id/${id}/${width}/${height}`;

    if (greyscale) url += `?grayscale`;
    if (blur > 0) url += (url.includes("?") ? "&" : "?") + `blur=${blur}`;

    setImageUrl(url);

    saveToLocalStorage("width", width);
    saveToLocalStorage("height", height);
    saveToLocalStorage("greyscale", greyscale);
    saveToLocalStorage("blur", blur);
  }, [id, width, height, greyscale, blur, mounted]); 

  if (!mounted) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-4">
    <div className="w-full md:w-1/2">
          <img
            src={imageUrl}
            alt="Edited Preview"
            className="rounded shadow"
            width={`${width}px`}
            height={`${height}px`}
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <label className="block text-sm">Width</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="border rounded w-full p-2"
            />
          </div>

          <div>
            <label className="block text-sm">Height</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="border rounded w-full p-2"
            />
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={greyscale}
                onChange={(e) => setGreyscale(e.target.checked)}
                className="mr-2"
              />
              Greyscale
            </label>
          </div>

          <div>
            <label className="block text-sm">Blur (0-10)</label>
            <input
              type="range"
              min="0"
              max="10"
              value={blur}
              onChange={(e) => setBlur(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <a
              href={imageUrl}
              download={`edited-image.jpg`}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Download Image
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
