"use client";

import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import Pagination from "./components/Pagination";
import { MutatingDots } from "react-loader-spinner";

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
          <MutatingDots
            color="#3B82F6"
            secondaryColor="#3B82F6"
            height={100}
            width={100}
            radius={12.5}
            ariaLabel="mutating-dots-loading"
            visible={true}
          />
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
