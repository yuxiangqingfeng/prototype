function i(o,r,s){const a=e=>{const n=String(e??"");return/[",\r\n]/.test(n)?`"${n.replaceAll('"','""')}"`:n},l=[r,...s].map(e=>e.map(a).join(",")).join(`\r
`),c=URL.createObjectURL(new Blob([`\uFEFF${l}`],{type:"text/csv;charset=utf-8"})),t=document.createElement("a");t.href=c,t.download=o,t.click(),setTimeout(()=>URL.revokeObjectURL(c),0)}export{i as d};
