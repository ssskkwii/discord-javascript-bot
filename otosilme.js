module.exports = {
    kod: "sil",
    async run (client, message, args){
        if (isNaN(args)) return message.reply('Lütfen sayı giriniz!');
        message.channel.bulkDelete(5)
message.delete()
5000;
    }
};