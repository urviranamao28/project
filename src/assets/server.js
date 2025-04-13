import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';
import path from 'path';   
import { fileURLToPath } from 'url'; 
import { dirname } from 'path';
import { createRequire } from 'module';
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/social_app', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});
// Mongoose schema
const Photo = mongoose.model('Photo', new mongoose.Schema({
   filename: String,
   path: String,
   uploadedAt: { type: Date, default: Date.now }
}));
// Multer storage config
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
       cb(null, 'uploads/');
   },
   filename: (req, file, cb) => {
       cb(null, Date.now() + '-' + file.originalname);
   }
});
const upload = multer({ storage });
// Upload endpoint
app.post('/api/photos', upload.single('photo'), async (req, res) => {
   try {
       const photo = new Photo({
           filename: req.file.filename,
           path: req.file.path
       });
       await photo.save();
       res.status(200).json({ message: 'Photo uploaded', photo });
   } catch (err) {
       res.status(500).json({ error: 'Upload failed' });
   }
});
app.listen(5000, () => {
   console.log('Server running on http://localhost:5000');
});