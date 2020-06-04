const Discord = require("discord.js");
const bot = new Discord.Client();



const PREFIX = "/";

bot.on("ready", () =>{
    console.log(">> EndHQ Bot, Loaded. <<");
    bot.user.setActivity("EndHQ | /help");
})

bot.on("message", message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case "ip":
            message.channel.send("➥ `endhq.cf`");
            console.log("Hey! Someone executed the /ip command!");
        break;
        case "help":
            message.channel.send("> ‣ **Help** \n > _ _ \n > **/ip** \n > **/help** \n > **/apply** \n > _ _");
        break;
        case "apply":
            message.channel.send("> ‣ **Apply** \n > You may apply in *no link :(* !");
        break;
        case "store":
            message.channel.send("> **Store:** \n > https://store.endhq.cf");
        break;
    }
})

bot.on('message', function(message){
    if(message.content == "hi"){
        message.channel.send("Hey there!");
    }
})

bot.on('message', function(message){
    if(message.content == "hello"){
        message.channel.send("Hey there!");
    }
})


bot.login(process.env.token);