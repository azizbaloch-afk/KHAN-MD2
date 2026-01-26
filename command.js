var commands = [];

function cmd(info, func) {
    var data = info;
    data.function = func;
    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!info.desc) info.desc = '';
    if (!data.fromMe) data.fromMe = false;
    if (!info.category) data.category = 'misc';
    if(!info.filename) data.filename = "Not Provided";
    commands.push(data);
    return data;
}
module.exports = {
    cmd,
    AddCommand:cmd,
    Function:cmd,
    Module:cmd,
    commands,
};

cmd({
    pattern: "gdrive",
    desc: "Google Drive On/Off",
    category: "utility",
    filename: __filename
},
async(void, citel, text) => {
    // Humne owner ki shart (!isCreator) hata di hai
    if (text === "on") {
        global.gdrive_status = "true";
        return citel.reply("✅ G-Drive Auto-Upload ON ho gaya!");
    }
    if (text === "off") {
        global.gdrive_status = "false";
        return citel.reply("❌ G-Drive Auto-Upload OFF!");
    }
    citel.reply("Istemal: .gdrive on ya .gdrive off");
});
