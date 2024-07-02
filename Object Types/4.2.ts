interface UserProfile {
    ism: string;
    email: string;
    telefon: string;
}

function updateUserProfile(user: UserProfile, updates: Partial<UserProfile>): UserProfile {
    return { ...user, ...updates };
}

let user: UserProfile = { ism: 'Ali', email: 'oldemail@example.com', telefon: '123456789' };
user = updateUserProfile(user, { email: 'newemail@example.com' });
console.log(user);
