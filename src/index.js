import './styles/styles.css';
import { fetchPhotos } from './apiService';
import galeryTpl from './tpl/card.handlebars';
import '@pnotify/core/dist/BrightTheme.css';
import { notices, PNotify } from '@pnotify/core';
import { error, Stack } from '@pnotify/core';
// import { async } from 'fast-glob';
let link;
let counter = 1;
let counter1 = 1;

const buttonNode = document.querySelector('#button-load-more');
const galeryNode = document.querySelector('#gallery');
const inputNode = document.querySelector('#input');
inputNode.addEventListener('change', async e => {
    link = e.target.value;

    const data = await fetchPhotos(e.target.value, 1);
    console.log(data);
    // console.log(e.target.value.hits.length);
    if (data.hits.length === 0) {
        error({
            text: "Not corect. Please try again!",
            name: "error_massage",
            stack: new Stack({
                dir1: 'down', dir2: 'right', // Position from the top left corner.
                firstpos1: 90, firstpos2: 90 // 90px from the top, 90px from the left.
            })
        });
        if (buttonNode.classList.contains('hide')) return false;
        else {
            buttonNode.classList.add('hide')
        }
        // const stopFn = () => {
        //     return false;
        // buttonNode.classList.add('hide');
        }
    // }
    const message = document.querySelector('div[data-pnotify]');
    // console.log(message);

    galeryNode.innerHTML = galeryTpl(data);
    // console.log(e.target.value);
    
    if (data.hits.length !== 0) {
        buttonNode.classList.remove('hide');
        // if (!message) return false;
        // else {
            // message.classList.add('hide');
        // }
    }



    buttonNode.addEventListener('click', async e => {
        const element = document.querySelector('.button');
        // element.scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'end',
        // });
        console.log(e.target);
        // console.log(link);
        counter++;
        const newData = await fetchPhotos(link, counter);
        console.log(newData);
        galeryNode.insertAdjacentHTML('beforeend', galeryTpl(newData));
        window.scrollBy({
            top: 100,
            left: 100,
            behavior: 'smooth'
        });
        console.log(counter1);
        counter1++;
        console.log(counter1);
        // galeryNode.innerHTML = galeryTpl(newData);
    });

});



