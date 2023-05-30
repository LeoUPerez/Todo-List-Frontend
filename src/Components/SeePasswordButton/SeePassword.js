export function Seepassword (Input, PasswordBtn) {
    if (Input.current.type !== "password") {
        Input.current.type = "password";
        PasswordBtn.current.className = "fa-solid fa-eye-slash text-gray-400 text-xl absolute right-2 cursor-pointer"
    } else {
        Input.current.type = "text";
        PasswordBtn.current.className = "fa-solid fa-eye text-black text-xl absolute right-2 cursor-pointer"
    }
}