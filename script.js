const Calculator_Screen = document.querySelector('input');
const Buttons = [...document.querySelectorAll('.btn')];
const equal = document.querySelector('.equal');
const Clear = document.querySelector('.clear');

    Buttons.forEach(num=> {
        num.onclick = ()=>{
                if(Calculator_Screen.value === '0') {
                    Calculator_Screen.value='';
                }
                Calculator_Screen.value += num.value
                equal.onclick = ()=> {
                    try {
                        Calculator_Screen.value = eval(Calculator_Screen.value);
                    } catch (error) {
                        Calculator_Screen.value = `Error`;
                    }
                };
                Clear.onclick = () => {
                    Calculator_Screen.value = '0';
                };
            };
    })
