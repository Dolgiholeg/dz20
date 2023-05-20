let but = document.getElementById('but1')
let forma = document.getElementById('form1')

forma.onsubmit = f1

function f1() {
    console.log(forma.elements)
    console.log(forma.elements.length)
    let stroka = ''
    let elems = forma.elements
    for (e in elems) {
        if (elems[e].type == 'checkbox' && elems[e].checked) {
            stroka += elems[e].name
            stroka += ' --  выбран' + '\n'
        }
        if (elems[e].type == 'radio' && elems[e].checked) {
            stroka += elems[e].name
            stroka += ' -- ' + elems[e].value + '\n'
        }

        if (e == forma.elements.length - 1) {
            break
        }
        if (elems[e].name == '') {
            continue
        }
        if (elems[e].value == undefined) {
            continue
        }

        if (elems[e].type!='checkbox' && elems[e].type!='radio') {
            stroka += elems[e].name
            stroka += ' -- ' + elems[e].value + '\n'
        }

    }
    console.log(stroka)
    telegram(stroka)
    return false
}

bot ='t.me/rutufbsjdifbebot'
token = '6082176787:AAHfuKCTQbi1HFNCjD1bNvWhP8th_I60Hfk'
chatid = '5512926237'

function telegram(str) {
    let z=$.ajax({
            type: "POST",
            url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
            data: "parse_mode=HTML&text="+encodeURIComponent(str),
}).then(alert('отправили в тг') )
}
