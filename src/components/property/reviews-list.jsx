import React from "react";
import {COMMENTS_TYPE} from "../types";
import {ReviewsItem} from "./reviews-item";


export const ReviewsList = ({comments}) => {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <ReviewsItem key={comment.id} review={comment} />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = COMMENTS_TYPE;
