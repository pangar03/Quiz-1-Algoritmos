import {completeTask} from './utils/utilsCompleteTask.js';
import { getMostPopulated } from './utils/utilsGetMostPopulated.js';

const tareas = [
    {
        id: 1,
        nombre: 'Barrer',
        completada: false
    },
    {
        id: 2,
        nombre: 'Trapear',
        completada: false
    },
    {
        id: 3,
        nombre: 'Limpiar platos',
        completada: false
    },
    {
        id: 4,
        nombre: 'Hacer la cama',
        completada: false
    },
    {
        id: 5,
        nombre: 'Comprar pan',
        completada: true
    },
];

const cities = [
    {
        nombre: 'Cali',
        population: 10000000,
    },
    {
        nombre: 'Bogota',
        population: 20000000,
    },
    {
        nombre: 'Medellin',
        population: 3000000,
    },
    {
        nombre: 'Jamundi',
        population: 40000,
    },
    {
        nombre: 'Popayork',
        population: 5000000000,
    },
    {
        nombre: 'Palmira',
        population: 5000000001,
    },
];

const render = () => {
    console.log("========== EJERCICIO 1 ===============");
    console.log(completeTask(tareas, 3));
    console.log("========== EJERCICIO 2 ===============");
    console.log(getMostPopulated(cities));
};

document.addEventListener('DOMContentLoaded', render);