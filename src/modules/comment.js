// counter the number of
const getCommentCount = (commentsList) => {
  const commentCount = commentsList.childElementCount;
  return `Comment (${commentCount})`;
};

module.exports = { getCommentCount };
