function logOutUser(navigate) {
    // Clear local storage or perform any logout logic
    localStorage.clear();

    // Redirect to login or home page
    navigate('/login'); // or navigate('/') depending on your route
}

export default logOutUser;