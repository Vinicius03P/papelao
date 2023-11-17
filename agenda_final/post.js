const params = new URLSearchParams(window.location.search)

const id = params.get("id")
const nome = params.get("nome")
const email = params.get("email")
const tel = params.get("tel")

if(id!=null && nome!=null && email!=null && tel!=null){
    document.querySelector("button").addEventListener("click",()=>{
        fetch(`http://192.168.1.59:3000/produtos/alterar/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },            
            body: JSON.stringify({
                "nome" : document.querySelector("#nome").value,
                "email": document.querySelector("#email").value,
                "tel": parseFloat(document.querySelector("#tel").value)
            })
            }).then((resposta)=>{
                if(resposta.status != 200){
                    console.log(resposta.json())
            }
        })
    })
}
else{
    document.querySelector("button").addEventListener("click",()=>{
        fetch("http://192.168.1.59:3000/produtos/novo",{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },            
            body: JSON.stringify({
                "nome" : document.querySelector("#nome").value,
                "email": parseFloat(document.querySelector("#email").value),
                "tel": parseFloat(document.querySelector("#tel").value)
            })
            }).then((resposta)=>{
                if(resposta.status != 200){
                    console.log(resposta.json())
            }
        })
    })
}

