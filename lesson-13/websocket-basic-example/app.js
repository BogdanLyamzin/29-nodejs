const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const clients = [];

wsServer.on("connection", (newClient)=>{
    clients.push(newClient);
    // console.log("Новое подключение с фронтенда");
    setTimeout(() => {
        newClient.send("Добро пожаловать в наш уютный бекенд!");

        clients.forEach(client => {
            if(client !== newClient){
                client.send("У нас новый пользователь!")
            }
        });
    }, 4000);
});


