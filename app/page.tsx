"use client";

import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import Pagination from "./components/Pagination";


export default function Gallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=9`
      );
      const data = await response.json();
      setImages(data);
      setLoading(false);
    };

    fetchData();
  }, [page]);

  return (
    <div className="p-6">
      {loading ? (
        <div className="flex justify-center items-center h-full">
         <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-5 gap-5">
            {images.map((image: any) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
          <Pagination currentPage={page} onPageChange={setPage} />
        </>
      )}
    </div>
  );
}
