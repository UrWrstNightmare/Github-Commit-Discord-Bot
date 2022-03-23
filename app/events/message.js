import * as commands from "../commands/index.js";
import reactionMiddleware from "../middleware/reactionMiddleware.js";

const fMsgHandler = async (msg) => {
    console.log(msg);
    if (msg.author.bot) return; // Prevent Infinite Loop
    if (!msg.content.startsWith(commands.PREFIX)) return; // Do nothing if not a command

    const userCmd = msg.content.slice(commands.PREFIX.length);
    const LUserCmd = userCmd.split(' ');

    let bCommandSuccess = false;
    for (const command of commands.COMMANDS) { // Iterate over commands
        if (LUserCmd[0] !== command.text) continue;
        if (LUserCmd.length !== command.required_arg) {
            await msg.reply(`[${ command.title }][Syntax Error] 이 커맨드에 필요한 인자는 ${ command.required_arg }개 입니다. 총 ${ LUserCmd.length }개의 인자가 입력되었습니다.\n\n예시: ${ command.example }`)
            continue;
        }

        // Function should return if command processing was success
        bCommandSuccess = await command.action(msg);
    }

    await reactionMiddleware(msg, bCommandSuccess);
}

export { fMsgHandler };