const z=Object.freeze({//فریزم نکنم تغییر بدم ارور نمیده
    INFO:Symbol.for('say your description for own'),
    ERROR:Symbol.for('say your description for own')
})
z.ERROR="sss"//انجا تغغیر دادم


function m(logtype,meessage)
{
    switch (logtype) {
        case z.INFO:
            console.log(`info: ${meessage}`)
            break;
            case z.ERROR:
                console.log(`erro: ${meessage}`)
                break;
        default:
throw "invalid log type"
            break;
    }
}
(m(z.INFO,'rerer'))
m(z.ERROR,'this is eror')