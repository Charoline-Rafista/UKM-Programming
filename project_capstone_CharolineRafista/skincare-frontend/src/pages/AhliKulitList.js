import React, { useState, useEffect } from "react";

function AhliKulitList() {
  const [ahli, setAhli] = useState([]);

  useEffect(() => {
    // Fetch dari endpoint Strapi, pastikan endpoint dan populate sesuai
    fetch("http://localhost:1337/api/ahli-kulits?populate=foto")
      .then((res) => res.json())
      .then((json) => {
        console.log("Fetch ahli kulit:", json.data);
        setAhli(json.data || []);
      })
      .catch((err) => console.error("Gagal fetch data ahli kulit:", err));
  }, []);

  if (!ahli.length) return <p>Loading...</p>;

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Daftar Ahli Kulit</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {ahli.map((item) => {
          // Sesuaikan destrukturisasi dengan struktur respons-mu:
          // Jika Strapi v4 default: const { id, attributes } = item;
          //             const { nama, bio, foto } = attributes;
          // Tapi kalau fieldnya flat (tanpa attributes), langsung:
          const { id, nama, bio, foto } = item;

          // Ambil gambar pertama
          const firstImg = Array.isArray(foto) ? foto[0] : foto;
          // Bisa jadi url di bawah langsung .url atau .formats.medium.url
          const rawUrl = firstImg?.url || firstImg?.formats?.medium?.url;
          const imgUrl = rawUrl ? `http://localhost:1337${rawUrl}` : null;

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
              {imgUrl && (
                <img
                  src={imgUrl}
                  alt={nama}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              )}
              <h2 style={{ margin: "0.5rem 0 0.25rem" }}>{nama}</h2>
              {bio && (
                <p style={{ fontSize: "0.9rem", color: "#555" }}>{bio}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AhliKulitList;
