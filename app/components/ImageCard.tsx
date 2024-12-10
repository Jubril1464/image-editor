import Link from "next/link";

export default function ImageCard({ image }:any) {
  return (
    <div className="border rounded shadow p-4 w-full">
      <Link href={`/edit/${image.id}`}>
      
        <img src={image.download_url} alt={image.author} className="rounded" />
      </Link>
      <p className="mt-2 text-sm text-gray-700">{image.author}</p>
    </div>
  );
}
