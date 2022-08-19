const makeCommentCard = (comment) => {
  const message = document.createElement('div');
  message.classList = 'comment';

  const commentName = document.createElement('p');
  commentName.textContent = comment.name;
  message.appendChild(commentName);

  const commentImg = document.createElement('img');
  // eslint-disable-next-line no-undef, space-infix-ops
  commentImg.src = comment.profile-picture;
  commentImg.alt = `${comment.name}'s profile picture`;
  message.appendChild(commentImg);

  const commentMessage = document.createElement('p');
  commentMessage.textContent = comment.message;
  message.appendChild(commentMessage);

  return message;
};

export default makeCommentCard;
