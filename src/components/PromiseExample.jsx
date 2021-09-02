import React from 'react'

export default function PromiseExample() {
    const handleClick=()=>{
        let promise1 = new Promise(function (resolve, reject) {
            setTimeout(() => {fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
            .then(json => {
                //console.log(json)
                resolve(json)
            })
        }, 2000);
            // setTimeout(() => reject(new Error("Whoops!")), 2000);
        });
        let promise2 = new Promise(function (resolve, reject) {
            
            //setTimeout(() => resolve("promise2 Happy!"), 4000);
            setTimeout(() => reject(new Error("Whoops!")), 2000);
        });
        
        let promises = [promise1, promise2];
        
        //promise1.then(res => { console.log(res) }).catch(error => console.log(error))
        
        Promise.allSettled(promises).then(res => {
            console.log('allSettled response start: ')
            res.map(x=>{console.log(x)});
        console.log('allSettled response end.');
        }).catch(err=> console.log('all settled catch : ',err))
        Promise.race(promises).then(res => {
            console.log('race response start :')
            console.log(res);
            console.log('race response end.')
        }).catch(err=> console.log('race catch :',err))
        Promise.all(promises).then(res => {console.log('all response start: ');
        res.map(x=>{console.log(x)});
        console.log('all response end.');
    }
        ).catch(err=> console.log('all catch :',err))
        
        Promise.any(promises).then(res => {
            console.log('any response start :')
            console.log(res);
            console.log('any response end.');
        }).catch(err=> console.log('any catch : ',err))
        
        
    }
    return (
        <div>
            Promises
            <button onClick={handleClick}>Click and see console</button>
        </div>
    )
}
