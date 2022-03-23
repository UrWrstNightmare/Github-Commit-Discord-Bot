import { client } from '../index';
import * as commands from "../commands";

const reactionMiddleware = async (msg) => {
    await msg.react('✅'); // Add reaction;
}

client.on('messageCreate', async (msg) => {
   if (msg.author.bot) return; // Prevent Infinite Loop
   if (!msg.content.startsWith(commands.PREFIX)) return; // Do nothing if not a command

   const userCmd = msg.content.slice(commands.PREFIX.length);

   switch (userCmd) {
       case commands.COMMANDS.INFO:
           await reactionMiddleware(msg);
           await msg.reply(`${ msg.author.username }님 반갑습니다! 저는 commit-bot 입니다. 여러분이 열심히 1일 1커밋을 하고 있는지 감시하는 봇이죠 👀`);
           break;
       case commands.COMMANDS.HELP:
           await reactionMiddleware(msg);
           await msg.reply(`도움말을 출력합니다.`);
           break;
       case commands.COMMANDS.REGISTER_USER:
           await reactionMiddleware(msg);
           await msg.reply(`사용자를 commit-check에 등록합니다.`);
           break;
       case commands.COMMANDS.UNREGISTER_USER:
           await reactionMiddleware(msg);
           await msg.reply(`사용자를 commit-check에서 삭제합니다.`);
           break;
       case commands.COMMANDS.LIST_USERS:
           await reactionMiddleware(msg);
           await msg.reply(`사용자 목록을 추가합니다.`);
           break;
       case commands.COMMANDS.CHECK_COMMIT:
           await reactionMiddleware(msg);
           await msg.reply(`커밋 현황을 확인합니다.`);
           break;
       default:
           await msg.reply('커맨드를 인식하지 못했습니다 😭');
   }

});