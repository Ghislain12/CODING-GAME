export const validateEmail = (email) => {
    if (!email) {
        return "Email is required";
    }

    const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,10}$/;
    if (!emailRegex.test(email)) {
        return "Invalid email format";
    }
    return null;
};