import React from "react";
import { CardImageProps } from "../../../../models/users";
import { url } from "../../../../environments/api";

const CardImage = ({
  containerClassName,
  imgClassName,
  avatar,
  firstname,
  lastname,
}: CardImageProps) => {
  return (
    <div className={containerClassName}>
      <img
        src={avatar.includes("avatar") ? `${url}/uploads/users/${avatar}` : avatar}
        alt="user-image"
        draggable="false"
        className={imgClassName}
      />
      {firstname && lastname && (
        <h2 className="full-name">
          {firstname} {lastname}
        </h2>
      )}
    </div>
  );
};

export default CardImage;
