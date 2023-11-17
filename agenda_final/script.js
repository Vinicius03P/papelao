//Fetch serve para requisicoes http

fetch("http://192.168.1.59:3000/produtos")



.then((resposta)=>{
    if(resposta.status == 200){
        resposta.json().then((dados)=>{
            //dados é a lista de objetos que vem da api
            const div = document.querySelector("#root");
            dados.map((contato)=>{
                const card = document.createElement("article")
                card.id = contato.id
                const nome = document.createElement("h3")
                nome.innerText = contato.nome
                const email = document.createElement("p")
                email.innerText = contato.email
                const tel = document.createElement("p")
                tel.innerText = contato.tel
                const edit = document.createElement("a")
                edit.className = "edit"
                edit.innerText = "editar"
                edit.href = `./formulario.html?id=${contato.id}&nome=${contato.nome}&email=${contato.email}&tel=${contato.tel}`
                const del = document.createElement("button")
                del.className = "delete"
                del.innerText = "excluir"
                del.addEventListener("click",()=>{
                        fetch(`http://192.168.1.59:3000/produtos/excluir/${contato.id}`,{
                            method: 'DELETE',
                            headers: {
                                'Content-Type' : 'application/json'
                            },
                            }).then((resposta)=>{
                                if(resposta.status != 200){
                                    console.log(resposta.json())
                            }
                        })
                    })

                card.append(nome,email,tel,edit,del)
                div.append(card)
            })
        })
    }
})