const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../index");

describe("POST /api/login", () => {
beforeAll(async () => {
    if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI_ATLAS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    }
});

it(
    "debería hacer login correctamente con usuario válido",
    async () => {
    const res = await request(app)
        .post("/api/login")
        .send({
          email: "ctatifm77@gmail.com", // cambialo por un email real
          password: "holasoychiara",            // y la contraseña real
        });

    expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("token"); // adaptá si tu API devuelve algo distinto
    },
    10000
);

afterAll(async () => {
    await mongoose.connection.close();
});
});
