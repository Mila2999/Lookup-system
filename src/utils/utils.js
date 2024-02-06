export function generateUserTitle(fullName) {
  const [firstName, lastName] = fullName.split(' ');

  const firstLetterFirstName = firstName.charAt(0);
  const firstLetterLastName = lastName.charAt(0);

  const title = `${firstLetterFirstName}${firstLetterLastName}`;
  return title;
}

export function cutUserName(fullName) {
  const [firstName, lastName] = fullName.split(' ');
  return `${firstName} ${lastName}`;
}

///////////////////////////
