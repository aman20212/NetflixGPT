export const checkValidData = (name, email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);

    if (name?.length > 0 && !/^[a-zA-Z\s]+$/.test(name)) {
        return 'Name can only contain letters and spaces.';
    }

    if (!isEmailValid) {
        return 'Please provide valid email.'
    }
    if (!isPasswordValid) {
        return 'Password criteria not met!'
    }
    return null;
}