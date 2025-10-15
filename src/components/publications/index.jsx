import React from "react";
import PublicationLayout from "./PublicationLayout";

const PublicationList = ({ publications }) => {
  return (
    <div className="w-full  h-auto flex flex-col items-center justify-center space-y-6 md:space-y-8">
      <div className="w-full max-w-4xl px-4 xl:px-0 space-y-6 md:space-y-8 flex flex-col items-center">
        {publications.map((publication, index) => {
          return <PublicationLayout key={index} {...publication} />;
        })}
      </div>
    </div>
  );
};

export default PublicationList;
