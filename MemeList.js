import React from "react";

const MemeList = ({ memes }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {memes.map((meme) => (
        <div
          key={meme.id}
          style={{
            backgroundColor: "#9DB6C1",
            padding: "16px",
            margin: "16px",
            width: "33.33%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "25px", // Add rounded corners
          }}
        >
          <img
            src={meme.image}
            alt={`Meme ${meme.id}`}
            style={{ maxWidth: "100%", borderRadius: "25px" }}
          />
          {/* Additional content for your card (optional) */}
        </div>
      ))}
    </div>
  );
};

export default MemeList;
