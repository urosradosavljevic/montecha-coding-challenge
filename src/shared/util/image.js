import { BASE_COVER_PATH } from "shared/constants/paths";

export const getImageByID = (id) =>
  `${BASE_COVER_PATH}b/id/${id}-M.jpg?default=false`;

export const getImageByIsbn = (isbn) =>
  `${BASE_COVER_PATH}b/isbn/${isbn}-M.jpg?default=false`;

export const getImageByCoverKey = (key) =>
  `${BASE_COVER_PATH}b/olid/${key}-M.jpg?default=false`;
