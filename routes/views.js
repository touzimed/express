const express=require('express');
const router=express.Router();
const path=require('path');
const app=express();



const timeCheckMiddleware = (req, res, next) => {
    const currentHour = new Date().getHours();
    const currentDay = new Date().getDay();
  
    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
      next(); // Si l'heure de la requête est valide, passez au prochain middleware ou à la route
    } else {
      res.send('L\'application n\'est disponible que pendant les heures de travail (du lundi au vendredi, de 9h à 17h).');
    }
  };
  
  router.get('/',timeCheckMiddleware,(req,rep)=>{rep.sendFile(path.join(__dirname,'../','public','home.html'))})
  router.get('/contact',timeCheckMiddleware,(req,rep)=>{rep.sendFile(path.join(__dirname,'../','public','contact.html'))})
  router.get('/services',timeCheckMiddleware,(req,rep)=>{rep.sendFile(path.join(__dirname,'../','public','services.html'))})
  
  module.exports = router
