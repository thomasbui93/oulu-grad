import admin from './admin';
import client from './client';

export default function (app) {
    app.use('/admin', admin);
    app.use('/api', client);
} 
