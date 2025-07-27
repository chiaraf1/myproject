const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../index");

describe("POST /api/register", () => {
beforeAll(async () => {
    if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI_ATLAS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    }
});

it(
    "debería registrar un usuario correctamente",
    async () => {
    const res = await request(app)
        .post("/api/register")
        .send({
        nombre: "Usuario Test",
        email: "usuariotest" + Date.now() + "@test.com",
        password: "123456",
        });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("mensaje", "Usuario registrado");
    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toHaveProperty("email");
    expect(res.body.data).toHaveProperty("nombre");
    },
    10000 // timeout aumentado a 10 segundos
);

afterAll(async () => {
    await mongoose.connection.close();
});
});
