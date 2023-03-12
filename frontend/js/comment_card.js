const makeCommentCard = (comment) => {
  const message = document.createElement('div');
  message.classList = 'revue_card';

  const commentName = document.createElement('span');
  commentName.textContent = comment.name;
  message.appendChild(commentName);

  const commentImg = document.createElement('img');
  // eslint-disable-next-line no-undef, space-infix-ops
  // commentImg.src = comment.["profile-picture"];
  commentImg.alt = `${comment.name}'s profile picture`;
  message.appendChild(commentImg);

  message.innerHTML += `<p><strong><q>${comment.message}</q></strong>
  </p>`

  return message;
};

export default makeCommentCard;
