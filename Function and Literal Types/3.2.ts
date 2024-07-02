type UserRole = "admin" | "editor" | "viewer";

function getRoleMessage(role: UserRole): string {
    switch (role) {
        case "admin":
            return "Siz admin roli bilan kirdingiz.";
        case "editor":
            return "Siz editor roli bilan kirdingiz.";
        case "viewer":
            return "Siz viewer roli bilan kirdingiz.";
        default:
            return "Noma'lum rolni kiritdingiz.";
    }
}

console.log(getRoleMessage('admin'));
console.log(getRoleMessage('viewer'));
