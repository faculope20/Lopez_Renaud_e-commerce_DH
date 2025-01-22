const bcrypt = require("bcrypt");
const saltRounds = 10;

("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    // Insertar en Categories (timestamps: false)
    await queryInterface.bulkInsert("Categories", [
      { id: 1, name: "Camperas" },
      { id: 2, name: "Buzos" },
      { id: 3, name: "Shorts" },
      { id: 4, name: "Pantalones" },
      { id: 5, name: "Remeras" },
    ]);

    // Insertar en Brands (timestamps: false)
    await queryInterface.bulkInsert("Brands", [
      { id: 1, name: "Nike" },
      { id: 2, name: "Jordan" },
    ]);

    // Insertar en Products (timestamps: true)
    await queryInterface.bulkInsert("Products", [
      {
        name: "Campera Oversized Fit",
        description: "(original y con etiqueta)",
        image: "campera1.png",
        category_id: 1,
        brand_id: 1,
        price: 85000,
        size: "S",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Campera Oversized Fit",
        description: "(original y con etiqueta)",
        image: "campera2.png",
        category_id: 1,
        brand_id: 1,
        price: 73000,
        size: "M",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Campera Oversized Fit",
        description: "(original y con etiqueta)",
        image: "campera3.png",
        category_id: 1,
        brand_id: 1,
        price: 85000,
        size: "L",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Campera Oversized Fit",
        description: "(original y con etiqueta)",
        image: "campera1.png",
        category_id: 1,
        brand_id: 1,
        price: 85000,
        size: "S",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Buzo Loose Fit /Plus",
        description: "(original y con etiqueta)",
        image: "buzo.png",
        category_id: 2,
        brand_id: 1,
        price: 62000,
        size: "3X",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Remera Oversized Fit",
        description: "(original y con etiqueta)",
        image: "remera1.png",
        category_id: 3,
        brand_id: 1,
        price: 35000,
        size: "M",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Remera Loose Fit",
        description: "(original y con etiqueta)",
        image: "remera2.png",
        category_id: 3,
        brand_id: 2,
        price: 35000,
        size: "XL",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Remera Loose Fit",
        description: "(original y con etiqueta)",
        image: "remera3.png",
        category_id: 3,
        brand_id: 2,
        price: 36000,
        size: "L",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Remera Oversized Fit",
        description: "(original y con etiqueta)",
        image: "remera4.png",
        category_id: 3,
        brand_id: 1,
        price: 33000,
        size: "L",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Short Loose Fit / High Rise",
        description: "(original y con etiqueta)",
        image: "short1.png",
        category_id: 4,
        brand_id: 1,
        price: 44000,
        size: "S",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Short Standard Fit",
        description: "(original y con etiqueta)",
        image: "short2.png",
        category_id: 4,
        brand_id: 2,
        price: 40000,
        size: "XS",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Pantalon Loose Fit / Mid Rise",
        description: "(original y con etiqueta)",
        image: "pantalon1.png",
        category_id: 5,
        brand_id: 1,
        price: 48000,
        size: "M",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Pantalon Standard Fit / Mid Rise",
        description: "(original y con etiqueta)",
        image: "pantalon2.png",
        category_id: 5,
        brand_id: 1,
        price: 57000,
        size: "S",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Pantalon Standard Fit",
        description: "(original y con etiqueta)",
        image: "pantalon3.png",
        category_id: 5,
        brand_id: 1,
        price: 57000,
        size: "XS",
        createdAt: now,
        updatedAt: now,
      },
    ]);

    // Insertar en Users (timestamps: true)
    await queryInterface.bulkInsert("Users", [
      {
        firstName: "José",
        lastName: "Pérez",
        email: "jose.perez@gmail.com",
        password: await encryptPassword("123"),
        category: "admin",
        profileImage: "imagen_perfil_1.jpeg",
        createdAt: now,
        updatedAt: now,
      },
      {
        firstName: "María",
        lastName: "López",
        email: "maria.lopez@gmail.com",
        password: await encryptPassword("123"),
        category: "user",
        profileImage: "imagen_perfil_1.jpeg",
        createdAt: now,
        updatedAt: now,
      },
      {
        firstName: "Carlos",
        lastName: "Gómez",
        email: "carlos.gomez@gmail.com",
        password: await encryptPassword("123"),
        category: "user",
        profileImage: "imagen_perfil_1.jpeg",
        createdAt: now,
        updatedAt: now,
      },
    ]);

    // Insertar en Colors (timestamps: false)
    await queryInterface.bulkInsert("Colors", [
      { name: "Rojo" },
      { name: "Azul" },
      { name: "Negro" },
      { name: "Blanco" },
      { name: "Verde" },
      { name: "Amarillo" },
      { name: "Gris" },
      { name: "Naranja" },
    ]);

    // Insertar en Product_Colors (timestamps: false)
    // Por cada prdocuto agregar relaciones de color/es
    await queryInterface.bulkInsert("Product_Colors", [
      {
        product_id: 1,
        color_id: 4,
      },
      {
        product_id: 1,
        color_id: 3,
      },
      {
        product_id: 2,
        color_id: 7,
      },
      {
        product_id: 2,
        color_id: 2,
      },
      {
        product_id: 3,
        color_id: 3,
      },
      {
        product_id: 3,
        color_id: 4,
      },
      {
        product_id: 5,
        color_id: 5,
      },
      {
        product_id: 6,
        color_id: 1,
      },
      {
        product_id: 7,
        color_id: 5,
      },
      {
        product_id: 8,
        color_id: 2,
      },
      {
        product_id: 9,
        color_id: 8,
      },
      {
        product_id: 10,
        color_id: 3,
      },
      {
        product_id: 11,
        color_id: 7,
      },
      {
        product_id: 12,
        color_id: 6,
      },
      {
        product_id: 11,
        color_id: 1,
      },
    ]);

    // Crear Carrito (timestamps: true)
    await queryInterface.bulkInsert("ShoppingCart", [
      {
        user_id: 2,
        total: 156.07,
        createdAt: now,
        updatedAt: now,
      },
    ]);

    // Insertar productos al Carrito (timestamps: true)
    await queryInterface.bulkInsert("CartItems", [
      {
        cart_id: 1,
        product_id: 5,
        quantity: 1,
        price: 92.75,
        createdAt: now,
        updatedAt: now,
      },
      {
        cart_id: 1,
        product_id: 8,
        quantity: 2,
        price: 63.32,
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Eliminar datos en orden inverso
    await queryInterface.bulkDelete("CartItems", { cart_id: 1 }, {});
    await queryInterface.bulkDelete("ShoppingCart", { user_id: 2 }, {});
    await queryInterface.bulkDelete("Product_Colors", null, {});
    await queryInterface.bulkDelete("Colors", null, {});
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Products", null, {});
    await queryInterface.bulkDelete("Brands", null, {});
    await queryInterface.bulkDelete("Categories", null, {});
  },
};


// Función para encriptar contraseñas
const encryptPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};
