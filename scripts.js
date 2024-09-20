
const f = document.forms[0]; 
let tr = document.getElementById("tablee"); 
let t = tr; 
f.addEventListener("submit", (e) => { 
    e.preventDefault(); 
    let body = {}; 
    for (let i = 0; i < f.elements.length; i++) { 
        let tag = f[i]; 
        if (tag.name) { 
            if (tag.type === "radio" && tag.checked) { 
                body[tag.name] = tag.value; 
            } else if (tag.type !== "radio") { 
                body[tag.name] = tag.value; 
            } 
        } 
    } 
    console.log(body); 
    let html = "<tr class =table-elements>"; 
    html += `<td><img src="${body.imagee}" width="50" alt="${body.title}"></td>`; 
    html += `<td>${body.title || ""}</td>`; 
    html += `<td>${body.sort || ""}</td>`; 
    html += `<td>${body.strong || ""}</td>`; 
    html += `<td>${body.churka || ""}</td>`; 
    html += `<td>${body.tochik || ""}</td>`; 
    html += "</tr>" 
    t.innerHTML += html; 
}) 
