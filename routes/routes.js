import express from 'express';
import authController from '../controllers/authController';
const router = express();

router.get('/login', authController.loginPage);
router.post('/login', authController.login);
router.get('/logout', authController.signUpPage);
router.post('/logout', authController.signUp);
router.get('/app', authController.mainPage);

export default router;

const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("sequelize")
const models = reuiqre("../models")

// modulos a acceso a BD
const query = require("../persistencias")

const partida = models.Partida;
const administrador = models.Administrador;
const banner = models.Banner;
const categoriajuego = models.CategoriaJuego;
const cliente = models.Cliente;
const departamento = models.Departamento;
const distrito = models.Distrito;
const hojapuestas = models.HojaApuestas;
const juego = models.Juego;
const partida = models.partida;

const rutas = express.Router();