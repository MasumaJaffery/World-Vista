// pop.test.js

const { getCommentCount } = require('../modules/comment.js');

describe('Comment Counter', () => {
  test('returns "Comment (0)" when there are no comments', () => {
    const commentsList = {
      childElementCount: 0,
    };
    const commentCount = getCommentCount(commentsList);
    expect(commentCount).toBe('Comment (0)');
  });
  
  test('returns "Comment (1)" when there is one comment', () => {
    const commentsList = {
      childElementCount: 1,
    };
    const commentCount = getCommentCount(commentsList);
    expect(commentCount).toBe('Comment (1)');
  });

  test('returns the correct comment count when there are multiple comments', () => {
    const commentsList = {
      childElementCount: 5,
    };
    const commentCount = getCommentCount(commentsList);

    expect(commentCount).toBe('Comment (5)');
  });

  test('handles comments count greater than 1,000', () => {
    const commentsList = {
      childElementCount: 1234,
    };
    const commentCount = getCommentCount(commentsList);
    expect(commentCount).toBe('Comment (1234)');
  });

  test('handles comments count equal to 1', () => {
    const commentsList = {
      childElementCount: 1,
    };
    const commentCount = getCommentCount(commentsList);
    expect(commentCount).toBe('Comment (1)');
  });

});
