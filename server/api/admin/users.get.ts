// Create a Nuxt 3 API route to fetch all users from firebase-admin and return them as JSON
// Assume the body contains a firebase "userToken". First it must be verified using the firebase-admin SDK and that the user has the role "admin". If so, return all users.
import {object, string} from "yup";
import {getAuth} from "firebase-admin/auth";
import {getDatabase} from "firebase-admin/database";

const getAllUsersSchema = object({
    userToken: string().required()
});
export default defineEventHandler(async (event) => {
    const auth = getAuth();
    const db = getDatabase();

    try {
        const query = getQuery(event);
        const data = await getAllUsersSchema.validate(query);

        const decodedToken = await auth.verifyIdToken(data.userToken);

        if (!decodedToken) {
            throw createError({
                statusCode: 401,
                statusMessage: "Failed to authenticate the request"
            });
        }

        const ref = db.ref("users");

        const test = ref.orderByValue().on("value", (snapshot) => {
            snapshot.forEach((data) => {
                console.log(data.val());
            });
        });

        return test;
    } catch (error) {
        throw createError({
            statusMessage: "Failed to send email",
            data: {details: error}
        });
    }

    return {message: "Endpoint called"};
});
