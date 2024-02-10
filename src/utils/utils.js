export function generateUserTitle(fullName) {
  if (!fullName || typeof fullName !== 'string') {
    return null;
  }

  const [firstName, lastName] = fullName.split(' ');

  const firstLetterFirstName = firstName.charAt(0);
  const firstLetterLastName = lastName.charAt(0);

  const title = `${firstLetterFirstName}${firstLetterLastName}`;
  return title;
}

export function cutUserName(fullName) {
  if (!fullName || typeof fullName !== 'string') {
    return null;
  }

  const [firstName, lastName] = fullName.trim().split(' ');
  return lastName ? `${firstName} ${lastName}` : `${firstName}`;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
