export const getContactList = () =>{
  return  fetch(" https://demo.sibers.com/users").then(response => response.json())
}
