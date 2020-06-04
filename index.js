const Discord = require("discord.js");
const bot = new Discord.Client();



const PREFIX = "/";

bot.on("ready", () =>{
    console.log(">> BrokLands Bot, Loaded. <<");
    bot.user.setActivity("BrokLands | /help");
})

bot.on("message", message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case "ip":
            message.channel.send("➥ `BrokLands.minehut.gg`");
            console.log("Hey! Someone executed the /ip command!");
        break;
        case "help":
            message.channel.send("> ‣ **Help** \n > _ _ \n > **/ip** \n > **/help** \n > **/apply** \n > _ _");
        break;
        case "apply":
            message.channel.send("> ‣ **Apply** \n > You may apply in https://forms.gle/igAHXHMNR8jpKCyY8 !");
        break;
        case "fantasia":
            message.channel.send("> **Fantasia's Discord:** \n > https://discord.gg/QMPkeq9");
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