import React, { useState, useEffect } from "react";

function ProdukList() {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/produk-skincares?populate=gambar")
      .then((res) => res.json())
      .then((json) => {
        console.log("Fetch result:", json.data);
        setProduk(json.data || []);
      })
      .catch((err) => console.error("Gagal fetch data:", err));
  }, []);

  if (!produk.length) return <p>Loading...</p>;

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Produk Skincare</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
        }}
      >
        {produk.map((item) => {
          // Destructure langsung dari item
          const { id, nama_produk, harga, deskripsi, gambar } = item;

          // Ambil objek gambar pertama (jika ada)
          const firstImg = Array.isArray(gambar) ? gambar[0] : null;
          const rawUrl = firstImg?.url || firstImg?.formats?.medium?.url;
          const imgUrl = rawUrl ? `http://localhost:1337${rawUrl}` : null;

          // Ambil teks deskripsi pertama (blok pertama, child pertama)
          const descText = deskripsi?.[0]?.children?.[0]?.text;

          return (
            <div
              key={id}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h2 style={{ margin: "0 0 0.5rem" }}>{nama_produk}</h2>
              <p style={{ margin: "0.25rem 0" }}>Harga: Rp {harga}</p>
              {descText && (
                <p style={{ fontSize: "0.9rem", color: "#555" }}>
                  {descText}
                </p>
              )}
              {imgUrl && (
                <img
                  src={imgUrl}
                  alt={nama_produk}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginTop: "0.5rem",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProdukList;
