
const template = '你好，我是<%= obj.name %>'
const obj = {
    name: '海绵宝宝',
}

function runTemplate(template, obj) {
    template.replaceAll(/(^(<%=)(*=key)+(%>)$)/, (key) => obj[key])   
}

console.log(runTemplate(template, obj));

