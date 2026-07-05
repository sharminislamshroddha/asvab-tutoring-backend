import { FastifyReply, FastifyRequest } from "fastify";

import { registerUser } from "./auth.service";
import { RegisterInput } from "./auth.schema";

export async function registerController(
    request: FastifyRequest<{
        Body: RegisterInput;
    }>,
    reply: FastifyReply
) {
    const user = await registerUser(request.body);

    return reply.code(201).send({
        success: true,
        message: "User registered successfully",
        data: user,
    });
}