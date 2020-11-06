const getUserFriends = async () => {
  const user = await fetch('/user-profile');
  const idList = await fetch(`/users/${user.id}/friends`);

  const promises = idList.map(id => fetch(`/users/${id}`));
  const friends = await Promise.all(promises);

  return friends;
};

// Асинхронная функция всегда вернет промис
getUserFriends().then(friends => console.log(friends));
