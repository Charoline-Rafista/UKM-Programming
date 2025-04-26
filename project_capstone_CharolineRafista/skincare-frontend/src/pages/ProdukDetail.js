// src/pages/ProdukDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProdukById } from "../services/api";

function ProdukDetail() {
  const { id } = useParams();
  const [produk, setProduk] = useState(null);

  useEffect(() => {
    fetchProdukById(id)
      .then((res) => {
        setProduk(res.data.data);
      })
      .catch((err) => {
        console.error("Gagal fetch detail produk:", err);
      });
  }, [id]);

  if (!produk) return <p>Loading...</p>;

  const { nama_produk, harga, deskripsi, gambar } = produk.attributes;
  const imgUrl = gambar?.data?.attributes?.url;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{nama_produk}</h1>
      {imgUrl && (
        <img
          src={`http://localhost:1337${imgUrl}`}
          alt={nama_produk}
          className="mt-4 w-full h-64 object-cover rounded"
        />
      )}
      <p className="mt-4 text-gray-700">Harga: Rp {harga}</p>
      <p className="mt-2">{deskripsi}</p>
    </div>
  );
}

export default ProdukDetail;
