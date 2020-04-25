export const getAPI = () => {
    return window.location.hostname === "localhost" ?
     "http://localhost:3001" :
    "https://demo-corey-721.herokuapp.com"
}